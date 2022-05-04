import axios from 'axios';

import { APP_CONFIG } from '../config/index';

export const axiosService = axios.create({ baseURL: APP_CONFIG.apiURL });
