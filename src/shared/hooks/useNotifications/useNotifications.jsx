import React, { useCallback, useContext, useReducer } from 'react';

import uniqid from 'uniqid';
import PropTypes from 'prop-types';

import Notifications from '../../components/Notifications/Notifications';

import { DELETE_NOTIFICATION, ADD_NOTIFICATION } from './notifications.actions';
import { INITIAL_STATE } from './notifications.constants';
import { notificationsReducer } from './notifications.reducer';

const NotificationsContext = React.createContext();

function useNotifications() {
  const [notifications, dispatch] = useReducer(notificationsReducer, INITIAL_STATE);

  const deleteNotification = useCallback((id) => {
    dispatch({ type: DELETE_NOTIFICATION, payload: id });
  }, []);

  const showNotification = useCallback((text, type) => {
    dispatch({ type: ADD_NOTIFICATION, payload: { id: uniqid(), text, type } });
  }, []);

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
