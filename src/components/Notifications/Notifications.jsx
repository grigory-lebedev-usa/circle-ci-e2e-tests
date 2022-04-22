import React from 'react';

import PropTypes from 'prop-types';

import classes from './notifications.module.css';
import Notification from './Notification/Notification';

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
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Notifications;
