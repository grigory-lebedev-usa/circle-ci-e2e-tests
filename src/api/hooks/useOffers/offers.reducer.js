import { REQUEST_STATUS } from '../../../constants/app.constants';

import { OFFERS_ACTION_TYPES } from './offers.action-types';

export function offersReducer(state, action) {
  switch (action.type) {
    case OFFERS_ACTION_TYPES.GET_SUCCESS: {
      return {
        ...state,
        offers: action.payload,
        status: REQUEST_STATUS.SUCCESS
      };
    }
    case OFFERS_ACTION_TYPES.REQUEST_START: {
      return { ...state, status: REQUEST_STATUS.LOADING };
    }
    default:
      return state;
  }
}
