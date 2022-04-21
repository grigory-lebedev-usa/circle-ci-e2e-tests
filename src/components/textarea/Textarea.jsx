import React from 'react';
import classes from './Textarea.module.css';

const Textarea = ({ id, label, placeholder }) => {
  return (
    <div className={classes.textarea__container}>
      <textarea className={classes.textarea} id={id} placeholder={placeholder}></textarea>
      <label className={classes.textarea__label} htmlFor={id}>{label}</label>
    </div>
  );
};

export default Textarea;