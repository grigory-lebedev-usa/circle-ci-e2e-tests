export const OPTIONS_VALIDATE = {
  EMAIL: {
    required: 'Email is required',
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Email does not pass validation'
    }
  },
  PASSWORD: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password need to be 6 characters'
    },
    maxLength: {
      value: 20,
      message: 'Password must be no more than 20 characters'
    }
  },
  FIRST_NAME: {
    required: 'First name is required'
  },
  LAST_NAME: {
    required: 'Last name is required'
  },
  ROLE: {
    required: 'Role is required'
  },
  MAKE: {
    required: 'Make is required'
  },
  MODEL: {
    required: 'Model is required'
  },
  YEAR: {
    required: 'Year is required',
    minLength: {
      value: 4,
      message: 'Year need to be 4 characters'
    },
    maxLength: {
      value: 4,
      message: 'Year must be no more than 4 characters'
    }
  },
  COLOR: {
    required: 'Color is required'
  },
  SOURCE: {
    required: 'Source is required'
  },
  DESTINATION: {
    required: 'Destination is required'
  },
  PRICE: {
    required: 'Price is required'
  }
};
