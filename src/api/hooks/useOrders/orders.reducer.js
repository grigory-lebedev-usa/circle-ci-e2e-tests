import { REQUEST_STATUS } from '../../../constants/app.constants';

import { ORDERS_ACTION_TYPES } from './orders.action-types';

export function ordersReducer(state, action) {
  switch (action.type) {
    case ORDERS_ACTION_TYPES.GET_SUCCESS: {
      return {
        ...state,
        orders: action.payload,
        status: REQUEST_STATUS.SUCCESS
      };
    }
    case ORDERS_ACTION_TYPES.REQUEST_START: {
      return { ...state, status: REQUEST_STATUS.LOADING };
    }
    default:
      return state;
  }
}
