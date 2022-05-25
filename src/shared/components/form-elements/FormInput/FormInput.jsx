import React, { useState } from 'react';

import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';

import PropTypes from 'prop-types';

import classes from './form-input.module.css';

import { computedInputType, INPUT_TYPES } from './form-input.constants';

import VisibilityOff from './components/VisibilityOff/VisibilityOff';
import Visibility from './components/Visibility/Visibility';

function FormInput({ id, type, label, placeholder, onChange, value, onBlur, className }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${classes.container} ${className}`}>
      <FormControl variant="outlined" color="form">
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <OutlinedInput
          id={id}
          type={computedInputType(type, showPassword)}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          endAdornment={
            type === INPUT_TYPES.PASSWORD && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
          label={label}
        />
      </FormControl>
    </div>
  );
}

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(INPUT_TYPES)).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onBlur: PropTypes.func.isRequired
};

FormInput.defaultProps = {
  placeholder: '',
  className: ''
};

export default FormInput;
