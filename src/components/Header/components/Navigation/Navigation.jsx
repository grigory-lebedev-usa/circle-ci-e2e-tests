import React from 'react';

import PropTypes from 'prop-types';

import DropDown from '../../../../shared/components/DropDown/DropDown';

import useAuth from '../../../../shared/hooks/useAuth';

import classes from './navigation.module.css';

function Navigation({ isPrivatePage }) {
  const { logout } = useAuth();
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
