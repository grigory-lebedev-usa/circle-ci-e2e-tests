import React from 'react';
import classes from './Textarea.module.css';

const Textarea = (props) => {
  return (
    <div className={classes.textarea__container}>
      <textarea className={classes.textarea} id={props.id} placeholder=" "></textarea>
      <label className={classes.textarea__label} htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default Textarea;