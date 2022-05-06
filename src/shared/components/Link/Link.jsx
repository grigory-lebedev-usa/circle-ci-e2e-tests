import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import classes from './link.module.css';

function Link({ children, to, styles, onClick }) {
  return (
    <div className={styles}>
      <RouterLink to={to} className={classes.link} onClick={onClick}>
        {children}
      </RouterLink>
    </div>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  styles: PropTypes.string,
  onClick: PropTypes.func
};

Link.defaultProps = {
  styles: '',
  // eslint-disable-next-line prettier/prettier
  onClick: () => { }
};

export default Link;
