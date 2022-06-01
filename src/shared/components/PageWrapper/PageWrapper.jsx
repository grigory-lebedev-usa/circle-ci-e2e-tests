import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Header from '../../../components/Header/Header';

import { PUBLIC_ROUTES } from '../../../constants/app.constants';

import { GET_USER } from '../../../actions/user/user.actions';

import classes from './page-wrapper.module.css';

function PageWrapper({ children }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isPrivatePage = !Object.values(PUBLIC_ROUTES).includes(pathname);

  useEffect(() => {
    if (isPrivatePage) {
      dispatch(GET_USER());
    }
  }, [dispatch, isPrivatePage]);

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
