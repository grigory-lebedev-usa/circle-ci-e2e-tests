import React from 'react';

import PropTypes from 'prop-types';

import classes from './hint.module.css';

function Hint({ children, content }) {
  return (
    <div className={classes.hint__container}>
      {children}
      <div className={classes.hint__content}>{content}</div>
    </div>
  );
}

Hint.propTypes = {
  children: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Hint;
