import { REPORTS_ACTION_TYPES } from './reports.action-types';

export const REPORTS_REQUEST_START = {
  type: REPORTS_ACTION_TYPES.REQUEST_START
};

export const REPORTS_GET_SUCCESS = (reports) => {
  return { type: REPORTS_ACTION_TYPES.GET_SUCCESS, payload: reports };
};
