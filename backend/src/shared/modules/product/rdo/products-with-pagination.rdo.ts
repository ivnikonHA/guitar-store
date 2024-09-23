import { Expose } from 'class-transformer';

import { ProductRdo } from './product.rdo.js';

export class ProductsWithPaginationRdo {
  @Expose()
  public products: ProductRdo[];

  @Expose()
  public totalPages: number;

  @Expose()
  public totalItems: number;

  @Expose()
  public currentPage: number;

  @Expose()
  public itemsPerPage: number;
}
