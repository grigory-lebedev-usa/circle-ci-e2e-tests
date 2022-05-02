import axios from 'axios';

import { APP_CONFIG } from '../config/index';

export const axiosInstance = axios.create({ baseURL: APP_CONFIG.baseURL });
