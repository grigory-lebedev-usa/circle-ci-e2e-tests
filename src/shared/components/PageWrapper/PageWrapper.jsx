import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Header from '../../../components/Header/Header';
import { PUBLIC_ROUTES } from '../../../constants/app.constants';

import { getUser, userSelector } from '../../../reducers/user.slice';

import { getActiveTrip } from '../../../reducers/trips.slice';

import classes from './page-wrapper.module.css';

// import LocalStorageService from '../../../services/LocalStorageService';

function PageWrapper({ children }) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(userSelector);
  const { pathname } = useLocation();
  const isPrivatePage = !Object.values(PUBLIC_ROUTES).includes(pathname);
  // const { isLoggedIn, refreshToken, expirationTime } = LocalStorageService;
  // const remainingTokenTime = new Date(expirationTime) - Date.now();
  // const isExpiredToken = remainingTokenTime < EXPIRATION_TOKEN_MARGIN;

  useEffect(() => {
    if (isPrivatePage && isAuthenticated) {
      dispatch(getUser());
      dispatch(getActiveTrip());
    }
  }, [dispatch, isAuthenticated, isPrivatePage]);

  // useEffect(() => {
  //   if (isLoggedIn && isExpiredToken) {
  //     dispatch(USER_REFRESH_TOKEN(refreshToken));
  //   } else if (isExpiredToken) {
  //     dispatch(USER_LOGOUT());
  //   }
  // }, [dispatch, expirationTime, isExpiredToken, isLoggedIn, refreshToken]);

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
