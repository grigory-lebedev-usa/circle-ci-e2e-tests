import React, { useState } from 'react';

import PropTypes from 'prop-types';

import classes from './form-input.module.css';
import { computedInputType, inputTypes } from './form-input.constants';

function FormInput({
  id,
  type,
  label,
  placeholder,
  onChange,
  value,
  name,
  onBlur,
  errorMessage,
  className
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${className}`}>
      <div className={`${classes.input__container}`}>
        <input
          id={id}
          className={`${classes.input} ${errorMessage && classes.input_invalid}`}
          type={computedInputType(type, showPassword)}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          onBlur={onBlur}
        />
        <label htmlFor={id} className={classes.input__label}>
          {label}
        </label>
        {type === inputTypes.password && (
          <div className={classes.button__container}>
            <button
              tabIndex="-1"
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
      {errorMessage && <span className={classes.error}>{errorMessage}</span>}
    </div>
  );
}

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(inputTypes)).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  className: PropTypes.string
};

FormInput.defaultProps = {
  placeholder: '',
  errorMessage: '',
  className: ''
};

export default FormInput;
