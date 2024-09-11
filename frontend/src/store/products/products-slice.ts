import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { GuitarType, NameSpace, RequestStatus, SortDirection, SortType } from '../../consts';
import { ProductsStateType } from '../../types/state';
import { fetchProductsAction, loginAction, logoutAction } from '../api-actions';
import { StringsCountType } from '../../types/product';

const initialState: ProductsStateType = {
  products: [],
  activeProduct: undefined,
  sortType: SortType.DATE,
  sortDirection: SortDirection.DESCENDING,
  filterGuitarType: [],
  filterStringsCount: [],
  status: RequestStatus.Idle,
};

const productsSlice = createSlice({
  name: NameSpace.Products,
  initialState,
  reducers: {
    changeSortType: (state, action: PayloadAction<{ sortType: string }>) => {
      state.sortType = action.payload.sortType;
    },
    changeSortDirection: (state, action: PayloadAction<{ sortDirection: number }>) => {
      state.sortDirection = action.payload.sortDirection;
    },
    changeFilterGuitarType:  (state, action: PayloadAction<{ filterGuitarType: GuitarType[] }>) => {
      state.filterGuitarType = action.payload.filterGuitarType;
    },
    changeFilterStringsCount:  (state, action: PayloadAction<{ filterStringsCount: StringsCountType[] }>) => {
      state.filterStringsCount = action.payload.filterStringsCount;
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

const { changeSortType, changeSortDirection, changeFilterGuitarType, changeFilterStringsCount, activeProduct } = productsSlice.actions;

export { activeProduct, changeSortType, changeSortDirection,  changeFilterGuitarType, changeFilterStringsCount, productsSlice };
