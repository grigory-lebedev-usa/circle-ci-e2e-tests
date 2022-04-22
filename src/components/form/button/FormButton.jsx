import React from 'react';
import classes from './FormButton.module.css';

function FormButton({ children, onClick }) {
  return (
    <div>
      <button type="submit" onClick={onClick} className={classes.button}>
        {children}
      </button>
    </div>
  );
}

export default FormButton;
