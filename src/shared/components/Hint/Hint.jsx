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
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired
};

export default Hint;
