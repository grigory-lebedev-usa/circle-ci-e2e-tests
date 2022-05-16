import React, { useContext, useState } from 'react';

import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import { axiosService } from '../../services/axios.service';

import { notificationTypes } from '../components/Notifications/components/Notification/notification.constants';

import { ROUTES, STORAGE_KEYS, USER_VALUES } from '../../constants/app.constants';

import { API_ROUTES } from '../../constants/api.constants';

import useNotifications from './useNotifications/useNotifications';

import useAppSpinner from './useAppSpinner';

const authContext = React.createContext();

function useAuth() {
  const navigate = useNavigate();
  const [isAuthed, setIsAuthed] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)).authed
  );
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();

  const login = async (requestPayload) => {
    try {
      showSpinner();
      const { data } = await axiosService.post(API_ROUTES.LOGIN, requestPayload);
      showNotification('You have successfully logged in', notificationTypes.success);
      const user = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER));
      user.authed = true;
      user.refreshToken = data.refreshToken;
      user.token = data.accessToken;
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
      setIsAuthed(JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)).authed);
      navigate(ROUTES.HOME);
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };

  const logout = () => {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(USER_VALUES));
    setIsAuthed(JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)).authed);
    navigate(ROUTES.LOGIN);
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
