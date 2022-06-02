import { API_ROUTES } from '../../constants/api.constants';
import { axiosService } from '../../services/axios.service';
import { NOTIFICATION_TYPES } from '../../shared/components/Notifications/components/Notification/notification.constants';
import { NOTIFICATION_ADD } from '../notification/notification.actions';
import { SPINNER_HIDE, SPINNER_SHOW } from '../spinner/spinner.actions';

import { OFFERS_ACTION_TYPES } from './offers.action-types';

const OFFERS_GET_SUCCESS = (offers) => {
  return { type: OFFERS_ACTION_TYPES.GET_SUCCESS, payload: offers };
};

export const OFFERS_GET = () => {
  return async (dispatch) => {
    try {
      dispatch(SPINNER_SHOW);
      const { data: offersInfo } = await axiosService.get(API_ROUTES.OFFER);
      console.log(offersInfo);
      dispatch(OFFERS_GET_SUCCESS(offersInfo));
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };
};

export const OFFER_CREATE = (requestPayload) => {
  return async (dispatch) => {
    try {
      dispatch(SPINNER_SHOW);
      await axiosService.post(API_ROUTES.OFFER, requestPayload);
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.SUCCESS, 'Your offer was successfully sent'));
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };
};

export const OFFER_DELETE = (id) => {
  return async (dispatch) => {
    try {
      dispatch(SPINNER_SHOW);
      await axiosService.delete(`${API_ROUTES.OFFER}/${id}`);
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.SUCCESS, 'Your offer was cancel'));
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };
};
