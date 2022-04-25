import React from 'react';

import PropTypes from 'prop-types';

import DropDown from '../DropDown/DropDown';

import classes from './page-wrapper.module.css';

function PageWrapper({ children, isLogin, logout }) {
  return (
    <div className={classes.wrapper}>
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
          <button onClick={logout} className={classes.logout_btn} type="submit">
            Log out
          </button>
        </div>
      )}
      {isLogin && (
        <div className={classes.header}>
          <div className={classes.container}>
            <div className={classes.header__content}>
              <h1 className={classes.header__title}>GeneralSoft Taxi</h1>
            </div>
          </div>
        </div>
      )}

      {children}
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isLogin: PropTypes.bool,
  logout: PropTypes.func.isRequired
};

PageWrapper.defaultProps = {
  isLogin: false
};

export default PageWrapper;
