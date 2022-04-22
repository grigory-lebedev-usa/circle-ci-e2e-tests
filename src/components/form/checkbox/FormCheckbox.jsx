import React, { useState } from 'react';
import classes from './FormCheckbox.module.css';

function FormCheckbox({ id, label }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      role="checkbox"
      aria-checked="false"
      tabIndex="0"
      className={classes.checkbox__container}
      onClick={() => setClicked(!clicked)}>
      <input
        id={id}
        className={
          clicked
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

export default FormCheckbox;
