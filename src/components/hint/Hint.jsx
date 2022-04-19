import React from 'react';
import classes from './Hint.module.css';

const Hint = ({children, content}) => {
  return (
    <div className={classes.hint__container}>
      {children}
      <div className={classes.hint__content}>{content}</div>
    </div>
  );
};

export default Hint;