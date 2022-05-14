import { useEffect, useState } from 'react';

import { notificationTypes } from '../../shared/components/Notifications/components/Notification/notification.constants';
import useNotifications from '../../shared/hooks/useNotifications/useNotifications';
import useAppSpinner from '../../shared/hooks/useAppSpinner';
import { axiosService } from '../../services/axios.service';
import { API_ROUTES } from '../../constants/api.constants';
import { INITIAL_USER_STATE } from '../../components/ClientHome/client-home.constants';

export function useUser() {
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();
  const [user, setUser] = useState(INITIAL_USER_STATE);
  useEffect(() => {
    const getUser = async () => {
      try {
        showSpinner();
        const { data } = await axiosService.get(API_ROUTES.USER);
        setUser(data);
      } catch (error) {
        showNotification(error.response.data.message, notificationTypes.error);
      } finally {
        closeSpinner();
      }
    };
    getUser();
  }, [closeSpinner, showNotification, showSpinner]);
  return { user };
}
