import { inject, injectable } from 'inversify';
import { Component } from '../../types/component.enum.js';
import { Logger } from '../../libs/logger/logger.interface.js';
import { DocumentType, types } from '@typegoose/typegoose';
import { ProductEntity } from './product.entity.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { SortType } from './product.consts.js';

@injectable()
export class ProductService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.ProductModel) private readonly productModel: types.ModelType<ProductEntity>
  ) {}

  public async find(): Promise<DocumentType<ProductEntity>[]> {
    return this.productModel
      .find()
      .sort({createdAt: SortType.Down})
      .exec();
  }

  public async create(dto: CreateProductDto) {
    const result = await this.productModel.create(dto);
    this.logger.info(`New product created: ${result.name}`);

    return result;
  }

  public async findById(productId: string): Promise<DocumentType<ProductEntity> | null> {
    return this.productModel.findById(productId).exec();
  }

  public async updateById(productId: string, dto: UpdateProductDto): Promise<DocumentType<ProductEntity> | null> {
    return this.productModel.findByIdAndUpdate(productId, dto, {new: true}).exec();
  }

  public async deleteById(productId: string): Promise<DocumentType<ProductEntity> | null> {
    return this.productModel.findByIdAndDelete(productId).exec();
  }

  public async exists(offerId: string): Promise<boolean> {
    return (await this.productModel
      .exists({_id: offerId})) !== null;
  }
}
