import React, { useState } from 'react';

import { inputTypes } from '../../../shared/enums';

import classes from './FormInput.module.css';

const computedInputType = (type, showPassword) => {
  if (type !== inputTypes.password) {
    return inputTypes.text;
  }
  if (type === inputTypes.password && showPassword) {
    return inputTypes.text;
  }
  return inputTypes.password;
};

function FormInput({ id, type, label, pattern, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={classes.input__container}>
      <input
        id={id}
        className={classes.input}
        type={computedInputType(type, showPassword)}
        placeholder={placeholder}
        pattern={pattern}
      />
      <label htmlFor={id} className={classes.input__label}>
        {label}
      </label>
      {type === inputTypes.password && (
        <div className={classes.button__container}>
          <button
            type="button"
            className={
              showPassword
                ? `${classes.password__button} ${classes.password__button_active}`
                : classes.password__button
            }
            onClick={handleShowPassword}
          />
        </div>
      )}
    </div>
  );
}

export default FormInput;
