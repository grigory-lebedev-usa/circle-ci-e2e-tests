import { DEFAULT_STATE, SET_USER } from './user.constants';

// eslint-disable-next-line default-param-last
export const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};
