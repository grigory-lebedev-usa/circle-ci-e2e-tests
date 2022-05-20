import { CREATE_USER } from './user.actions';

export const userReducer = (state, action) => {
  switch (action.type) {
    case CREATE_USER: {
      return { ...state, ...action.payload };
    }
    default: {
      throw new Error('Unknown action type');
    }
  }
};
