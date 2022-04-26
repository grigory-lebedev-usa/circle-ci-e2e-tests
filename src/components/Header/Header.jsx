import React from 'react';

import PropTypes from 'prop-types';

import Navigation from './components/Navigation/Navigation';

import classes from './header.module.css';

function Header({ isLogin }) {
  return (
    <div>
      <Navigation isLogin={isLogin} />
      {isLogin && (
        <div className={classes.header}>
          <div className={classes.container}>
            <div className={classes.header__content}>
              <h1 className={classes.header__title}>GeneralSoft Taxi</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Header.propTypes = {
  isLogin: PropTypes.func.isRequired
};

export default Header;
