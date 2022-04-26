import React from 'react';

import PropTypes from 'prop-types';

import DropDown from '../../../../shared/components/DropDown/DropDown';

import classes from './navigation.module.css';

function Navigation({ isLogin }) {
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
      {isLogin && (
        <div className={classes.logout__block}>
          <button className={classes.logout_btn} type="submit">
            Log out
          </button>
        </div>
      )}
    </div>
  );
}

Navigation.propTypes = {
  isLogin: PropTypes.func.isRequired
};

export default Navigation;
