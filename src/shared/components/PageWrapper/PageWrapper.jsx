import React from 'react';

import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

import Header from '../../../components/Header/Header';

import { PUBLIC_ROUTES } from '../../../constants/app.constants';

import classes from './page-wrapper.module.css';

function PageWrapper({ children }) {
  const { pathname } = useLocation();
  const isPrivatePage = !Object.values(PUBLIC_ROUTES).includes(pathname);
  return (
    <div className={classes.wrapper}>
      <Header isPrivatePage={isPrivatePage} />
      <div className={classes.container}>{children}</div>
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageWrapper;
