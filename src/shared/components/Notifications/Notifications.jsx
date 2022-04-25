import React from 'react';

import PropTypes, { arrayOf } from 'prop-types';

import classes from './notifications.module.css';
import { NotificationPropType } from './components/Notification/notification.proptypes';
import Notification from './components/Notification/Notification';

function Notifications({ notifications, onDelete }) {
  return (
    <div className={classes.notification__container}>
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} onDelete={onDelete} />
      ))}
    </div>
  );
}

Notifications.propTypes = {
  notifications: arrayOf(NotificationPropType).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Notifications;
