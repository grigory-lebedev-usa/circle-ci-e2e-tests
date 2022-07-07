export const PUBLIC_ROUTES = {
  REGISTER: '/register',
  LOGIN: '/login',
  NOT_FOUND_PAGE: '/not-found-page'
};

export const PRIVATE_ROUTES = {
  HOME: '/',
  ORDER: '/order',
  CURRENT_ORDER: '/current-order',
  DRIVER_START: '/driver-start',
  DRIVER_ORDERS: '/driver-orders',
  TRIP: '/trip',
  ORDERS_HISTORY: '/orders-history',
  USERS_CLIENTS: '/users/clients',
  USERS_DRIVERS: '/users/drivers'
};

export const STORAGE_KEYS = {
  USER: 'user'
};

export const USER_VALUES = {
  isAuthenticated: false,
  keepUserLoginIn: false,
  accessToken: '',
  refreshToken: '',
  expirationTime: ''
};

export const REQUEST_STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILED: 'failed'
};

export const EXPIRATION_TOKEN_MARGIN = 1000 * 60 * 2;
