import { USER_ACTION_TYPES } from '../actions/user/user.action-types';
import LocalStorageService from '../services/LocalStorageService';

const INITIAL_STATE = {
  userData: {
    createdAt: null,
    currentOrder: null,
    email: '',
    firstName: '',
    id: '',
    lastName: '',
    role: ''
  },
  isAuthenticated: LocalStorageService.isAuthenticated
};

// eslint-disable-next-line default-param-last
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.GET_SUCCESS: {
      return {
        ...state,
        userData: { ...action.payload },
        isAuthenticated: LocalStorageService.isAuthenticated
      };
    }
    case USER_ACTION_TYPES.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true
      };
    }
    case USER_ACTION_TYPES.LOGOUT: {
      return {
        ...state,
        userData: INITIAL_STATE.userData,
        isAuthenticated: false
      };
    }
    default: {
      return state;
    }
  }
};
