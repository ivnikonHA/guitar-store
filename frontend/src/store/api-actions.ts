import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { generatePath } from 'react-router-dom';

import { APIRoute } from '../consts';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { CreateProductDto, ProductType, UpdateProductDto } from '../types/product';
import { UserData } from '../types/user-data';


const fetchProductsAction = createAsyncThunk<
  ProductType[],
  undefined,
  {extra: AxiosInstance}
>('products/fetchProducts', async (_arg, { extra: api }) => {
  const { data } = await api.get<ProductType[]>(APIRoute.Products);
  return data;
});

const fetchProductByIdAction = createAsyncThunk<
  ProductType,
  string,
  {extra: AxiosInstance}
>('products/fetchProductById', async (id, {extra: api}) => {
  const { data } = await api.get<ProductType>(generatePath(APIRoute.Product, {id}));
  return data;
});

const deleteProductByIdAction = createAsyncThunk<
  string,
  string,
  {extra: AxiosInstance}
>('products/deleteProductById', async (id, {extra: api}) => {
  await api.delete(generatePath(APIRoute.Product, {id}));
  return id;
});

const editProductByIdAction = createAsyncThunk<
  ProductType,
  UpdateProductDto,
  {extra: AxiosInstance}
>('products/editProductById', async (dto, {extra: api}) => {
  const {data} = await api.patch<ProductType>(generatePath(APIRoute.Product, {id: dto.id}), dto);
  return data;
});

const createProductByIdAction = createAsyncThunk<
  ProductType,
  CreateProductDto,
  {extra: AxiosInstance}
>('products/createProductById', async (dto, {extra: api}) => {
  const {data} = await api.post<ProductType>(APIRoute.Products, dto);
  return data;
})

const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  {extra: AxiosInstance}
>('user/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<UserData>(APIRoute.Login);
  return data;
});

const loginAction = createAsyncThunk<UserData, AuthData, {extra: AxiosInstance}>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  }
);

const logoutAction = createAsyncThunk<void, undefined, {extra: AxiosInstance}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout).then(dropToken);
  }
);

export {
  checkAuthAction,
  fetchProductByIdAction,
  deleteProductByIdAction,
  editProductByIdAction,
  createProductByIdAction,
  fetchProductsAction,
  loginAction,
  logoutAction
};
