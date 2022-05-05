import axios from 'axios';

import { APP_CONFIG } from '../config/index';

export const axiosService = axios.create({ baseURL: APP_CONFIG.apiURL });

axiosService.interceptors.request.use((conf) => {
  const config = conf;
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
