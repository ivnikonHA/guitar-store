import { Expose } from 'class-transformer';
import { GuitarType, StringsCountType } from '../../../types/index.js';

export class ProductRdo {
  @Expose()
  public id: string;

  @Expose()
  public name: string;

  @Expose()
  public description: string;

  @Expose()
  public publishDate: Date;

  @Expose()
  public photo: string;

  @Expose()
  public guitarType: GuitarType;

  @Expose()
  public article: string;

  @Expose()
  public stringsCount: StringsCountType;

  @Expose()
  public price: number;
}
