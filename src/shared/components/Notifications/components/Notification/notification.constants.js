import classes from '../../notifications.module.css';

export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

export const notificationClasses = {
  [NOTIFICATION_TYPES.SUCCESS]: classes.notification__success,
  [NOTIFICATION_TYPES.WARNING]: classes.notification__warning,
  [NOTIFICATION_TYPES.ERROR]: classes.notification__error
};
