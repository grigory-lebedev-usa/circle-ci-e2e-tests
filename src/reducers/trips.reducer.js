import { REQUEST_STATUS } from '../constants/app.constants';
import { TRIPS_ACTION_TYPES } from '../actions/trips/trips.action-types';

export const INITIAL_STATE = {
  activeTrip: {
    driver: {
      firstName: '',
      lastName: '',
      car: {
        photo: ''
      }
    }
  },
  inactiveTrips: [],
  status: REQUEST_STATUS.IDLE
};

// eslint-disable-next-line default-param-last
export const tripsReducer = (state = INITIAL_STATE, action) => {
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
    case TRIPS_ACTION_TYPES.RESET: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
