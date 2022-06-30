import axios from 'axios';

import { APP_CONFIG } from '../config/index';

import LocalStorageService from './LocalStorageService';

export const axiosService = axios.create({ baseURL: APP_CONFIG.apiURL });

axiosService.interceptors.request.use((conf) => {
  const config = conf;
  const { accessToken } = LocalStorageService;
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});
