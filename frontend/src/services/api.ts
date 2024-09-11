import axios, { AxiosInstance } from 'axios';

import { getToken } from './token';
import { BACKEND_URL } from '../consts';


const REQUEST_TIMEOUT = 5000;
const TOKEN_HEADER = 'authorization';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers[TOKEN_HEADER] = `Bearer ${token}`;
      }
      return config;
    },
  );

  return api;
};
