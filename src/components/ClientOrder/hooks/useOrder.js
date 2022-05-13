import { useState } from 'react';

import { API_ROUTES } from '../../../constants/api.constants';
import { axiosService } from '../../../services/axios.service';
import { notificationTypes } from '../../../shared/components/Notifications/components/Notification/notification.constants';
import useAppSpinner from '../../../shared/hooks/useAppSpinner';
import useNotifications from '../../../shared/hooks/useNotifications/useNotifications';

export function useOrder() {
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();
  const [orderId, setOrderId] = useState('');

  const createOrder = async (requestPayload) => {
    try {
      showSpinner();
      const { data } = await axiosService.post(API_ROUTES.ORDER, requestPayload);
      showNotification('You have successfully created an order', notificationTypes.success);
      setOrderId(data.id);
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };

  const deleteOrder = async (id) => {
    try {
      showSpinner();
      await axiosService.delete(`${API_ROUTES.ORDER}/${id}`);
      showNotification('You have successfully delete an order', notificationTypes.success);
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };

  return { createOrder, deleteOrder, orderId };
}
