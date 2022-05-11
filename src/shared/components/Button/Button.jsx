import React from 'react';

import PropTypes from 'prop-types';

import classes from './button.module.css';
import { buttonClasses, buttonSizes, buttonTypes } from './button.constants';

function Button({ children, size, color, type, onClick, className, disabled }) {
  return (
    <div className={`${classes.button__container} ${className}`}>
      <button
        disabled={disabled}
        // eslint-disable-next-line react/button-has-type
        type={type}
        onClick={onClick}
        style={{ backgroundColor: color }}
        className={`${classes.button} ${buttonClasses[size]}`}>
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Object.values(buttonSizes)).isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(buttonTypes)),
  onClick: PropTypes.func,
  className: PropTypes.string
};

Button.defaultProps = {
  // eslint-disable-next-line prettier/prettier
  onClick: () => { },
  type: buttonTypes.button,
  className: '',
  disabled: false
};

export default Button;
