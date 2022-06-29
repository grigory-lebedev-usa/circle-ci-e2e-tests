import axios from 'axios';

import { APP_CONFIG } from '../config/index';
import { API_ROUTES } from '../constants/api.constants';

import LocalStorageService from './LocalStorageService';

export const axiosService = axios.create({ baseURL: APP_CONFIG.apiURL });

axiosService.interceptors.request.use((conf) => {
  const config = conf;
  const { accessToken } = LocalStorageService;
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

axiosService.interceptors.response.use(
  (config) => {
    return config;
  },
  // eslint-disable-next-line func-names
  async function (error) {
    const storedRequest = error.config;
    const {
      keepUserLoginIn,
      refreshToken: { originalRefreshToken }
    } = LocalStorageService;
    // eslint-disable-next-line no-underscore-dangle
    if (error.response.status === 401 && keepUserLoginIn && !storedRequest._retry) {
      const { accessToken, refreshToken, expirationTime } = await axios.post(API_ROUTES.REFRESH, {
        refreshToken: originalRefreshToken
      });
      LocalStorageService.accessToken = accessToken;
      LocalStorageService.refreshToken = refreshToken;
      LocalStorageService.expirationTime = expirationTime;
      axiosService.request(storedRequest);
      // eslint-disable-next-line no-underscore-dangle
      storedRequest._retry = true;
    }
    return Promise.reject(error);
  }
);
