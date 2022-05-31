import { useDispatch } from 'react-redux';

import { notificationTypes } from '../../shared/components/Notifications/components/Notification/notification.constants';
import { axiosService } from '../../services/axios.service';
import { API_ROUTES } from '../../constants/api.constants';
import { SPINNER_SHOW, SPINNER_HIDE } from '../../actions/spinner/spinner.actions';
import { NOTIFICATION_ADD } from '../../actions/notification/notification.actions';

export function useForgotPassword() {
  const dispatch = useDispatch();
  const resetPassword = async (requestPayload) => {
    try {
      dispatch(SPINNER_SHOW);
      await axiosService.post(API_ROUTES.RESET_PASSWORD, requestPayload);
      dispatch(
        NOTIFICATION_ADD(
          notificationTypes.success,
          'We sent the link for reset password on your email address.'
        )
      );
    } catch (error) {
      dispatch(NOTIFICATION_ADD(notificationTypes.error, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };
  return { resetPassword };
}
