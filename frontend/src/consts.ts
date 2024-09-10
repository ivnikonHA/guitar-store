export enum GuitarType {
  electro = 'electro',
  acoustic = 'acoustic',
  ukulele = 'ukulele'
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
  Product = '/product/:id',
  Login = '/users/login',
  Logout = '/users/logout',
}

export const SortOptions = {
  POPULAR: 'Popular',
  PRICE_ASCENDING: 'Price: low to high',
  PRICE_DESCENDING: 'Price: high to low',
  TOP_RATED: 'Top rated first'
};
