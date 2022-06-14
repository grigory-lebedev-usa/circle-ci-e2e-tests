import { ORDERS_ACTION_TYPES } from './orders.action-types';

export const ORDERS_REQUEST_START = {
  type: ORDERS_ACTION_TYPES.REQUEST_START
};

export const ORDERS_GET_SUCCESS = (orders) => {
  return { type: ORDERS_ACTION_TYPES.GET_SUCCESS, payload: orders };
};
