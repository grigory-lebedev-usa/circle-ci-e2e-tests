import { API_ROUTES } from '../../constants/api.constants';
import { axiosService } from '../../services/axios.service';
import { NOTIFICATION_TYPES } from '../../shared/components/Notifications/components/Notification/notification.constants';
import { NOTIFICATION_ADD } from '../notification/notification.actions';
import { SPINNER_HIDE, SPINNER_SHOW } from '../spinner/spinner.actions';

import { ORDERS_ACTION_TYPES } from './orders.action-types';

export const ORDERS_GET_SUCCESS = (orders) => {
  return { type: ORDERS_ACTION_TYPES.GET_SUCCESS, payload: orders };
};

export const DELETE = {
  type: ORDERS_ACTION_TYPES.DELETE
};

export const ORDERS_GET = () => {
  return async (dispatch) => {
    try {
      dispatch(SPINNER_SHOW);
      const { data: ordersInfo } = await axiosService.get(API_ROUTES.ORDER);
      console.log(ordersInfo);
      dispatch(ORDERS_GET_SUCCESS(ordersInfo));
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };
};

export const ORDER_CREATE = (requestPayload) => {
  return async (dispatch) => {
    try {
      dispatch(SPINNER_SHOW);
      await axiosService.post(API_ROUTES.ORDER, requestPayload);
      dispatch(
        NOTIFICATION_ADD(NOTIFICATION_TYPES.SUCCESS, 'You have successfully created an order')
      );
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };
};
