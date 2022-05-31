const INITIAL_STATE = {};

// eslint-disable-next-line default-param-last
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};
