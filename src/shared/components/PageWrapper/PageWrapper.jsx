import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Header from '../../../components/Header/Header';

import { PUBLIC_ROUTES } from '../../../constants/app.constants';

import {
  USER_AUTO_LOGOUT,
  // USER_AUTO_LOGOUT,
  USER_AUTO_REFRESH_TOKEN,
  USER_GET
} from '../../../actions/user/user.actions';

import { ACTIVE_TRIP_GET } from '../../../actions/trips/trips.actions';

import LocalStorageService from '../../../services/LocalStorageService';

import classes from './page-wrapper.module.css';

function PageWrapper({ children }) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const { loggedIn, expirationTime, refreshToken } = LocalStorageService;
  const isPrivatePage = !Object.values(PUBLIC_ROUTES).includes(pathname);

  useEffect(() => {
    if (loggedIn) {
      dispatch(USER_AUTO_REFRESH_TOKEN(refreshToken, expirationTime));
    } else dispatch(USER_AUTO_LOGOUT(expirationTime));
  }, [dispatch, expirationTime, loggedIn, refreshToken]);

  useEffect(() => {
    if (isPrivatePage && isAuthenticated) {
      dispatch(USER_GET());
      dispatch(ACTIVE_TRIP_GET());
    }
  }, [dispatch, isAuthenticated, isPrivatePage]);

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
