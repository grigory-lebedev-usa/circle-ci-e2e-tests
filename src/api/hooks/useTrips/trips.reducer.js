import { REQUEST_STATUS } from '../../../constants/app.constants';

import { TRIPS_ACTION_TYPES } from './trips.action-types';

export function tripsReducer(state, action) {
  switch (action.type) {
    case TRIPS_ACTION_TYPES.GET_SUCCESS: {
      return {
        ...state,
        activeTrip: { ...action.payload[0] },
        inactiveTrips: { ...action.payload },
        status: REQUEST_STATUS.SUCCESS
      };
    }
    case TRIPS_ACTION_TYPES.REQUEST_START: {
      return { ...state, status: REQUEST_STATUS.LOADING };
    }
    default:
      return state;
  }
}
