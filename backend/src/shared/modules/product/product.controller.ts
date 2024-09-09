import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';

import { CreateProductDto } from './dto/create-product.dto.js';
import { ProductRdo } from './rdo/product.rdo.js';
import { ProductService } from './product.service.js';
import { BaseController, HttpMethod, ParamProductId, ValidateDtoMiddleware, ValidateObjectIdMiddleware } from '../../libs/rest/index.js';
import { Component } from '../../types/index.js';
import { Logger } from '../../libs/logger/index.js';
import { fillDTO } from '../../helpers/index.js';
import { DocumentExistsMiddleware } from '../../libs/rest/middleware/document-exists.middleware.js';
import { UpdateProductDto } from './dto/update-product.dto.js';

@injectable()
export class ProductController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.ProductService) private readonly productService: ProductService
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
  }

  public async index(_req: Request, res: Response): Promise<void> {
    const products = await this.productService.find();

    this.ok(res, fillDTO(ProductRdo, products));
  }

  public async create({ body }: Request<unknown, unknown, CreateProductDto>, res: Response): Promise<void> {
    const result = await this.productService.create(body);

    this.created(res, fillDTO(ProductRdo, result));
  }

  public async details({ params }: Request<ParamProductId>, res: Response): Promise<void> {
    const result = await this.productService.findById(params.id);

    this.ok(res, fillDTO(ProductRdo, result));
  }

  public async update({ body, params}: Request<ParamProductId, unknown, UpdateProductDto>, res: Response): Promise<void> {
    const result = await this.productService.updateById(params.id, body);

    this.ok(res, fillDTO(ProductRdo, result));
  }

  public async delete({ params }: Request<ParamProductId>, res: Response): Promise<void> {
    const result = await this.productService.deleteById(params.id);

    this.noContent(res, result);
  }
}
