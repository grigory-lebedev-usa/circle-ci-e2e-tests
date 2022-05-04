export function generateValidationError(name, value, errors) {
  switch (name) {
    case 'email':
      if (!value) {
        return {
          ...errors,
          [name]: { valid: false, errorMessage: 'Email is required' }
        };
      }
      return {
        ...errors,
        [name]: { valid: true, errorMessage: '' }
      };
    case 'password':
      if (!value) {
        return {
          ...errors,
          [name]: { valid: false, errorMessage: 'Password is required' }
        };
      }
      return {
        ...errors,
        [name]: { valid: true, errorMessage: '' }
      };
    default:
      return {
        ...errors
      };
  }
}
