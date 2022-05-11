export function generateValidationError(name, value, errors, password) {
  switch (name) {
    case 'email':
      if (!value) {
        return {
          ...errors,
          [name]: { valid: false, errorMessage: 'Email is required' }
        };
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(value)) {
        return {
          ...errors,
          [name]: { valid: false, errorMessage: 'Email none pass validation' }
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
      if (value.length < 6 || value.length > 20) {
        return {
          ...errors,
          [name]: {
            valid: false,
            errorMessage: 'Password need to be 6 characters and no more 20 characters'
          }
        };
      }
      return {
        ...errors,
        [name]: { valid: true, errorMessage: '' }
      };

    case 'confirmPassword':
      if (!value) {
        return {
          ...errors,
          [name]: {
            valid: false,
            errorMessage: 'Confirm password is required'
          }
        };
      }
      if (value !== password) {
        return {
          ...errors,
          [name]: {
            valid: false,
            errorMessage: `Password doesn't match`
          }
        };
      }
      return {
        ...errors,
        [name]: { valid: true, errorMessage: '' }
      };

    case 'firstName':
      if (!value) {
        return {
          ...errors,
          [name]: {
            valid: false,
            errorMessage: 'First name is required'
          }
        };
      }
      return {
        ...errors,
        [name]: { valid: true, errorMessage: '' }
      };

    case 'lastName':
      if (!value) {
        return {
          ...errors,
          [name]: {
            valid: false,
            errorMessage: 'Last name is required'
          }
        };
      }
      return {
        ...errors,
        [name]: { valid: true, errorMessage: '' }
      };

    case 'make':
      if (!value) {
        return {
          ...errors,
          [name]: {
            valid: false,
            errorMessage: 'Make is required'
          }
        };
      }
      return {
        ...errors,
        [name]: { valid: true, errorMessage: '' }
      };

    case 'model':
      if (!value) {
        return {
          ...errors,
          [name]: {
            valid: false,
            errorMessage: 'Model is required'
          }
        };
      }
      return {
        ...errors,
        [name]: { valid: true, errorMessage: '' }
      };

    case 'year':
      if (!value) {
        return {
          ...errors,
          [name]: {
            valid: false,
            errorMessage: 'Year is required'
          }
        };
      }
      return {
        ...errors,
        [name]: { valid: true, errorMessage: '' }
      };

    case 'color':
      if (!value) {
        return {
          ...errors,
          [name]: {
            valid: false,
            errorMessage: 'Color is required'
          }
        };
      }
      return {
        ...errors,
        [name]: { valid: true, errorMessage: '' }
      };

    case 'source':
      if (!value) {
        return {
          ...errors,
          [name]: {
            valid: false,
            errorMessage: 'Source is required'
          }
        };
      }
      return {
        ...errors,
        [name]: { valid: true, errorMessage: '' }
      };

    case 'destination':
      if (!value) {
        return {
          ...errors,
          [name]: {
            valid: false,
            errorMessage: 'Destination is required'
          }
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
