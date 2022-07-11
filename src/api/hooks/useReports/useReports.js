import { useReducer, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { API_ROUTES } from '../../../constants/api.constants';
import { addNotification } from '../../../slices/notifications.slice';
import { axiosService } from '../../../services/axios.service';
import { NOTIFICATION_TYPES } from '../../../shared/components/Notifications/components/Notification/notification.constants';

import { REPORTS_GET_SUCCESS, REPORTS_REQUEST_START } from './reports.actions';

import { reportsReducer } from './reports.reducer';
import { INITIAL_STATE } from './reports.constants';

export function useReports() {
  const [{ reports, status }, dispatchReports] = useReducer(reportsReducer, INITIAL_STATE);
  const dispatch = useDispatch();

  const createReport = async (comment, tripId, driverId) => {
    try {
      dispatchReports(REPORTS_REQUEST_START);
      await axiosService.post(API_ROUTES.REPORT, { comment, tripId, driverId });
    } catch (error) {
      dispatch(
        addNotification({ type: NOTIFICATION_TYPES.ERROR, message: error.response.data.message })
      );
    }
  };

  const getReports = useCallback(
    async (page, size) => {
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
        dispatch(
          addNotification({ type: NOTIFICATION_TYPES.ERROR, message: error.response.data.message })
        );
      }
    },
    [dispatch, dispatchReports]
  );

  return { createReport, getReports, reports, status };
}
