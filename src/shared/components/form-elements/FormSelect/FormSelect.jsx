import { useState } from 'react';

import PropTypes from 'prop-types';

import { FormControl, InputLabel, Select, OutlinedInput, MenuItem } from '@mui/material';

import { DropDownPropType } from '../../../prop-types';

import classes from './form-select.module.css';

function FormSelect({ label, items, id, className }) {
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className={`${classes.container} ${className}`}>
      <FormControl color="form">
        <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
        <Select
          id={id}
          value={selectedValue}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
        >
          {items.map((item) => (
            <MenuItem key={item.id} value={item.value}>
              {item.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(DropDownPropType).isRequired,
  // onChange: PropTypes.func,
  // value: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string
};

FormSelect.defaultProps = {
  // onChange: () => {},
  // value: '',
  className: ''
};

export default FormSelect;
