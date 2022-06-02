import { NOTIFICATION_ACTION_TYPES } from '../actions/notification/notification.action-types';

const INITIAL_STATE = [];
// eslint-disable-next-line default-param-last
export const notificationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTIFICATION_ACTION_TYPES.ADD: {
      return [...state, action.payload].slice(-4);
    }
    case NOTIFICATION_ACTION_TYPES.DELETE: {
      return state.filter(({ id }) => id !== action.payload);
    }
    default: {
      return state;
    }
  }
};
