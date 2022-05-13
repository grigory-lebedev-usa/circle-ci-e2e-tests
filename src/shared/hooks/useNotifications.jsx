import React, { useCallback, useContext, useReducer } from 'react';

import uniqid from 'uniqid';
import PropTypes from 'prop-types';

import Notifications from '../components/Notifications/Notifications';
import { MAX_NOTIFICATION_NUMBER } from '../components/Notifications/notifications.constants';

const NotificationsContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'added': {
      if (state.notifications.length === MAX_NOTIFICATION_NUMBER) {
        return { notifications: { ...state.notifications.shift() } };
      }
      return {
        notifications: [
          ...state.notifications,
          { id: action.id, text: action.text, type: action.typeNotification }
        ]
      };
    }
    case 'deleted': {
      return {
        notifications: [
          ...state.notifications.filter((notification) => notification.id !== action.id)
        ]
      };
    }
    default: {
      return state;
    }
  }
};

function useNotifications() {
  const [state, dispatch] = useReducer(reducer, { notifications: [] });

  const deleteNotification = useCallback((id) => {
    dispatch({ type: 'deleted', id });
  }, []);

  const showNotification = (text, typeNotification) => {
    dispatch({ type: 'added', text, typeNotification, id: uniqid() });
  };

  return { state, showNotification, deleteNotification };
}

export function NotificationsProvider({ children }) {
  const notificationsHook = useNotifications();
  const { state, deleteNotification } = notificationsHook;
  return (
    <NotificationsContext.Provider value={notificationsHook}>
      <Notifications notifications={state.notifications} onDelete={deleteNotification} />
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
