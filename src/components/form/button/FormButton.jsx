import React from 'react';

import PropTypes from 'prop-types';

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

FormButton.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func
};

FormButton.defaultProps = {
  onClick: {}
};

export default FormButton;
