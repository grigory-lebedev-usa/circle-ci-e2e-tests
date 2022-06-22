import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Header from '../../../components/Header/Header';
import { EXPIRATION_TOKEN_MARGIN, PUBLIC_ROUTES } from '../../../constants/app.constants';
import { ACTIVE_TRIP_GET } from '../../../actions/trips/trips.actions';

import { USER_GET, USER_LOGOUT, USER_REFRESH_TOKEN } from '../../../actions/user/user.actions';

import LocalStorageService from '../../../services/LocalStorageService';

import classes from './page-wrapper.module.css';

function PageWrapper({ children }) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const isPrivatePage = !Object.values(PUBLIC_ROUTES).includes(pathname);
  const { isLoggedIn, refreshToken, expirationTime } = LocalStorageService;
  const remainingTokenTime = new Date(expirationTime) - Date.now();
  const isExpiredToken = remainingTokenTime < EXPIRATION_TOKEN_MARGIN;

  useEffect(() => {
    if (isPrivatePage && isAuthenticated) {
      dispatch(USER_GET());
      dispatch(ACTIVE_TRIP_GET());
    }
  }, [dispatch, isAuthenticated, isPrivatePage]);

  useEffect(() => {
    if (isLoggedIn && isExpiredToken) {
      dispatch(USER_REFRESH_TOKEN(refreshToken));
    } else if (isExpiredToken) {
      dispatch(USER_LOGOUT());
    }
  }, [dispatch, expirationTime, isExpiredToken, isLoggedIn, refreshToken]);

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
