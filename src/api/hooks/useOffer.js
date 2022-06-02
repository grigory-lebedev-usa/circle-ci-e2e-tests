import { useCallback, useState } from 'react';

import { useDispatch } from 'react-redux';

import { NOTIFICATION_ADD } from '../../actions/notification/notification.actions';

import { SPINNER_HIDE, SPINNER_SHOW } from '../../actions/spinner/spinner.actions';

import { API_ROUTES } from '../../constants/api.constants';
import { axiosService } from '../../services/axios.service';
import { notificationTypes } from '../../shared/components/Notifications/components/Notification/notification.constants';

export function useOffer() {
  const dispatch = useDispatch();
  const [offers, setOffers] = useState([{}]);

  const createOffer = async (requestPayload) => {
    try {
      dispatch(SPINNER_SHOW);
      await axiosService.post(API_ROUTES.OFFER, requestPayload);
      dispatch(NOTIFICATION_ADD(notificationTypes.success, 'Your offer was successfully sent'));
    } catch (error) {
      dispatch(NOTIFICATION_ADD(notificationTypes.error, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };

  const deleteOffer = async (id) => {
    try {
      dispatch(SPINNER_SHOW);
      await axiosService.delete(`${API_ROUTES.OFFER}/${id}`);
      dispatch(NOTIFICATION_ADD(notificationTypes.success, 'Your offer was cancel'));
    } catch (error) {
      dispatch(NOTIFICATION_ADD(notificationTypes.error, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };

  const getOffer = useCallback(async () => {
    try {
      dispatch(SPINNER_SHOW);
      const { data: offerInfo } = await axiosService.get(API_ROUTES.OFFER);
      setOffers(offerInfo);
    } catch (error) {
      dispatch(NOTIFICATION_ADD(notificationTypes.error, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  }, [dispatch]);

  return { createOffer, deleteOffer, getOffer, offers };
}
