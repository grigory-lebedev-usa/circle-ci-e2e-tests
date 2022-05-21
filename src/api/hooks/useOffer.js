import { useCallback, useState } from 'react';

import { API_ROUTES } from '../../constants/api.constants';
import { axiosService } from '../../services/axios.service';
import { notificationTypes } from '../../shared/components/Notifications/components/Notification/notification.constants';
import useAppSpinner from '../../shared/hooks/useAppSpinner';
import useNotifications from '../../shared/hooks/useNotifications/useNotifications';

export function useOffer() {
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();
  const [offers, setOffers] = useState([{}]);

  const createOffer = async (requestPayload) => {
    try {
      showSpinner();
      await axiosService.post(API_ROUTES.OFFER, requestPayload);
      showNotification('Your offer was successfully sent', notificationTypes.success);
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };

  const deleteOffer = async (id) => {
    try {
      showSpinner();
      await axiosService.delete(`${API_ROUTES.OFFER}/${id}`);
      showNotification('Your offer was cancel', notificationTypes.success);
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };

  const getOffer = useCallback(async () => {
    try {
      showSpinner();
      const { data: offerInfo } = await axiosService.get(API_ROUTES.OFFER);
      setOffers(offerInfo);
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  }, [closeSpinner, showNotification, showSpinner]);

  return { createOffer, deleteOffer, getOffer, offers };
}
