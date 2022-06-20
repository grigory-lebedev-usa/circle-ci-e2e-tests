import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { NOTIFICATION_DELETE } from '../../actions/notification/notification.actions';

import Notifications from '../../shared/components/Notifications/Notifications';

function RootNotifications() {
  const notifications = useSelector((state) => state.notifications);
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
