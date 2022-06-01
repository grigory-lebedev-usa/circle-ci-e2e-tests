import { USER_ACTION_TYPES } from '../actions/user/user.action-types';
import LocalStorageService from '../services/LocalStorageService';

const INITIAL_STATE = {};

// eslint-disable-next-line default-param-last
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET: {
      return {
        ...state,
        data: { ...action.payload },
        isAuthenticated: LocalStorageService.isAuthenticated
      };
    }
    default: {
      return state;
    }
  }
};
