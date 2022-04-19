import React from 'react';
import classes from './ProgressSpinner.module.css';  

const ProgressSpinner = ({active}) => {
  return (
    <div>
      {
        active && <div className={classes.spinner__container}>
        <div className={classes.spinner}></div>
        </div>
      }
    </div>

  );
};

export default ProgressSpinner;