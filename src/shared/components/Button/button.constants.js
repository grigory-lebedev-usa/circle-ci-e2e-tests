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
  primary: '#C4A267',
  general: '#494357'
};
export const buttonClasses = {
  [buttonSizes.big]: classes.button_big,
  [buttonSizes.medium]: classes.button_medium,
  [buttonSizes.small]: classes.button_small,
  [buttonSizes.extraSmall]: classes.button_extraSmall
};
