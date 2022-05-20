import React, { useEffect, useContext, useCallback, useState } from 'react';

import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import { axiosService } from '../../services/axios.service';

import { notificationTypes } from '../components/Notifications/components/Notification/notification.constants';
import { INITIAL_USER_STATE } from '../../components/Home/home.constants';
import LocalStorageService from '../../services/LocalStorageService';

import { API_ROUTES } from '../../constants/api.constants';

import { PRIVATE_ROUTES } from '../../constants/app.constants';

import useNotifications from './useNotifications/useNotifications';
import useAppSpinner from './useAppSpinner';

const userContext = React.createContext();

function useUser() {
  const navigate = useNavigate();
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();
  const [user, setUser] = useState(INITIAL_USER_STATE);
  useEffect(() => {
    const getUser = async () => {
      try {
        showSpinner();
        const { data: userInfo } = await axiosService.get(API_ROUTES.USER_ME);
        setUser(userInfo);
        LocalStorageService.role = userInfo.role;
      } catch (error) {
        showNotification(error.response.data.message, notificationTypes.error);
      } finally {
        closeSpinner();
      }
    };
    getUser();
  }, [closeSpinner, showNotification, showSpinner]);

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

  return { user, uploadPhoto };
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
