import React from 'react';

import PropTypes from 'prop-types';

import { buttonSizes } from '../../shared/enums';

import classes from './Button.module.css';

const buttonClasses = {
  [buttonSizes.big]: classes.button_big,
  [buttonSizes.medium]: classes.button_medium,
  [buttonSizes.small]: classes.button_small,
  [buttonSizes.extraSmall]: classes.button_extraSmall
};

function Button({ children, size, color, onClick }) {
  return (
    <div className={classes.button__container}>
      <button
        type="submit"
        onClick={onClick}
        style={{ backgroundColor: color }}
        className={`${classes.button} ${buttonClasses[size]}`}>
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: {}
};

export default Button;
