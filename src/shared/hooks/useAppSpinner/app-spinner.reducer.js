import { SHOW_SPINNER, CLOSE_SPINNER, INITIAL_STATE } from './app-spinner.constants';

// eslint-disable-next-line default-param-last
export const spinnerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_SPINNER: {
      return { ...state, isLoading: true };
    }
    case CLOSE_SPINNER: {
      return { ...state, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
