import { GuitarType, NameSpace, RequestStatus } from '../../consts';
import { ProductType, StringsCountType } from '../../types/product';
import { State } from '../../types/state';

const getProducts = (state: State): ProductType[] => state[NameSpace.Products].products;
const getProductsDataLoadingStatus = (state: State): RequestStatus =>
  state[NameSpace.Products].status;
const getActiveProduct = (state: State): string | undefined =>
  state[NameSpace.Products].activeProduct;
const getSortType = (state: State): string => state[NameSpace.Products].sortType;
const getSortDirection = (state: State): number => state[NameSpace.Products].sortDirection;
const getFilterGuitarType = (state: State): GuitarType[] => state[NameSpace.Products].filterGuitarType;
const getFilterStringsCount = (state: State): StringsCountType[] => state[NameSpace.Products].filterStringsCount;
const getCurrentProduct = (state: State): ProductType | null =>
  state[NameSpace.Products].currentProduct;

export {
  getActiveProduct,
  getProducts,
  getProductsDataLoadingStatus,
  getSortType,
  getSortDirection,
  getFilterGuitarType,
  getFilterStringsCount,
  getCurrentProduct
};
