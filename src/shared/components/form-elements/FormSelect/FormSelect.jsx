import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  FormHelperText
} from '@mui/material';

import { DropDownPropType } from '../../../prop-types';

import classes from './form-select.module.css';

function FormSelect({ name, label, items, className, error, control, rules }) {
  return (
    <Controller
      render={({ field }) => (
        <div className={`${classes.container} ${className}`}>
          <FormControl color="form">
            <InputLabel error={error}>{label}</InputLabel>
            <Select
              id={name}
              error={error}
              {...field}
              input={<OutlinedInput label={name.toUpperCase()} />}
            >
              {items.map((item) => (
                <MenuItem key={item.id} value={item.value.toLowerCase()}>
                  {item.value}
                </MenuItem>
              ))}
            </Select>
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

FormSelect.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  rules: PropTypes.object,
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(DropDownPropType).isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  error: PropTypes.bool
};

FormSelect.defaultProps = {
  control: {},
  rules: {},
  className: '',
  error: false
};

export default FormSelect;
