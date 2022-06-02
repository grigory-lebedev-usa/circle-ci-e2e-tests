import React, { useState } from 'react';

import { Controller } from 'react-hook-form';

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

function FormInput({ name, rules, type, className, error, placeholder, control }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Controller
      render={({ field }) => (
        <div className={`${classes.container} ${className}`}>
          <FormControl variant="outlined" color="form">
            <InputLabel htmlFor={name} error={!!error}>
              {placeholder}
            </InputLabel>
            <OutlinedInput
              id={name}
              error={!!error}
              value=""
              type={computedInputType(type, showPassword)}
              {...field}
              inputRef={field.ref}
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
              label={placeholder}
            />
            <FormHelperText error={!!error}>{error ? error?.message : ''}</FormHelperText>
          </FormControl>
        </div>
      )}
      name={name}
      control={control}
      rules={rules}
    />
  );
}

FormInput.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  rules: PropTypes.object,
  type: PropTypes.oneOf(Object.values(INPUT_TYPES)).isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.bool
};

FormInput.defaultProps = {
  control: {},
  rules: {},
  placeholder: '',
  className: '',
  name: '',
  error: null
};

export default FormInput;
