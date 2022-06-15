import { REQUEST_STATUS } from '../../../constants/app.constants';

import { REPORTS_ACTION_TYPES } from './reports.action-types';

export function reportsReducer(state, action) {
  switch (action.type) {
    case REPORTS_ACTION_TYPES.GET_SUCCESS: {
      return {
        ...state,
        reports: action.payload,
        status: REQUEST_STATUS.SUCCESS
      };
    }
    case REPORTS_ACTION_TYPES.REQUEST_START: {
      return { ...state, status: REQUEST_STATUS.LOADING };
    }
    default:
      return state;
  }
}
