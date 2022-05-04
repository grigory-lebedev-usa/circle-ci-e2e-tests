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
        'You have successfully registered, go to your email and pass verification',
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
        'You have successfully registered, go to your email and pass verification',
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
