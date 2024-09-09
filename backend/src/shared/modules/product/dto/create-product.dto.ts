import { IsDateString, IsEnum, IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

import { ProductArticleLength, ProductDecriptionLength, ProductNameLength, ProductPrice } from '../product.consts.js';
import { ProductValidationMessage } from './product.messages.js';
import { GuitarType, StringsCountType } from '../../../types/index.js';

export class CreateProductDto {
  @IsString({message: ProductValidationMessage.name.invalidFormat})
  @MinLength(ProductNameLength.Min, {message: ProductValidationMessage.name.minLength})
  @MaxLength(ProductNameLength.Max, {message: ProductValidationMessage.name.maxLength})
  public name: string;

  @IsString({message: ProductValidationMessage.description.invalidFormat})
  @MinLength(ProductDecriptionLength.Min, {message: ProductValidationMessage.description.minLength})
  @MaxLength(ProductDecriptionLength.Max, {message: ProductValidationMessage.description.maxLength})
  public description: string;

  @IsDateString({}, {message: ProductValidationMessage.publishDate.invalidFormat})
  public publishDate: string;

  @IsString({message: ProductValidationMessage.photo.invalidFormat})
  public photo: string;

  @IsEnum(GuitarType, {message: ProductValidationMessage.guitarType.invalidFormat})
  public guitarType: GuitarType;

  @IsString({message: ProductValidationMessage.article.invalidFormat})
  @MinLength(ProductArticleLength.Min, {message: ProductValidationMessage.article.minLength})
  @MaxLength(ProductArticleLength.Max, {message: ProductValidationMessage.article.maxLength})
  public article: string;

  @IsEnum(StringsCountType, {message: ProductValidationMessage.stringsCount.invalidFormat})
  public stringsCount: StringsCountType;

  @IsNumber({}, {message: ProductValidationMessage.price.invalidFormat})
  @Min(ProductPrice.Min, {message: ProductValidationMessage.price.minValue})
  @Max(ProductPrice.Max, {message: ProductValidationMessage.price.maxValue})
  public price: number;
}
