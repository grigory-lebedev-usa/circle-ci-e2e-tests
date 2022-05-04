import React from 'react';

import PropTypes from 'prop-types';

import classes from './form-button.module.css';

function FormButton({ children, onClick, disabled, styles }) {
  return (
    <div className={styles}>
      <button type="submit" disabled={disabled} onClick={onClick} className={classes.button}>
        {children}
      </button>
    </div>
  );
}

FormButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  styles: PropTypes.string
};

FormButton.defaultProps = {
  // eslint-disable-next-line prettier/prettier
  onClick: () => { },
  disabled: false,
  styles: ''
};

export default FormButton;
