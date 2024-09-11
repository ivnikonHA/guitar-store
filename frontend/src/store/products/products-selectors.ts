import { NameSpace, RequestStatus } from '../../consts';
import { ProductType } from '../../types/product';
import { State } from '../../types/state';

const getProducts = (state: State): ProductType[] => state[NameSpace.Products].products;
const getProductsDataLoadingStatus = (state: State): RequestStatus =>
  state[NameSpace.Products].status;
const getActiveProduct = (state: State): string | undefined =>
  state[NameSpace.Products].activeProduct;
const getSortType = (state: State): string => state[NameSpace.Products].sortType;
const getSortDirection = (state: State): number => state[NameSpace.Products].sortDirection;

export {
  getActiveProduct,
  getProducts,
  getProductsDataLoadingStatus,
  getSortType,
  getSortDirection
};
