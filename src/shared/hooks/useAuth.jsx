import React, { useContext, useState } from 'react';

import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import { axiosService } from '../../services/axios.service';

import { notificationTypes } from '../components/Notifications/components/Notification/notification.constants';

import { PRIVATE_ROUTES, PUBLIC_ROUTES, USER_VALUES } from '../../constants/app.constants';

import { API_ROUTES } from '../../constants/api.constants';

import LocalStorageService from '../../services/LocalStorageService';

import useNotifications from './useNotifications/useNotifications';

import useAppSpinner from './useAppSpinner';

import useUser from './useUser/useUser';

const authContext = React.createContext();

function useAuth() {
  const navigate = useNavigate();
  const [isAuthed, setIsAuthed] = useState(LocalStorageService.authed || false);
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();
  const { getUser } = useUser();

  const login = async (requestPayload) => {
    try {
      showSpinner();
      LocalStorageService.user = USER_VALUES;
      const {
        data: { accessToken, refreshToken, expirationTime }
      } = await axiosService.post(API_ROUTES.LOGIN, requestPayload);
      LocalStorageService.authed = true;
      LocalStorageService.accessToken = accessToken;
      LocalStorageService.refreshToken = refreshToken;
      LocalStorageService.expirationTime = expirationTime;
      setIsAuthed(true);
      await getUser();
      navigate(PRIVATE_ROUTES.HOME);
      showNotification('You have successfully logged in', notificationTypes.success);
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };

  const logout = () => {
    LocalStorageService.clear();
    navigate(PUBLIC_ROUTES.LOGIN);
  };

  return { isAuthed, login, logout };
}

export function AuthProvider({ children }) {
  const auth = useAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default function AuthConsumer() {
  return useContext(authContext);
}
