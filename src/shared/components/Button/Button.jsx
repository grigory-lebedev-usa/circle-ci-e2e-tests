import React from 'react';

import PropTypes from 'prop-types';

import classes from './button.module.css';
import { buttonClasses, buttonSizes } from './button.constants';

function Button({ children, size, color, onClick, styles }) {
  return (
    <div className={`${classes.button__container} ${styles}`}>
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
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Object.values(buttonSizes)).isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  styles: PropTypes.string
};

Button.defaultProps = {
  // eslint-disable-next-line prettier/prettier
  onClick: () => { },
  styles: ''
};

export default Button;
