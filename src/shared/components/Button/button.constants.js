import classes from './button.module.css';

export const buttonSizes = {
  big: 'big',
  medium: 'medium',
  small: 'small',
  extraSmall: 'extraSmall'
};
export const buttonColors = {
  accept: '#5DCE7C',
  cancel: '#CE6A5D',
  disabled: '#AEAEAE',
  primary: '#494357',
  general: '#C4A267'
};

export const buttonClasses = {
  [buttonSizes.big]: classes.button_big,
  [buttonSizes.medium]: classes.button_medium,
  [buttonSizes.small]: classes.button_small,
  [buttonSizes.extraSmall]: classes.button_extraSmall
};
