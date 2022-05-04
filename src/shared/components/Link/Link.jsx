import React from 'react';

import PropTypes from 'prop-types';

import classes from './link.module.css';

function Link({ children, href, styles }) {
  return (
    <div className={styles}>
      <a className={classes.link} href={href}>
        {children}
      </a>
    </div>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  styles: PropTypes.string
};

Link.defaultProps = {
  styles: ''
};

export default Link;
