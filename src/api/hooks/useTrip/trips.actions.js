import { TRIPS_ACTION_TYPES } from './trips.action-types';

export const TRIPS_GET = (payload) => {
  return { type: TRIPS_ACTION_TYPES.GET_SUCCESS, payload };
};

export const TRIPS_REQUEST_START = {
  type: TRIPS_ACTION_TYPES.REQUEST_START
};

export const TRIPS_REQUEST_SUCCESS = {
  type: TRIPS_ACTION_TYPES.REQUEST_SUCCESS
};

export const TRIPS_REQUEST_FAILED = (payload) => {
  return { type: TRIPS_ACTION_TYPES.REQUEST_FAILED, payload };
};
