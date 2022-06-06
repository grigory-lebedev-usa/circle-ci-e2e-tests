import { USER_ACTION_TYPES } from '../actions/user/user.action-types';
import { REQUEST_STATUS } from '../constants/app.constants';
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
  status: REQUEST_STATUS.IDLE,
  isAuthenticated: LocalStorageService.isAuthenticated
};

// eslint-disable-next-line default-param-last
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.GET_SUCCESS: {
      return {
        ...state,
        userData: { ...action.payload },
        status: REQUEST_STATUS.SUCCESS,
        isAuthenticated: LocalStorageService.isAuthenticated
      };
    }
    case USER_ACTION_TYPES.LOGIN_SUCCESS: {
      return {
        ...state,
        status: REQUEST_STATUS.SUCCESS,
        isAuthenticated: true
      };
    }
    case USER_ACTION_TYPES.LOGOUT: {
      return {
        ...state,
        userData: INITIAL_STATE.userData,
        status: REQUEST_STATUS.IDLE,
        isAuthenticated: false
      };
    }
    case USER_ACTION_TYPES.REQUEST_START: {
      return {
        ...state,
        status: REQUEST_STATUS.LOADING
      };
    }
    case USER_ACTION_TYPES.REQUEST_FAILED: {
      return {
        ...state,
        status: REQUEST_STATUS.FAILED
      };
    }
    default: {
      return state;
    }
  }
};
