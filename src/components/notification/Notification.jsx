import React, { useEffect, useRef, useState } from 'react';

import classes from './Notification.module.css';
import { notificationTypes } from '../../shared/enums';

const notificationClasses = {
  [notificationTypes.success]: classes.notification__success,
  [notificationTypes.warning]: classes.notification__warning,
  [notificationTypes.error]: classes.notification__error,
}

const Notification = ({notification, onDelete}) => {

  const [isClickedClose, setIsClickedClose] = useState(false);
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    timeoutIdRef.current = setTimeout(() => {
      onDelete(notification.id);
      console.log('started')
    }, 8000);

    return () => {
      console.log('clear');
      clearTimeout(timeoutIdRef.current);
    }
  }, [notification, onDelete]);

  const handleClose = (id) => {
    setIsClickedClose(true)
    setTimeout(() => {
      clearTimeout(timeoutIdRef.current)
      onDelete(id);
    }, 400)
  }

  return (
    <div className={`${classes.notification} ${notificationClasses[notification.type]} ${isClickedClose ? classes.notification_closed : ''}`}>
        <p className={classes.notification__text}>{notification.text}</p>
        <button 
          className={classes.notification__close}
          onClick={() => handleClose(notification.id)}
        >+</button>
    </div>
  );
};

export default Notification;
