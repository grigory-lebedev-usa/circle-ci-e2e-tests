import axios from 'axios';

import { APP_CONFIG } from '../config/index';
import { STORAGE_KEYS } from '../constants/app.constants';

export const axiosService = axios.create({ baseURL: APP_CONFIG.apiURL });

axiosService.interceptors.request.use((conf) => {
  const config = conf;
  const { accessToken } = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER));
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});
