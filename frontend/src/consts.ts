export enum GuitarType {
  Electric = 'электро',
  Acoustic = 'аккустика',
  Ukulele = 'укулеле'
}

export const enum AppRoute {
  Root = '/',
  ProductList = '/products',
  ProductId = '/product/:id',
  Register = '/register',
  AddProduct = '/add-product',
  EditProduct = '/edit-product/:id'
}

export const enum NameSpace {
  Products = 'PRODUCTS',
  User = 'USER'
}

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN'
}

export const enum RequestStatus {
  Idle,
  Loading,
  Success,
  Failed
}

export const enum APIRoute {
  Products = '/products',
  Product = '/products/:id',
  Login = '/users/login',
  Logout = '/users/logout',
}

export const SortType = {
  DATE: 'Date',
  PRICE: 'Price'
};

export const SortDirection = {
  ACSENDING: 1,
  DESCENDING: -1
}

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const UPLOAD_PATH = import.meta.env.VITE_UPLOAD_PATH;
export const REQUEST_TIMEOUT = import.meta.env.VITE_REQUEST_TIMEOUT;
export const TOKEN_HEADER = import.meta.env.VITE_TOKEN_HEADER;
