import { useReducer, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { NOTIFICATION_ADD } from '../../../actions/notification/notification.actions';
import { NOTIFICATION_TYPES } from '../../../shared/components/Notifications/components/Notification/notification.constants';
import { API_ROUTES } from '../../../constants/api.constants';
import { axiosService } from '../../../services/axios.service';

import { ORDERS_REQUEST_START, ORDERS_GET_SUCCESS } from './orders.actions';
import { INITIAL_STATE } from './orders.constants';
import { ordersReducer } from './orders.reducer';

export function useOrders() {
  const dispatch = useDispatch();
  const [{ orders, status }, dispatchOrders] = useReducer(ordersReducer, INITIAL_STATE);

  const getOrders = useCallback(async () => {
    try {
      dispatchOrders(ORDERS_REQUEST_START);
      const { data: ordersInfo } = await axiosService.get(API_ROUTES.ORDER);
      dispatchOrders(ORDERS_GET_SUCCESS(ordersInfo));
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    }
  }, [dispatch, dispatchOrders]);

  const createOrder = async (requestPayload) => {
    try {
      dispatchOrders(ORDERS_REQUEST_START);
      await axiosService.post(API_ROUTES.ORDER, requestPayload);
      dispatch(
        NOTIFICATION_ADD(NOTIFICATION_TYPES.SUCCESS, 'You have successfully created an order')
      );
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    }
  };

  const deleteOrder = async (id) => {
    try {
      dispatchOrders(ORDERS_REQUEST_START);
      await axiosService.delete(`${API_ROUTES.ORDER}/${id}`);
      dispatch(
        NOTIFICATION_ADD(NOTIFICATION_TYPES.SUCCESS, 'You have successfully cancel an order')
      );
    } catch (error) {
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    }
  };

  return { orders, status, getOrders, createOrder, deleteOrder };
}
