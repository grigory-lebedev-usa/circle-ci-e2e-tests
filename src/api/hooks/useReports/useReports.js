import { useReducer } from 'react';

import { useDispatch } from 'react-redux';

import { NOTIFICATION_ADD } from '../../../actions/notification/notification.actions';
import { API_ROUTES } from '../../../constants/api.constants';
import { axiosService } from '../../../services/axios.service';
import { NOTIFICATION_TYPES } from '../../../shared/components/Notifications/components/Notification/notification.constants';

import { REPORTS_GET_SUCCESS, REPORTS_REQUEST_START } from './reports.actions';

import { reportsReducer } from './reports.reducer';

export function useReports() {
  const [{ reports, status }, dispatchReports] = useReducer(reportsReducer, {});
  const dispatch = useDispatch();

  const createReport = async (comment, tripId, driverId) => {
    try {
      dispatchReports(REPORTS_REQUEST_START);
      await axiosService.post(API_ROUTES.REPORT, { comment, tripId, driverId });
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    }
  };

  const getReports = async (page, size) => {
    try {
      dispatchReports(REPORTS_REQUEST_START);
      const { data: reportsInfo } = await axiosService.get(API_ROUTES.REPORT, {
        params: {
          page,
          size
        }
      });
      dispatchReports(REPORTS_GET_SUCCESS(reportsInfo));
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    }
  };

  return { createReport, getReports, reports, status };
}
