import { useReducer } from 'react';

import { useDispatch } from 'react-redux';

import { NOTIFICATION_ADD } from '../../actions/notification/notification.actions';

import { SPINNER_SHOW, SPINNER_HIDE } from '../../actions/spinner/spinner.actions';
import { API_ROUTES } from '../../constants/api.constants';
import { axiosService } from '../../services/axios.service';
import { NOTIFICATION_TYPES } from '../../shared/components/Notifications/components/Notification/notification.constants';

function tripsReducer(state, action) {
  switch (action.type) {
    case 'get-success': {
      return [...state, ...action.payload];
    }
    default:
      return state;
  }
}

export function useTrip() {
  const dispatch = useDispatch();
  const [trip, dispatchTrips] = useReducer(tripsReducer, []);

  const getTrip = async () => {
    try {
      dispatch(SPINNER_SHOW);
      const { data: tripInfo } = await axiosService.get(API_ROUTES.TRIP);
      dispatchTrips({ type: 'get-success', payload: tripInfo });
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };

  const createTrip = async (requestPayload) => {
    try {
      dispatch(SPINNER_SHOW);
      await axiosService.post(API_ROUTES.TRIP, requestPayload);
      dispatch(
        NOTIFICATION_ADD(NOTIFICATION_TYPES.SUCCESS, 'Offer was accepted. Your trip is started')
      );
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };

  return { getTrip, trip, createTrip };
}
