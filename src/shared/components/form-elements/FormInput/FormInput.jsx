import React, { useState } from 'react';

import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material';

import PropTypes from 'prop-types';

import classes from './form-input.module.css';

import { computedInputType, INPUT_TYPES } from './form-input.constants';

import VisibilityOff from './components/VisibilityOff/VisibilityOff';
import Visibility from './components/Visibility/Visibility';

const FormInput = React.forwardRef(
  (
    { id, label, type, className, error, onChange, onBlur, value, placeholder, helperText },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className={`${classes.container} ${className}`}>
        <FormControl variant="outlined" color="form">
          <InputLabel htmlFor={id} error={error}>
            {label}
          </InputLabel>
          <OutlinedInput
            id={id}
            error={error}
            type={computedInputType(type, showPassword)}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            inputRef={ref}
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
          <FormHelperText error={error}>{helperText}</FormHelperText>
        </FormControl>
      </div>
    );
  }
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(INPUT_TYPES)).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string
};

FormInput.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  value: '',
  placeholder: '',
  className: '',
  error: false,
  helperText: ''
};

export default FormInput;
