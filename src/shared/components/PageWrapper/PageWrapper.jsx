import React from 'react';

import PropTypes from 'prop-types';

import classes from './page-wrapper.module.css';

function PageWrapper({ children }) {
  return <div className={classes.wrapper}>{children}</div>;
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageWrapper;
