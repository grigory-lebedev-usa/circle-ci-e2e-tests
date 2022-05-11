import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import PropTypes from 'prop-types';

function Link({ children, to, className, onClick }) {
  return (
    <div className={className}>
      <RouterLink to={to} onClick={onClick}>
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
  // eslint-disable-next-line prettier/prettier
  onClick: () => { }
};

export default Link;
