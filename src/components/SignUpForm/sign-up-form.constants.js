export const initialErrorsState = {
  email: {
    valid: false,
    errorMessage: ''
  },
  password: {
    valid: false,
    errorMessage: ''
  },
  confirmPassword: {
    valid: false,
    errorMessage: ''
  },
  firstName: {
    valid: false,
    errorMessage: ''
  },
  lastName: {
    valid: false,
    errorMessage: ''
  },
  role: {
    valid: false,
    errorMessage: ''
  },
  make: {
    valid: false,
    errorMessage: ''
  },
  model: {
    valid: false,
    errorMessage: ''
  },
  year: {
    valid: false,
    errorMessage: ''
  },
  color: {
    valid: false,
    errorMessage: ''
  }
};

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
