import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { API_ROUTES } from '../../constants/api.constants';
import { PRIVATE_ROUTES } from '../../constants/app.constants';
import { axiosService } from '../../services/axios.service';
import { notificationTypes } from '../../shared/components/Notifications/components/Notification/notification.constants';
import useAppSpinner from '../../shared/hooks/useAppSpinner';
import useNotifications from '../../shared/hooks/useNotifications/useNotifications';

export function useOrder() {
  const navigate = useNavigate();
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();
  const [order, setOrder] = useState({});

  const createOrder = async (requestPayload) => {
    try {
      showSpinner();
      await axiosService.post(API_ROUTES.ORDER, requestPayload);
      showNotification('You have successfully created an order', notificationTypes.success);
      navigate(PRIVATE_ROUTES.CURRENT_ORDER);
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
      showNotification('You have successfully cancel an order', notificationTypes.success);
      navigate(PRIVATE_ROUTES.HOME);
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };

  useEffect(() => {
    const getOrder = async () => {
      try {
        showSpinner();
        const { data: orderInfo } = await axiosService.get(API_ROUTES.ORDER);
        setOrder(orderInfo);
      } catch (error) {
        showNotification(error.response.data.message, notificationTypes.error);
      } finally {
        closeSpinner();
      }
    };
    getOrder();
  }, [closeSpinner, showNotification, showSpinner]);

  return { createOrder, deleteOrder, order };
}
