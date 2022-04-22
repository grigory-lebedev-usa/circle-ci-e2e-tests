import React from 'react';
import classes from './ProgressSpinner.module.css';

function ProgressSpinner({ active }) {
  return (
    <div>
      {active && (
        <div className={classes.spinner__container}>
          <div className={classes.spinner} />
        </div>
      )}
    </div>
  );
}

export default ProgressSpinner;
