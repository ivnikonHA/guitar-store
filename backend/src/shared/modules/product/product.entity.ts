import { defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

import { ProductArticleLength, ProductDecriptionLength, ProductNameLength, ProductPrice } from './product.consts.js';
import { GuitarType, StringsCountType } from '../../types/index.js';

export interface ProductEntity extends defaultClasses.Base {};

@modelOptions({
  schemaOptions: {
    collection: 'products',
    timestamps: true
  }
})

export class ProductEntity extends defaultClasses.TimeStamps {
  @prop({required: true, minlength: ProductNameLength.Min, maxlength: ProductNameLength.Max})
  public name: string;

  @prop({required: true, minlength: ProductDecriptionLength.Min, maxlength: ProductDecriptionLength.Max})
  public description: string;

  @prop({required: true})
  public publishDate: Date;

  @prop({required: true})
  public photo: string;

  @prop({required: true, type: () => String, enum: GuitarType})
  public guitarType: GuitarType;

  @prop({required: true, minlength: ProductArticleLength.Min, maxlength: ProductArticleLength.Max})
  public article: string;

  @prop({required: true, type: () => String, enum: StringsCountType})
  public stringsCount: StringsCountType;

  @prop({required: true, min: ProductPrice.Min, max: ProductPrice.Max})
  public price: number;
}

export const ProductModel = getModelForClass(ProductEntity);
