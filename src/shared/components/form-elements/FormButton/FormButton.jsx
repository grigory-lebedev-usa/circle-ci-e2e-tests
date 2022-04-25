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
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

FormButton.defaultProps = {
  // eslint-disable-next-line prettier/prettier
  onClick: () => { }
};

export default FormButton;
