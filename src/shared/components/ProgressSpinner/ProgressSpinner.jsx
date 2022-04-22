import React from 'react';

import PropTypes from 'prop-types';

import classes from './progress-spinner.module.css';

function ProgressSpinner({ isOpened }) {
  return (
    <div>
      {isOpened && (
        <div className={classes.spinner__container}>
          <div className={classes.spinner} />
        </div>
      )}
    </div>
  );
}

ProgressSpinner.propTypes = {
  isOpened: PropTypes.bool
};

ProgressSpinner.defaultProps = {
  isOpened: false
};

export default ProgressSpinner;
