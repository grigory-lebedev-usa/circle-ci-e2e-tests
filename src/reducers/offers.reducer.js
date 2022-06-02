import { OFFERS_ACTION_TYPES } from '../actions/offers/offers.action-types';

const INITIAL_STATE = [];

// eslint-disable-next-line default-param-last
export const offersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OFFERS_ACTION_TYPES.GET_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
