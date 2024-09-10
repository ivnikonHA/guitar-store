import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { NameSpace } from '../../consts';
import { ProductStateType } from '../../types/state';
import { fetchProductByIdAction } from '../api-actions';

const initialState: ProductStateType = {
  currentProduct: null,
  isProductDataLoading: false
};

const productSlice = createSlice({
  name: NameSpace.Product,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductByIdAction.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        state.isProductDataLoading = false;
      })
      .addCase(fetchProductByIdAction.pending, (state) => {
        state.isProductDataLoading = true;
      })
      .addCase(fetchProductByIdAction.rejected, (state) => {
        toast.error('Error loading offer data.');
        state.isProductDataLoading = false;
      });
  },
});

export { productSlice };

