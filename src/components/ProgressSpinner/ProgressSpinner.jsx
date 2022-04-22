import React from 'react';

import PropTypes from 'prop-types';

import classes from './progress-spinner.module.css';

function ProgressSpinner({ active }) {
  return (
    <div>
      {active && (
        <div className={classes.spinner__container}>
          <div className={classes.spinner} />
        </div>
      )}
    </div>
  );
}

ProgressSpinner.propTypes = {
  active: PropTypes.bool
};

ProgressSpinner.defaultProps = {
  active: false
};

export default ProgressSpinner;
