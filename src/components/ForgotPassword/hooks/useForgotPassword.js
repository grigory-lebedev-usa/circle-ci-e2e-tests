import { notificationTypes } from '../../../shared/components/Notifications/components/Notification/notification.constants';
import useNotifications from '../../../shared/hooks/useNotifications';
import useAppSpinner from '../../../shared/hooks/useAppSpinner';
import { axiosService } from '../../../services/axios.service';

export function useForgotPassword() {
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();
  const resetPassword = async (requestPayload) => {
    try {
      showSpinner();
      await axiosService.post('resetPassword', requestPayload);
      showNotification(
        'We sent the link for reset password on your email address.',
        notificationTypes.success
      );
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };
  return { resetPassword };
}
