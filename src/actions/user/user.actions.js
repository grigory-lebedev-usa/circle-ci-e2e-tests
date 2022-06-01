import { USER_ACTION_TYPES } from './user.action-types';

export const SET_USER = (user) => {
  return { type: USER_ACTION_TYPES.SET, payload: user };
};
