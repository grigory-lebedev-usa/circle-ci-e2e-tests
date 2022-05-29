import { useNavigate } from 'react-router-dom';

import { notificationTypes } from '../../shared/components/Notifications/components/Notification/notification.constants';
import useNotifications from '../../shared/hooks/useNotifications/useNotifications';
import useAppSpinner from '../../shared/hooks/useAppSpinner/useAppSpinner';
import { axiosService } from '../../services/axios.service';
import { PUBLIC_ROUTES } from '../../constants/app.constants';
import { API_ROUTES } from '../../constants/api.constants';

export function useRegistration() {
  const navigate = useNavigate();
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();
  const register = async (requestPayload) => {
    try {
      showSpinner();
      await axiosService.post(API_ROUTES.REGISTER, requestPayload);
      showNotification(
        'We sent the activation link to email address. Please activate your account.',
        notificationTypes.success
      );
      navigate(PUBLIC_ROUTES.LOGIN);
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };
  return { register };
}
