import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';

import { CreateProductDto } from './dto/create-product.dto.js';
import { ProductRdo } from './rdo/product.rdo.js';
import { ProductService } from './product.service.js';
import { BaseController, HttpMethod, ParamProductId, UploadFileMiddleware, ValidateDtoMiddleware, ValidateObjectIdMiddleware } from '../../libs/rest/index.js';
import { Component } from '../../types/index.js';
import { Logger } from '../../libs/logger/index.js';
import { fillDTO } from '../../helpers/index.js';
import { DocumentExistsMiddleware } from '../../libs/rest/middleware/document-exists.middleware.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { Config } from '../../libs/config/config.interface.js';
import { RestSchema } from '../../libs/config/rest.schema.js';
import { ProductsWithPaginationRdo } from './rdo/products-with-pagination.rdo.js';
import { Query } from '../../types/query.type.js';

@injectable()
export class ProductController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.ProductService) private readonly productService: ProductService,
    @inject(Component.Config) private readonly configService: Config<RestSchema>
  ) {
    super(logger);

    this.logger.info('Register routes for OfferController');
    this.addRoute({path: '/', method: HttpMethod.Get, handler: this.index});
    this.addRoute({
      path: '/',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [
        //new PrivateRouteMiddleware(),
        new ValidateDtoMiddleware(CreateProductDto)
      ]
    });
    this.addRoute({
      path: '/:id',
      method: HttpMethod.Get,
      handler: this.details,
      middlewares: [
        new ValidateObjectIdMiddleware('id'),
        new DocumentExistsMiddleware(this.productService, 'Product', 'id')
      ]
    });
    this.addRoute({
      path: '/:id',
      method: HttpMethod.Patch,
      handler: this.update,
      middlewares: [
        //new PrivateRouteMiddleware(),
        new ValidateObjectIdMiddleware('id'),
        new DocumentExistsMiddleware(this.productService, 'Product', 'id'),
        new ValidateDtoMiddleware(UpdateProductDto)
      ]
    });
    this.addRoute({
      path: '/:id',
      method: HttpMethod.Delete,
      handler: this.delete,
      middlewares: [
        //new PrivateRouteMiddleware(),
        new ValidateObjectIdMiddleware('id'),
        new DocumentExistsMiddleware(this.productService, 'Product', 'id')
      ]
    });
    this.addRoute({
      path: '/:productId/photo',
      method: HttpMethod.Post,
      handler: this.uploadPhoto,
      middlewares: [
        new ValidateObjectIdMiddleware('productId'),
        new UploadFileMiddleware(this.configService.get('UPLOAD_DIRECTORY'), 'photo'),
      ]
    });
  }

  public async index(req: Request, res: Response): Promise<void> {
    const query = req.query;
    const queryParams: Query = {
      page: typeof(query.page) === 'string' ? query.page : '',
      limit: typeof(query.limit) === 'string' ? query.limit : ''
    };
    const result = await this.productService.find(queryParams);
    console.log(fillDTO(ProductsWithPaginationRdo, result))

    this.ok(res, fillDTO(ProductsWithPaginationRdo, result));
  }

  public async create({ body }: Request<unknown, unknown, CreateProductDto>, res: Response): Promise<void> {
    const result = await this.productService.create(body);
    this.logger.info(`Created product with id ${result.id}`);
    this.created(res, fillDTO(ProductRdo, result));
  }

  public async details({ params }: Request<ParamProductId>, res: Response): Promise<void> {
    const result = await this.productService.findById(params.id);

    this.ok(res, fillDTO(ProductRdo, result));
  }

  public async update({ body, params}: Request<ParamProductId, unknown, UpdateProductDto>, res: Response): Promise<void> {
    const result = await this.productService.updateById(params.id, body);
    this.logger.info(`Updated product with id ${params.id}, name ${body.name}`);
    this.ok(res, fillDTO(ProductRdo, result));
  }

  public async delete({ params }: Request<ParamProductId>, res: Response): Promise<void> {
    const result = await this.productService.deleteById(params.id);

    this.noContent(res, result);
  }

  public async uploadPhoto(req: Request, res: Response) {
    this.created(res, {
      filepath: req.file?.path
    });
  }
}
