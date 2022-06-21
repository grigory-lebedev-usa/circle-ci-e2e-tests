import { API_ROUTES } from '../../constants/api.constants';
import { axiosService } from '../../services/axios.service';
import { NOTIFICATION_TYPES } from '../../shared/components/Notifications/components/Notification/notification.constants';
import { NOTIFICATION_ADD } from '../notification/notification.actions';

import { TRIPS_ACTION_TYPES } from './trips.action-types';

const TRIPS_GET_SUCCESS = (payload) => {
  return { type: TRIPS_ACTION_TYPES.GET_SUCCESS, payload };
};

const ACTIVE_TRIP_REQUEST_START = {
  type: TRIPS_ACTION_TYPES.REQUEST_START
};

export const TRIPS_RESET = {
  type: TRIPS_ACTION_TYPES.RESET
};

// eslint-disable-next-line default-param-last
export const TRIPS_GET = (isActive = false, page, size) => {
  return async (dispatch) => {
    try {
      dispatch(ACTIVE_TRIP_REQUEST_START);
      const { data: tripInfo } = await axiosService.get(API_ROUTES.TRIP, {
        params: {
          active: isActive,
          page,
          size
        }
      });
      dispatch(TRIPS_GET_SUCCESS(tripInfo));
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    }
  };
};

export const ACTIVE_TRIP_GET = () => {
  return async (dispatch) => {
    dispatch(TRIPS_GET(true));
  };
};

export const TRIP_CREATE = (requestPayload) => {
  return async (dispatch) => {
    try {
      await axiosService.post(API_ROUTES.TRIP, requestPayload);
      dispatch(
        NOTIFICATION_ADD(NOTIFICATION_TYPES.SUCCESS, 'Offer was accepted. Your trip is started')
      );
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    }
  };
};

export const TRIP_DELETE = (tripId) => {
  return async (dispatch) => {
    try {
      await axiosService.patch(`${API_ROUTES.TRIP}/${tripId}`);
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.SUCCESS, 'Your treep was finished'));
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    }
  };
};
