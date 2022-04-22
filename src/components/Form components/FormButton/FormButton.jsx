import React from 'react';

import PropTypes from 'prop-types';

import classes from './form-button.module.css';

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
  children: PropTypes.string.isRequired,
  onClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.string]))
  ])
};

FormButton.defaultProps = {
  onClick: () => ''
};

export default FormButton;
