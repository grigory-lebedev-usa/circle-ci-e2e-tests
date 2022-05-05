import React, { useState } from 'react';

import PropTypes from 'prop-types';

import classes from './form-checkbox.module.css';

function FormCheckbox({ id, label, styles }) {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <div
      role="checkbox"
      aria-checked="mixed"
      tabIndex="0"
      className={`${classes.checkbox__container} ${styles}`}
      onClick={handleChecked}>
      <input
        id={id}
        className={
          checked
            ? `${classes.custom__checkbox} ${classes.custom__checkbox_active}`
            : classes.custom__checkbox
        }
        type="checkbox"
      />
      <label htmlFor={id} className={classes.checkbox__label}>
        {label}
      </label>
    </div>
  );
}

FormCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  styles: PropTypes.string
};

FormCheckbox.defaultProps = {
  styles: ''
};

export default FormCheckbox;
