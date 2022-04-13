import React from 'react';
import classes from './MyCheckbox.module.css';

const MyCheckbox = (props) => {
  return (
    <div className={classes.checkbox__container}>
        <input id={props.id} className={classes.custom__checkbox} type="checkbox"/>
        <label id={props.id} className={classes.checkbox__label}>{props.label}</label>
    </div>
  );
};

export default MyCheckbox;