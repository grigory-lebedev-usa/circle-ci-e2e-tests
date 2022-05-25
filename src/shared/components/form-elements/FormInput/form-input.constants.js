export const INPUT_TYPES = {
  EMAIL: 'email',
  TEXT: 'text',
  PASSWORD: 'password',
  CHECKBOX: 'checkbox',
  NUMBER: 'number',
  SUBMIT: 'submit'
};

export const computedInputType = (type, showPassword) => {
  if (type !== INPUT_TYPES.PASSWORD) {
    return type;
  }
  if (type === INPUT_TYPES.PASSWORD && showPassword) {
    return INPUT_TYPES.TEXT;
  }
  return type;
};
