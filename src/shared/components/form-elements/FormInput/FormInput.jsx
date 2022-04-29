import React, { useState } from 'react';

import PropTypes from 'prop-types';

import classes from './form-input.module.css';
import { computedInputType, inputTypes } from './form-input.constants';

function FormInput({ id, type, label, placeholder, onChange, value, name, onBlur, errorMessage }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={classes.input__container}>
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
};

FormInput.defaultProps = {
  placeholder: ''
};

export default FormInput;