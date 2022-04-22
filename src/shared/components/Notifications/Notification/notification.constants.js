import classes from '../notifications.module.css';

export const notificationTypes = {
  success: 'success',
  warning: 'warning',
  error: 'error'
};

export const notificationClasses = {
  [notificationTypes.success]: classes.notification__success,
  [notificationTypes.warning]: classes.notification__warning,
  [notificationTypes.error]: classes.notification__error
};
