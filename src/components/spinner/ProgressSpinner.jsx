import React, { useState } from 'react';
import classes from './ProgressSpinner.module.css';  

const ProgressSpinner = () => {
  const [active, setActive] = useState(true);
  setTimeout(() => setActive(false), 3000);
  return (
    <div className={active ? `${classes.spinner__container} ${classes.spinner__container_active}` : classes.spinner__container}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default ProgressSpinner;