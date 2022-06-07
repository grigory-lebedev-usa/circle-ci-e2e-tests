import classes from './modal.module.css';

export const MODAL_SIZE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
};

export const modalClasses = {
  [MODAL_SIZE.LARGE]: classes.modal__container_large,
  [MODAL_SIZE.MEDIUM]: classes.modal__container_medium,
  [MODAL_SIZE.SMALL]: classes.modal__container_small
};
