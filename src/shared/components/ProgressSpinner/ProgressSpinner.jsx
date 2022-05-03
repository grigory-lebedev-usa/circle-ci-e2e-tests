import React from 'react';

import PropTypes from 'prop-types';

import classes from './progress-spinner.module.css';

function ProgressSpinner({ isVisible }) {
  return (
    <div>
      {isVisible && (
        <div className={classes.spinner__container}>
          <div className={classes.spinner} />
        </div>
      )}
    </div>
  );
}

ProgressSpinner.propTypes = {
  isVisible: PropTypes.bool
};

ProgressSpinner.defaultProps = {
  isVisible: false
};

export default ProgressSpinner;
