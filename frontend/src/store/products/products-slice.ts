import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { NameSpace, RequestStatus, SortOptions } from '../../consts';
import { ProductsStateType } from '../../types/state';
import { fetchProductsAction, loginAction, logoutAction } from '../api-actions';

const initialState: ProductsStateType = {
  products: [],
  activeProduct: undefined,
  sortType: SortOptions.POPULAR,
  status: RequestStatus.Idle,
};

const productsSlice = createSlice({
  name: NameSpace.Products,
  initialState,
  reducers: {
    changeSortType: (state, action: PayloadAction<{ sortType: string }>) => {
      state.sortType = action.payload.sortType;
    },
    activeProduct: (state, action: PayloadAction<{ productId: string | undefined }>) => {
      state.activeProduct = action.payload.productId;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchProductsAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchProductsAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
        toast.error('Error loading offers data');
      })
      .addCase(loginAction.fulfilled, (state) => {
        if(state.status !== RequestStatus.Idle) {
          state.status = RequestStatus.Idle;
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        if(state.status !== RequestStatus.Idle) {
          state.status = RequestStatus.Idle;
        }
      });
  },
});

const { changeSortType, activeProduct } = productsSlice.actions;

export { activeProduct, changeSortType, productsSlice };
