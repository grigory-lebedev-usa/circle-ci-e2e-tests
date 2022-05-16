import { useEffect, useState } from 'react';

import { notificationTypes } from '../../shared/components/Notifications/components/Notification/notification.constants';
import useNotifications from '../../shared/hooks/useNotifications/useNotifications';
import useAppSpinner from '../../shared/hooks/useAppSpinner';
import { axiosService } from '../../services/axios.service';
import { API_ROUTES } from '../../constants/api.constants';
import { INITIAL_USER_STATE } from '../../components/client/ClientHome/client-home.constants';
import { STORAGE_KEYS } from '../../constants/app.constants';

export function useUser() {
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();
  const [user, setUser] = useState(INITIAL_USER_STATE);
  useEffect(() => {
    const getUser = async () => {
      try {
        showSpinner();
        const { data } = await axiosService.get(API_ROUTES.USER_ME);
        setUser(data);
        const userLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER));
        userLocalStorage.role = user.role;
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userLocalStorage));
      } catch (error) {
        showNotification(error.response.data.message, notificationTypes.error);
      } finally {
        closeSpinner();
      }
    };
    getUser();
  }, [closeSpinner, showNotification, showSpinner, user.role]);

  const uploadPhoto = async ({ id, file }) => {
    try {
      showSpinner();
      await axiosService.post(`${API_ROUTES.USER}/${id}/${API_ROUTES.PHOTO}`, {
        method: 'post',
        body: file
      });
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };

  return { user, uploadPhoto };
}
