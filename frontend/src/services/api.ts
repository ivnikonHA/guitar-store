import axios, { AxiosInstance } from 'axios';

import { getToken } from './token';

const BACKEND_URL = 'http://localhost:5000';
const REQUEST_TIMEOUT = 5000;
const TOKEN_HEADER = 'X-Token';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers[TOKEN_HEADER] = token;
      }
      return config;
    },
  );

  return api;
};
