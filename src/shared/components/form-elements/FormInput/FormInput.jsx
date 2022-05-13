import React, { useState } from 'react';

import PropTypes from 'prop-types';

import classes from './form-input.module.css';
import { computedInputType, inputTypes } from './form-input.constants';

const FormInput = React.forwardRef(
  ({ id, type, label, placeholder, onChange, onBlur, name, className, error }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className={`${className}`}>
        <div className={classes.input__container}>
          <input
            id={id}
            className={`${classes.input} ${error && classes.input_invalid}`}
            type={computedInputType(type, showPassword)}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            name={name}
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
        {error && <span className={classes.error}>{error}</span>}
      </div>
    );
  }
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(inputTypes)).isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string
};

FormInput.defaultProps = {
  placeholder: '',
  // eslint-disable-next-line prettier/prettier
  onChange: () => { },
  // eslint-disable-next-line prettier/prettier
  onBlur: () => { },
  className: '',
  error: ''
};

export default FormInput;
