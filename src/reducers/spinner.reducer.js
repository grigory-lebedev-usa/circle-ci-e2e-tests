import { SPINNER_ACTION_TYPES } from '../actions/spinner/spinner.action-types';

const INITIAL_STATE = {
  isShowSpinner: false
};

// eslint-disable-next-line default-param-last
export const spinnerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SPINNER_ACTION_TYPES.SHOW: {
      return { ...state, isShowSpinner: true };
    }
    case SPINNER_ACTION_TYPES.HIDE: {
      return { ...state, isShowSpinner: false };
    }
    default: {
      return state;
    }
  }
};
