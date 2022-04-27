import React from 'react';

import PropTypes from 'prop-types';

import classes from './form-button.module.css';

function FormButton({ children, onClick, disabled }) {
  return (
    <div>
      <button type="submit" disabled={disabled} onClick={onClick} className={classes.button}>
        {children}
      </button>
    </div>
  );
}

FormButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

FormButton.defaultProps = {
  // eslint-disable-next-line prettier/prettier
  onClick: () => { },
  disabled: false
};

export default FormButton;
