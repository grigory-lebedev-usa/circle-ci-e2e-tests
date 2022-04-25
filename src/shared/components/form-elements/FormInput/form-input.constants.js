export const inputTypes = {
  email: 'email',
  text: 'text',
  password: 'password',
  checkbox: 'checkbox',
  submit: 'submit'
};

export const computedInputType = (type, showPassword) => {
  if (type !== inputTypes.password) {
    return inputTypes.text;
  }
  if (type === inputTypes.password && showPassword) {
    return inputTypes.text;
  }
  return inputTypes.password;
};
