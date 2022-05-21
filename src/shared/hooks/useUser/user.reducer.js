import LocalStorageService from '../../../services/LocalStorageService';

import { CREATE_USER, SUCCESS_LOGIN, ERROR_LOGIN } from './user.actions';

export const userReducer = (state, action) => {
  switch (action.type) {
    case CREATE_USER: {
      return { ...state, user: { ...action.payload } };
    }
    case SUCCESS_LOGIN: {
      // eslint-disable-next-line no-return-assign
      return { ...state, isAuthenticated: (LocalStorageService.isAuthenticated = true) };
    }
    case ERROR_LOGIN: {
      // eslint-disable-next-line no-return-assign
      return { ...state, isAuthenticated: (LocalStorageService.isAuthenticated = false) };
    }
    default: {
      throw new Error('Unknown action type');
    }
  }
};
