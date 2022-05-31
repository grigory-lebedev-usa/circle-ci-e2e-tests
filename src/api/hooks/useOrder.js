import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { NOTIFICATION_ADD } from '../../actions/notification/notification.actions';

import { SPINNER_HIDE, SPINNER_SHOW } from '../../actions/spinner/spinner.actions';

import { API_ROUTES } from '../../constants/api.constants';
import { PRIVATE_ROUTES } from '../../constants/app.constants';
import { axiosService } from '../../services/axios.service';
import { notificationTypes } from '../../shared/components/Notifications/components/Notification/notification.constants';

export function useOrder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [order, setOrder] = useState({});

  const createOrder = async (requestPayload) => {
    try {
      dispatch(SPINNER_SHOW);
      await axiosService.post(API_ROUTES.ORDER, requestPayload);
      dispatch(
        NOTIFICATION_ADD(notificationTypes.success, 'You have successfully created an order')
      );
      navigate(PRIVATE_ROUTES.CURRENT_ORDER);
    } catch (error) {
      dispatch(NOTIFICATION_ADD(notificationTypes.error, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };

  const deleteOrder = async (id) => {
    try {
      dispatch(SPINNER_SHOW);
      await axiosService.delete(`${API_ROUTES.ORDER}/${id}`);
      dispatch(
        NOTIFICATION_ADD(notificationTypes.success, 'You have successfully cancel an order')
      );
      navigate(PRIVATE_ROUTES.HOME);
    } catch (error) {
      dispatch(NOTIFICATION_ADD(notificationTypes.error, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };

  useEffect(() => {
    const getOrder = async () => {
      try {
        dispatch(SPINNER_SHOW);
        const { data: orderInfo } = await axiosService.get(API_ROUTES.ORDER);
        setOrder(orderInfo);
      } catch (error) {
        dispatch(NOTIFICATION_ADD(notificationTypes.error, error.response.data.message));
      } finally {
        dispatch(SPINNER_HIDE);
      }
    };
    getOrder();
  }, [dispatch]);

  return { createOrder, deleteOrder, order };
}
