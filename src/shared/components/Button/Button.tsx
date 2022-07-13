import { memo, ReactNode } from 'react';

import { Button as MuiButton, ButtonProps } from '@mui/material';

const Button = memo(function Button({
  children,
  size,
  color,
  type,
  onClick,
  className,
  disabled,
  variant
}: ButtonProps) {
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

export default Button;
