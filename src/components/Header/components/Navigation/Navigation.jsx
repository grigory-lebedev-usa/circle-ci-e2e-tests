import React from 'react';

import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import DropDown from '../../../../shared/components/DropDown/DropDown';

import { PUBLIC_ROUTES } from '../../../../constants/app.constants';

import { USER_LOGOUT } from '../../../../actions/user/user.actions';

import classes from './navigation.module.css';

function Navigation({ isPrivatePage }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(USER_LOGOUT());
    navigate(PUBLIC_ROUTES.LOGIN);
  };
  return (
    <div>
      <div className={classes.dropdown__block}>
        <DropDown
          items={[
            { id: 1, value: 'English' },
            { id: 2, value: 'Russian' },
            { id: 3, value: 'German' }
          ]}
        />
      </div>
      {isPrivatePage && (
        <div className={classes.logout__block}>
          <button className={classes.logout_btn} onClick={logout} type="button">
            Log out
          </button>
        </div>
      )}
    </div>
  );
}

Navigation.propTypes = {
  isPrivatePage: PropTypes.bool.isRequired
};

export default Navigation;
