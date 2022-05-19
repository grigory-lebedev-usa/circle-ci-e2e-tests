import { useEffect, useState } from 'react';

import { API_ROUTES } from '../../constants/api.constants';
import { axiosService } from '../../services/axios.service';
import { notificationTypes } from '../../shared/components/Notifications/components/Notification/notification.constants';
import useAppSpinner from '../../shared/hooks/useAppSpinner';
import useNotifications from '../../shared/hooks/useNotifications/useNotifications';

export function useOffer() {
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();
  const [offerId, setOfferId] = useState('');
  const [isOffer, setIsOffer] = useState(false);
  const [offers, setOffers] = useState([{}]);

  const createOffer = async (requestPayload) => {
    try {
      showSpinner();
      const {
        data: { id }
      } = await axiosService.post(API_ROUTES.OFFER, requestPayload);
      setOfferId(id);
      showNotification('Your offer was successfully sent', notificationTypes.success);
      setIsOffer(true);
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
      setIsOffer(false);
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };

  useEffect(() => {
    const getOffer = async () => {
      try {
        showSpinner();
        const { data: offerInfo } = await axiosService.get(API_ROUTES.OFFER);
        setOffers(offerInfo);
      } catch (error) {
        showNotification(error.response.data.message, notificationTypes.error);
      } finally {
        closeSpinner();
      }
    };
    getOffer();
  }, [closeSpinner, showNotification, showSpinner]);

  return { createOffer, deleteOffer, offers, offerId, isOffer };
}
