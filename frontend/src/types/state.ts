import { ReactEventHandler } from 'react';

import { AuthorizationStatus, GuitarType, RequestStatus } from '../consts';
import { store } from '../store';
import { ProductType, StringsCountType } from './product';
import { UserData } from './user-data';

export type ProductsStateType = {
  products: ProductType[];
  activeProduct?: string;
  sortType: string;
  sortDirection: number;
  filterGuitarType: GuitarType[],
  filterStringsCount: StringsCountType[],
  status: RequestStatus;
  currentProduct: ProductType | null
}

export type ProductStateType = {
  currentProduct: ProductType | null;
  isProductDataLoading: boolean;
}

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
