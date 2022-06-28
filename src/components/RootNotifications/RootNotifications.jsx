import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { deleteNotification, notificationsSelector } from '../../reducers/notifications.slice';

import Notifications from '../../shared/components/Notifications/Notifications';

function RootNotifications() {
  const notifications = useSelector(notificationsSelector);
  const dispatch = useDispatch();

  const notificationDelete = useCallback(
    (id) => {
      dispatch(deleteNotification(id));
    },
    [dispatch]
  );

  return <Notifications notifications={notifications} onDelete={notificationDelete} />;
}

export default RootNotifications;
