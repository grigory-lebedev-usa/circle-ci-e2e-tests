import { notificationTypes } from '../../../shared/components/Notifications/components/Notification/notification.constants';
import useNotifications from '../../../shared/hooks/useNotifications';
import useAppSpinner from '../../../shared/hooks/useAppSpinner';
import { axiosService } from '../../../services/axios.service';

export function useRegistration() {
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();
  const registerDriver = async (requestPayload) => {
    try {
      showSpinner();
      await axiosService.post('register', requestPayload);
      showNotification(
        'We sent the activation link to email address. Please activate your account.',
        notificationTypes.success
      );
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };
  const registerClient = async (requestPayload) => {
    try {
      showSpinner();
      await axiosService.post('register', requestPayload);
      showNotification(
        'We sent the activation link to email address. Please activate your account.',
        notificationTypes.success
      );
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };
  return { registerDriver, registerClient };
}
