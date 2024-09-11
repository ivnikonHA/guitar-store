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
  EditProduct = '/edit-product'
}

export const enum NameSpace {
  Products = 'PRODUCTS',
  Product = 'PRODUCT',
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

export const BACKEND_URL = 'http://localhost:5000';
export const UPLOAD_PATH = '/upload/';
