import React from 'react';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import DropDown from '../../../../shared/components/DropDown/DropDown';
import { PUBLIC_ROUTES } from '../../../../constants/app.constants';

import { logoutUser } from '../../../../reducers/user.slice';

import LocalStorageService from '../../../../services/LocalStorageService';

import classes from './navigation.module.css';

function Navigation({ isPrivatePage }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    LocalStorageService.clear();
    navigate(PUBLIC_ROUTES.LOGIN);
  };

  return (
    <div className={classes.navigation__wrapper}>
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
          <button className={classes.logout_btn} onClick={handleLogout} type="button">
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
