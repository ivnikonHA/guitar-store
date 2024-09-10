import { NameSpace } from '../../consts';
import { ProductType } from '../../types/product';
import { State } from '../../types/state';

const getCurrentProduct = (state: State): ProductType | null =>
  state[NameSpace.Product].currentProduct;
const getProductDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Product].isProductDataLoading;

export { getCurrentProduct, getProductDataLoadingStatus };
