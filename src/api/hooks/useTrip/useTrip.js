import { useReducer, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { NOTIFICATION_ADD } from '../../../actions/notification/notification.actions';
import { API_ROUTES } from '../../../constants/api.constants';

import { axiosService } from '../../../services/axios.service';
import { NOTIFICATION_TYPES } from '../../../shared/components/Notifications/components/Notification/notification.constants';

import { REQUEST_STATUS } from '../../../constants/app.constants';

import { tripsReducer } from './trips.reducer';

import {
  TRIPS_GET,
  TRIPS_REQUEST_FAILED,
  TRIPS_REQUEST_START,
  TRIPS_REQUEST_SUCCESS
} from './trips.actions';

export function useTrip() {
  const dispatch = useDispatch();
  const [{ trip, status }, dispatchTrips] = useReducer(tripsReducer, {
    trip: {
      active: false,
      driver: {
        firstName: '',
        lastName: '',
        car: {
          photo: ''
        }
      }
    },
    status: REQUEST_STATUS.IDLE
  });

  const getTrips = useCallback(
    async (isActive = false) => {
      try {
        dispatchTrips(TRIPS_REQUEST_START);
        const { data: tripInfo } = await axiosService.get(API_ROUTES.TRIP, {
          params: {
            active: isActive
          }
        });
        dispatchTrips(TRIPS_GET(tripInfo[0]));
        dispatchTrips(TRIPS_REQUEST_SUCCESS);
      } catch (error) {
        dispatchTrips(TRIPS_REQUEST_FAILED(error));
        dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
      }
    },
    [dispatch, dispatchTrips]
  );

  const createTrip = async (requestPayload) => {
    try {
      dispatchTrips(TRIPS_REQUEST_START);
      await axiosService.post(API_ROUTES.TRIP, requestPayload);
      dispatchTrips(TRIPS_REQUEST_SUCCESS);
      dispatch(
        NOTIFICATION_ADD(NOTIFICATION_TYPES.SUCCESS, 'Offer was accepted. Your trip is started')
      );
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    }
  };

  return { getTrips, trip, status, createTrip };
}
