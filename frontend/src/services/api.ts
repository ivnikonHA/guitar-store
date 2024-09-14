import axios, { AxiosInstance } from 'axios';

import { getToken } from './token';
import { BACKEND_URL, REQUEST_TIMEOUT, TOKEN_HEADER } from '../consts';

export const createAPI = (): AxiosInstance => {
  console.log(BACKEND_URL)
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
