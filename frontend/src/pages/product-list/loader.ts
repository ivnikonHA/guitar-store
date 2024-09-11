import { RequestStatus } from '../../consts';
import { store } from '../../store';
import { fetchProductsAction } from '../../store/api-actions';

export function loadProductsData() {

  console.log('loader')
  if (store.getState().PRODUCTS.status === RequestStatus.Idle) {
    store.dispatch(fetchProductsAction());
  }

  return null;
}
