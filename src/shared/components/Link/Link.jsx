import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import classes from './link.module.css';

function Link({ children, to, className, onClick }) {
  return (
    <div className={className}>
      <RouterLink to={to} onClick={onClick} className={classes.router__link}>
        {children}
      </RouterLink>
    </div>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Link.defaultProps = {
  className: '',
  onClick: () => {}
};

export default Link;
