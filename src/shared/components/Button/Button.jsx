import React from 'react';

import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';

import { BUTTON_SIZES, BUTTON_TYPES, BUTTON_VARIANTS } from './button.constants';

const Button = React.memo(function Button({
  children,
  size,
  color,
  type,
  onClick,
  className,
  disabled,
  variant
}) {
  return (
    <div className={className}>
      <MuiButton
        variant={variant}
        color={color}
        onClick={onClick}
        type={type}
        size={size}
        disabled={disabled}
      >
        {children}
      </MuiButton>
    </div>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)).isRequired,
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  color: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  onClick: PropTypes.func,
  className: PropTypes.string
};

Button.defaultProps = {
  onClick: () => {},
  size: BUTTON_SIZES.LARGE,
  type: BUTTON_TYPES.BUTTON,
  className: '',
  disabled: false
};

export default Button;
