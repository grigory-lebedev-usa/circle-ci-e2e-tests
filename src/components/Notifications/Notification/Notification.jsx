import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import { notificationTypes } from '../../../shared/enums';

import classes from '../notifications.module.css';

const notificationClasses = {
  [notificationTypes.success]: classes.notification__success,
  [notificationTypes.warning]: classes.notification__warning,
  [notificationTypes.error]: classes.notification__error
};

function Notification({ notification, onDelete }) {
  const [isClickedClose, setIsClickedClose] = useState(false);
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    timeoutIdRef.current = setTimeout(() => {
      onDelete(notification.id);
    }, 8000);

    return () => {
      clearTimeout(timeoutIdRef.current);
    };
  }, [notification.id, onDelete]);

  const handleClose = (id) => {
    setIsClickedClose(true);
    setTimeout(() => {
      clearTimeout(timeoutIdRef.current);
      onDelete(id);
    }, 400);
  };

  return (
    <div
      className={`${classes.notification} ${notificationClasses[notification.type]} 
      ${isClickedClose ? classes.notification_closed : ''}`}>
      <p className={classes.notification__text}>{notification.text}</p>
      <button
        type="button"
        className={classes.notification__close}
        onClick={() => handleClose(notification.id)}>
        +
      </button>
    </div>
  );
}

Notification.propTypes = {
  notification: PropTypes.shape({
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Notification;
