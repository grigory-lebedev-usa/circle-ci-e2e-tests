import React, { useCallback, useContext } from 'react';

import uniqid from 'uniqid';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import Notifications from '../../components/Notifications/Notifications';

import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from './notifications.constants';

const NotificationsContext = React.createContext();

function useNotifications() {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);
  const deleteNotification = useCallback(
    (id) => {
      dispatch({ type: DELETE_NOTIFICATION, payload: id });
    },
    [dispatch]
  );

  const showNotification = useCallback(
    (text, type) => {
      dispatch({ type: ADD_NOTIFICATION, payload: { id: uniqid(), text, type } });
    },
    [dispatch]
  );

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
