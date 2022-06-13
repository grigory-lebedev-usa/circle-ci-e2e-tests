import { TRIPS_ACTION_TYPES } from './trips.action-types';

export const TRIPS_GET = (payload) => {
  return { type: TRIPS_ACTION_TYPES.GET_SUCCESS, payload };
};

export const ACTIVE_TRIP_REQUEST_START = {
  type: TRIPS_ACTION_TYPES.REQUEST_START
};
