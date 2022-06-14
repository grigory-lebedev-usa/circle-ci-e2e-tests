import { OFFERS_ACTION_TYPES } from './offers.action-types';

export const OFFERS_GET_SUCCESS = (offers) => {
  return { type: OFFERS_ACTION_TYPES.GET_SUCCESS, payload: offers };
};

export const OFFERS_REQUEST_START = {
  type: OFFERS_ACTION_TYPES.REQUEST_START
};
