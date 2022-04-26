import React from 'react';

import PropTypes from 'prop-types';

import Header from '../../../components/Header/Header';

import classes from './page-wrapper.module.css';

function PageWrapper({ children, isLogin }) {
  return (
    <div className={classes.wrapper}>
      <Header isLogin={isLogin} />
      {children}
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isLogin: PropTypes.bool.isRequired
};

export default PageWrapper;
