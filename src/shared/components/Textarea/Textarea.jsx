import React from 'react';

import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';

import { INPUT_TYPES } from '../form-elements/FormInput/form-input.constants';

import classes from './textarea.module.css';

function Textarea({ name, rules, type, className, error, placeholder, control }) {
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
              multiline
              rows={4}
              type={type}
              {...field}
              inputRef={field.ref}
              placeholder={placeholder}
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

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(INPUT_TYPES)).isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  rules: PropTypes.object
};

Textarea.defaultProps = {
  control: {},
  rules: {},
  error: null,
  placeholder: '',
  className: ''
};

export default Textarea;
