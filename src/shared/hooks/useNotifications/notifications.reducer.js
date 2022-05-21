import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from './notifications.actions';

export const notificationsReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION: {
      return [...state, action.payload].slice(-4);
    }
    case DELETE_NOTIFICATION: {
      return state.filter(({ id }) => id !== action.payload);
    }
    default: {
      throw new Error('Unknown action type');
    }
  }
};
