import { notificationTypes } from '../../../shared/components/Notifications/components/Notification/notification.constants';
import useNotifications from '../../../shared/hooks/useNotifications';
import useAppSpinner from '../../../shared/hooks/useAppSpinner';
import { axiosService } from '../../../services/axios.service';

export function useLogin() {
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();
  const login = async (requestPayload) => {
    try {
      showSpinner();
      const response = await axiosService.post('login', requestPayload);
      showNotification('You have successfully logged in', notificationTypes.success);
      localStorage.setItem('token', response.data.accessToken);
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };
  return { login };
}
