export interface PaginationResult<T> {
  products: T[];
  totalPages: number;
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
}
