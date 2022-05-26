export const initialFormState = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  role: '',
  make: '',
  model: '',
  year: '',
  color: ''
};

export const CLIENT_ROLE_ID = 0;
export const DRIVER_ROLE_ID = 1;

export const USER_SELECT = [
  { id: CLIENT_ROLE_ID, value: 'Client' },
  { id: DRIVER_ROLE_ID, value: 'Driver' }
];
export const defaultUserValues = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  role: '',
  make: '',
  model: '',
  year: '',
  color: ''
};
