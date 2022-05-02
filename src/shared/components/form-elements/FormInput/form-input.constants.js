export const inputTypes = {
  email: 'email',
  text: 'text',
  password: 'password',
  checkbox: 'checkbox',
  number: 'number',
  submit: 'submit'
};

export const computedInputType = (type, showPassword) => {
  if (type !== inputTypes.password) {
    return type;
  }
  if (type === inputTypes.password && showPassword) {
    return inputTypes.text;
  }
  return type;
};
