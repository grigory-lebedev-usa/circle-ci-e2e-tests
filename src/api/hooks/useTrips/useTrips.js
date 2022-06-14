import { useReducer, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { NOTIFICATION_ADD } from '../../../actions/notification/notification.actions';
import { API_ROUTES } from '../../../constants/api.constants';

import { axiosService } from '../../../services/axios.service';
import { NOTIFICATION_TYPES } from '../../../shared/components/Notifications/components/Notification/notification.constants';

import { tripsReducer } from './trips.reducer';

import { TRIPS_GET, ACTIVE_TRIP_REQUEST_START } from './trips.actions';
import { INITIAL_STATE } from './trips.constants';

export function useTrips() {
  const dispatch = useDispatch();
  const [{ activeTrip, status }, dispatchTrips] = useReducer(tripsReducer, INITIAL_STATE);

  const getTrips = useCallback(
    async (isActive = false) => {
      try {
        dispatchTrips(ACTIVE_TRIP_REQUEST_START);
        const { data: tripInfo } = await axiosService.get(API_ROUTES.TRIP, {
          params: {
            active: isActive
          }
        });
        dispatchTrips(TRIPS_GET(tripInfo));
      } catch (error) {
        dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
      }
    },
    [dispatch, dispatchTrips]
  );

  const getActiveTrip = useCallback(() => {
    getTrips(true);
  }, [getTrips]);

  const createTrip = async (requestPayload) => {
    try {
      await axiosService.post(API_ROUTES.TRIP, requestPayload);
      dispatch(
        NOTIFICATION_ADD(NOTIFICATION_TYPES.SUCCESS, 'Offer was accepted. Your trip is started')
      );
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    }
  };

  return { getTrips, activeTrip, status, createTrip, getActiveTrip };
}
