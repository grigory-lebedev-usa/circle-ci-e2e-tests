import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { NOTIFICATION_DELETE } from '../../actions/notification/notification.actions';
import { notificationsSelector } from '../../selectors/notifications.selectors';

import Notifications from '../../shared/components/Notifications/Notifications';

function RootNotifications() {
  const notifications = useSelector(notificationsSelector);
  const dispatch = useDispatch();

  const notificationDelete = useCallback(
    (id) => {
      dispatch(NOTIFICATION_DELETE(id));
    },
    [dispatch]
  );

  return <Notifications notifications={notifications} onDelete={notificationDelete} />;
}

export default RootNotifications;
