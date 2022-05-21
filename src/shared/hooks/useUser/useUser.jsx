import React, { useContext, useCallback, useReducer, useEffect } from 'react';

import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import { axiosService } from '../../../services/axios.service';

import { notificationTypes } from '../../components/Notifications/components/Notification/notification.constants';

import { PRIVATE_ROUTES, PUBLIC_ROUTES, USER_VALUES } from '../../../constants/app.constants';

import { API_ROUTES } from '../../../constants/api.constants';

import LocalStorageService from '../../../services/LocalStorageService';

import useNotifications from '../useNotifications/useNotifications';

import useAppSpinner from '../useAppSpinner';

import { userReducer } from './user.reducer';
import { CREATE_USER, ERROR_LOGIN, SUCCESS_LOGIN } from './user.actions';

const userContext = React.createContext();

function useUser() {
  const navigate = useNavigate();
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();
  const [{ user, isAuthenticated }, dispatch] = useReducer(userReducer, {
    user: {},
    isAuthenticated: LocalStorageService.isAuthenticated
  });

  const getUser = useCallback(async () => {
    try {
      showSpinner();
      const { data: userInfo } = await axiosService.get(API_ROUTES.USER_ME);
      dispatch({ type: CREATE_USER, payload: userInfo });
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  }, [closeSpinner, showNotification, showSpinner]);

  useEffect(() => {
    if (isAuthenticated) {
      getUser();
    }
  }, [getUser, isAuthenticated]);

  const uploadPhoto = useCallback(
    async ({ file }) => {
      try {
        const { id } = user;
        const formData = new FormData();
        formData.append('file', file);
        showSpinner();
        await axiosService.post(`${API_ROUTES.USER}/${id}/${API_ROUTES.PHOTO}`, formData);
        showNotification('Upload successfully!', notificationTypes.success);
        navigate(PRIVATE_ROUTES.HOME);
      } catch (error) {
        showNotification(error.response.data.message, notificationTypes.error);
      } finally {
        closeSpinner();
      }
    },
    [user, showSpinner, showNotification, navigate, closeSpinner]
  );

  const login = async (requestPayload) => {
    try {
      showSpinner();
      LocalStorageService.user = USER_VALUES;
      const {
        data: { accessToken, refreshToken, expirationTime }
      } = await axiosService.post(API_ROUTES.LOGIN, requestPayload);
      dispatch({ type: SUCCESS_LOGIN });
      LocalStorageService.accessToken = accessToken;
      LocalStorageService.refreshToken = refreshToken;
      LocalStorageService.expirationTime = expirationTime;
      await getUser();
      navigate(PRIVATE_ROUTES.HOME);
      showNotification('You have successfully logged in', notificationTypes.success);
    } catch (error) {
      dispatch({ type: ERROR_LOGIN });
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  };

  const logout = () => {
    LocalStorageService.clear();
    navigate(PUBLIC_ROUTES.LOGIN);
  };

  return { user, isAuthenticated, login, logout, uploadPhoto, getUser };
}

export function UserProvider({ children }) {
  const user = useUser();
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default function AuthConsumer() {
  return useContext(userContext);
}
