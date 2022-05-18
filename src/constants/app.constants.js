export const PUBLIC_ROUTES = {
  REGISTER: '/register',
  LOGIN: '/login'
};

export const PRIVATE_ROUTES = {
  HOME: '/',
  ORDER: '/order',
  CURRENT_ORDER: '/current-order',
  DRIVER_START: 'driver-start'
};

export const STORAGE_KEYS = {
  USER: 'user'
};

export const USER_VALUES = {
  authed: false,
  accessToken: '',
  refreshToken: '',
  expirationTime: '',
  role: ''
};
