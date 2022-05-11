import React from 'react';

import PropTypes from 'prop-types';

import classes from './form-button.module.css';

function FormButton({ children, onClick, disabled, className }) {
  return (
    <div>
      <button
        type="submit"
        disabled={disabled}
        onClick={onClick}
        className={`${classes.button} ${className}`}>
        {children}
      </button>
    </div>
  );
}

FormButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

FormButton.defaultProps = {
  // eslint-disable-next-line prettier/prettier
  onClick: () => { },
  disabled: false,
  className: ''
};

export default FormButton;
