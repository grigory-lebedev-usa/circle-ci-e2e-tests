import React from 'react';
import { buttonSizes } from '../../shared/enums';
import classes from './Button.module.css';

const Button = ({ children, size, color, onClick }) => {

  const buttonStyled = {
    [buttonSizes.big]: classes.button__big,
    [buttonSizes.medium]: classes.button__medium,
    [buttonSizes.small]: classes.button__small,
    [buttonSizes.extra_small]: classes.button__extra_small,
  }

  const buttonColorStyled = {
    backgroundColor: color,
    border: `1px solid ${color}`
  }

  return (
    <div className={classes.button__container}>
      <button
        onClick={onClick}
        style={buttonColorStyled}
        className={`${classes.button} ${buttonStyled[size]}`}>{children}
      </button>
    </div>
  );
};

export default Button;