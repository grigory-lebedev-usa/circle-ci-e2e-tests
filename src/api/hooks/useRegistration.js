import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { notificationTypes } from '../../shared/components/Notifications/components/Notification/notification.constants';
import { axiosService } from '../../services/axios.service';
import { PUBLIC_ROUTES } from '../../constants/app.constants';
import { API_ROUTES } from '../../constants/api.constants';
import { SPINNER_HIDE, SPINNER_SHOW } from '../../actions/spinner/spinner.actions';
import { NOTIFICATION_ADD } from '../../actions/notification/notification.actions';

export function useRegistration() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const register = async (requestPayload) => {
    try {
      dispatch(SPINNER_SHOW);
      await axiosService.post(API_ROUTES.REGISTER, requestPayload);
      dispatch(
        NOTIFICATION_ADD(
          notificationTypes.success,
          'We sent the activation link to email address. Please activate your account.'
        )
      );
      navigate(PUBLIC_ROUTES.LOGIN);
    } catch (error) {
      dispatch(NOTIFICATION_ADD(notificationTypes.error, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };
  return { register };
}
