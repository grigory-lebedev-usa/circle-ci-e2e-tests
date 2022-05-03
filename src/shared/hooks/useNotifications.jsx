import React, { useState, useRef, useCallback, useContext } from 'react';

import uniqid from 'uniqid';
import PropTypes from 'prop-types';

import Notifications from '../components/Notifications/Notifications';
import { MAX_NOTIFICATION_NUMBER } from '../components/Notifications/notifications.constants';

const NotificationsContext = React.createContext();

function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const notificationsRef = useRef([]);

  const deleteNotification = useCallback((id) => {
    notificationsRef.current = notificationsRef.current.filter(
      (notification) => notification.id !== id
    );
    setNotifications(notificationsRef.current);
  }, []);

  const showNotification = (text, type) => {
    if (notifications.length === MAX_NOTIFICATION_NUMBER) {
      notificationsRef.current.shift();
    }
    notificationsRef.current.push({ text, type, id: uniqid() });
    setNotifications([...notificationsRef.current]);
  };

  return { notifications, showNotification, deleteNotification };
}

export function NotificationsProvider({ children }) {
  const notificationsHook = useNotifications();
  const { notifications, deleteNotification } = notificationsHook;
  return (
    <NotificationsContext.Provider value={notificationsHook}>
      <Notifications notifications={notifications} onDelete={deleteNotification} />
      {children}
    </NotificationsContext.Provider>
  );
}

NotificationsProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default function NotificationsContextConsumer() {
  return useContext(NotificationsContext);
}
