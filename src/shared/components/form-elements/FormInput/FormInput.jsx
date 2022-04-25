import React, { useState } from 'react';

import PropTypes from 'prop-types';

import classes from './form-input.module.css';
import { computedInputType, inputTypes } from './form-input.constants';

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

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(inputTypes)).isRequired,
  label: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  placeholder: PropTypes.string
};

FormInput.defaultProps = {
  pattern: '',
  placeholder: ''
};

export default FormInput;
