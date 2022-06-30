import { useState } from 'react';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import DropDown from '../../../../shared/components/DropDown/DropDown';
import { PUBLIC_ROUTES } from '../../../../constants/app.constants';

import { logoutUser } from '../../../../slices/user.slice';

import LocalStorageService from '../../../../services/LocalStorageService';

import classes from './navigation.module.css';

function Navigation({ isPrivatePage }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [valueDropDown, setValueDropDown] = useState('English');

  const handleDropDownChange = (item) => {
    setValueDropDown(item.value);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    LocalStorageService.clear();
    navigate(PUBLIC_ROUTES.LOGIN);
  };

  return (
    <div className={classes.navigation__wrapper}>
      <div className={classes.dropdown__block}>
        <DropDown
          value={valueDropDown}
          onListItemClick={handleDropDownChange}
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
