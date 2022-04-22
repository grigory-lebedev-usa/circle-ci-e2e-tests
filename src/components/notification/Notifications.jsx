import React from 'react';

import Notification from './Notification';
import classes from './Notification.module.css';

function Notifications({ notifications, onDelete }) {
  return (
    <div className={classes.notification__container}>
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default Notifications;
