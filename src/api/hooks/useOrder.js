import { useState, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { NOTIFICATION_ADD } from '../../actions/notification/notification.actions';

import { SPINNER_HIDE, SPINNER_SHOW } from '../../actions/spinner/spinner.actions';

import { API_ROUTES } from '../../constants/api.constants';
import { PRIVATE_ROUTES } from '../../constants/app.constants';
import { axiosService } from '../../services/axios.service';
import { NOTIFICATION_TYPES } from '../../shared/components/Notifications/components/Notification/notification.constants';

export function useOrder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);

  const createOrder = async (requestPayload) => {
    try {
      dispatch(SPINNER_SHOW);
      await axiosService.post(API_ROUTES.ORDER, requestPayload);
      dispatch(
        NOTIFICATION_ADD(NOTIFICATION_TYPES.SUCCESS, 'You have successfully created an order')
      );
      navigate(PRIVATE_ROUTES.CURRENT_ORDER);
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };

  const deleteOrder = async (id) => {
    try {
      dispatch(SPINNER_SHOW);
      await axiosService.delete(`${API_ROUTES.ORDER}/${id}`);
      dispatch(
        NOTIFICATION_ADD(NOTIFICATION_TYPES.SUCCESS, 'You have successfully cancel an order')
      );
      navigate(PRIVATE_ROUTES.HOME);
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };

  const getOrder = useCallback(async () => {
    try {
      dispatch(SPINNER_SHOW);
      const { data: orderInfo } = await axiosService.get(API_ROUTES.ORDER);
      setOrders(orderInfo);
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  }, [dispatch]);

  return { createOrder, deleteOrder, orders, getOrder };
}
