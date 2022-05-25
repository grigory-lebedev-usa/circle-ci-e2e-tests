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

function FormSelect({ label, items, id, onChange, onBlur, value, className, error, helperText }) {
  return (
    <div className={`${classes.container} ${className}`}>
      <FormControl color="form">
        <InputLabel error={error}>{label}</InputLabel>
        <Select
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          input={<OutlinedInput label={label} />}
        >
          {items.map((item) => (
            <MenuItem key={item.id} value={item.value}>
              {item.value}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error={error}>{helperText}</FormHelperText>
      </FormControl>
    </div>
  );
}

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(DropDownPropType).isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string
};

FormSelect.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  value: '',
  className: '',
  error: false,
  helperText: ''
};

export default FormSelect;
