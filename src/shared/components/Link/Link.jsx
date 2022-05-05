import React from 'react';

import PropTypes from 'prop-types';

import classes from './link.module.css';

function Link({ children, href, styles, onClick }) {
  return (
    <div className={styles}>
      <a className={classes.link} href={href} onClick={onClick}>
        {children}
      </a>
    </div>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  styles: PropTypes.string,
  onClick: PropTypes.func
};

Link.defaultProps = {
  styles: '',
  // eslint-disable-next-line prettier/prettier
  onClick: () => { }
};

export default Link;
