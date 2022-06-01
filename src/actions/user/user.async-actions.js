import { API_ROUTES } from '../../constants/api.constants';
import { axiosService } from '../../services/axios.service';
import LocalStorageService from '../../services/LocalStorageService';
import { notificationTypes } from '../../shared/components/Notifications/components/Notification/notification.constants';
import { NOTIFICATION_ADD } from '../notification/notification.actions';
import { SPINNER_HIDE, SPINNER_SHOW } from '../spinner/spinner.actions';

import { SET_USER } from './user.actions';

export const getUser = () => {
  return async (dispatch) => {
    try {
      dispatch(SPINNER_SHOW);
      const { data: userInfo } = await axiosService.get(API_ROUTES.USER_ME);
      dispatch(SET_USER(userInfo));
      LocalStorageService.role = userInfo.role;
    } catch (error) {
      dispatch(NOTIFICATION_ADD(notificationTypes.error, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };
};
