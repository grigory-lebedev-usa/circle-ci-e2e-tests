import React, { useContext, useState, useCallback } from 'react';

import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { axiosService } from '../../../services/axios.service';

import { notificationTypes } from '../../components/Notifications/components/Notification/notification.constants';

import { PRIVATE_ROUTES, PUBLIC_ROUTES, USER_VALUES } from '../../../constants/app.constants';

import { API_ROUTES } from '../../../constants/api.constants';

import LocalStorageService from '../../../services/LocalStorageService';

import { SPINNER_SHOW, SPINNER_HIDE } from '../../../actions/spinner/spinner.actions';

import { NOTIFICATION_ADD } from '../../../actions/notification/notification.actions';

const userContext = React.createContext();

function useUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(LocalStorageService.isAuthenticated);

  const uploadPhoto = useCallback(
    async ({ file }) => {
      try {
        const { id } = user;
        const formData = new FormData();
        formData.append('file', file);
        dispatch(SPINNER_SHOW);
        await axiosService.post(`${API_ROUTES.USER}/${id}/${API_ROUTES.PHOTO}`, formData);
        dispatch(NOTIFICATION_ADD(notificationTypes.success, 'Upload successfully!'));
        navigate(PRIVATE_ROUTES.HOME);
      } catch (error) {
        dispatch(NOTIFICATION_ADD(notificationTypes.error, error.response.data.message));
      } finally {
        dispatch(SPINNER_HIDE);
      }
    },
    [dispatch, navigate]
  );

  const login = async (requestPayload) => {
    try {
      dispatch(SPINNER_SHOW);
      LocalStorageService.user = USER_VALUES;
      const {
        data: { accessToken, refreshToken, expirationTime }
      } = await axiosService.post(API_ROUTES.LOGIN, requestPayload);
      dispatch(NOTIFICATION_ADD(notificationTypes.success, 'You have successfully logged in'));
      LocalStorageService.isAuthenticated = true;
      LocalStorageService.accessToken = accessToken;
      LocalStorageService.refreshToken = refreshToken;
      LocalStorageService.expirationTime = expirationTime;
      setIsAuthenticated(LocalStorageService.isAuthenticated);
      navigate(PRIVATE_ROUTES.HOME);
    } catch (error) {
      dispatch(NOTIFICATION_ADD(notificationTypes.error, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };

  const logout = () => {
    LocalStorageService.clear();
    navigate(PUBLIC_ROUTES.LOGIN);
  };

  return { isAuthenticated, login, logout, uploadPhoto };
}

export function UserProvider({ children }) {
  const user = useUser();
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default function UserConsumer() {
  return useContext(userContext);
}
