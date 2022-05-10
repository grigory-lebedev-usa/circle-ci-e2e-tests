import React, { useContext, useState } from 'react';

import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import { axiosService } from '../../services/axios.service';

import { notificationTypes } from '../components/Notifications/components/Notification/notification.constants';

import { ROUTES } from '../../app.constants';

import useNotifications from './useNotifications';
import useAppSpinner from './useAppSpinner';

const authContext = React.createContext();

function useAuth() {
  const navigate = useNavigate();
  const [isAuthed, setIsAuthed] = useState(true);
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();

  const login = async (requestPayload) => {
    try {
      showSpinner();
      const response = await axiosService.post('login', requestPayload);
      showNotification('You have successfully logged in', notificationTypes.success);
      localStorage.setItem('token', response.data.accessToken);
      setIsAuthed(true);
      navigate(ROUTES.HOME);
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };

  const logout = () => {
    localStorage.clear();
    setIsAuthed(false);
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
