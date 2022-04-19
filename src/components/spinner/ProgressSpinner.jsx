import React, { useState } from 'react';
import classes from './ProgressSpinner.module.css';  

const ProgressSpinner = ({onActive, time}) => {
  const [active, setActive] = useState(onActive);
  setTimeout(() => setActive(false), time);
  return (
    <div className={active ? `${classes.spinner__container} ${classes.spinner__container_active}` : classes.spinner__container}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default ProgressSpinner;