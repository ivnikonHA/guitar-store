import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../consts';
import { productsSlice } from './products/products-slice';
import { userSlice } from './user/user-slice';

const rootReducer = combineReducers({
  [NameSpace.Products]: productsSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});

export { rootReducer };
