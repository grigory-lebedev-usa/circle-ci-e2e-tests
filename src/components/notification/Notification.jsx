import React, { useEffect } from 'react';

import classes from './Notification.module.css';
import { notificationTypes } from '../../shared/enums';

const Notification = ({notification, onDelete}) => {

  const notificationStyled = {
    [notificationTypes.success]: classes.notification__success,
    [notificationTypes.warning]: classes.notification__warning,
    [notificationTypes.error]: classes.notification__error,
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onDelete(notification.id)
    }, 8000);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [notification, onDelete])

  return (
    <div className={`${classes.notification} ${notificationStyled[notification.type]}`}>
        <p className={classes.notification__text}>{notification.text}</p>
        <button 
          className={classes.notification__close}
          onClick={() => {onDelete(notification.id)}}
        ></button>
    </div>
  );
};

export default Notification;
