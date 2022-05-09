import React from 'react';

import PropTypes from 'prop-types';

import Header from '../../../components/Header/Header';

import useAuth from '../../hooks/useAuth';

import classes from './page-wrapper.module.css';

function PageWrapper({ children }) {
  const { isAuthed } = useAuth();
  return (
    <div className={classes.wrapper}>
      <Header isLogin={isAuthed} />
      <div className={classes.container}>{children}</div>
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageWrapper;
