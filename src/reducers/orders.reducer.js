import { ORDERS_ACTION_TYPES } from '../actions/orders/orders.action-types';

const INITIAL_STATE = [];

// eslint-disable-next-line default-param-last
export const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDERS_ACTION_TYPES.GET_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
