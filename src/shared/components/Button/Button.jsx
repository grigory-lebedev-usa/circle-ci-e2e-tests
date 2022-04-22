import React from 'react';

import PropTypes from 'prop-types';

import classes from './button.module.css';
import { buttonClasses } from './button.constants';

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
  children: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.string, PropTypes.object])
    )
  ])
};

Button.defaultProps = {
  onClick: () => ''
};

export default Button;
