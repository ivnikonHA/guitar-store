import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../consts';
import { productSlice } from './product/product-slice';
import { productsSlice } from './products/products-slice';
import { userSlice } from './user/user-slice';

const rootReducer = combineReducers({
  [NameSpace.Product]: productSlice.reducer,
  [NameSpace.Products]: productsSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});

export { rootReducer };
