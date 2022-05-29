import { ADD_NOTIFICATION, DELETE_NOTIFICATION, INITIAL_STATE } from './notifications.constants';

// eslint-disable-next-line default-param-last
export const notificationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION: {
      return [...state, action.payload].slice(-4);
    }
    case DELETE_NOTIFICATION: {
      return state.filter(({ id }) => id !== action.payload);
    }
    default: {
      return state;
    }
  }
};
