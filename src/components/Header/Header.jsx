import React from 'react';

import PropTypes from 'prop-types';

import Navigation from './components/Navigation/Navigation';

import classes from './header.module.css';

function Header({ isPrivatePage }) {
  return (
    <div>
      <Navigation isPrivatePage={isPrivatePage} />
      {isPrivatePage && (
        <div className={classes.header}>
          <div className={classes.container}>
            <h1 className={classes.header__title}>GeneralSoft Taxi</h1>
          </div>
        </div>
      )}
    </div>
  );
}

Header.propTypes = {
  isPrivatePage: PropTypes.bool
};

Header.defaultProps = {
  isPrivatePage: false
};

export default Header;
