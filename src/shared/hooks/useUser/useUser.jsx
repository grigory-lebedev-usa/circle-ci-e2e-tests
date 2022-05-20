import React, { useContext, useCallback, useReducer } from 'react';

import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import { axiosService } from '../../../services/axios.service';

import { notificationTypes } from '../../components/Notifications/components/Notification/notification.constants';

import { API_ROUTES } from '../../../constants/api.constants';

import { PRIVATE_ROUTES } from '../../../constants/app.constants';

import useNotifications from '../useNotifications/useNotifications';
import useAppSpinner from '../useAppSpinner';

import { userReducer } from './user.reducer';
import { INITIAL_STATE } from './user.constants';
import { CREATE_USER } from './user.actions';

const userContext = React.createContext();

function useUser() {
  const navigate = useNavigate();
  const { showSpinner, closeSpinner } = useAppSpinner();
  const { showNotification } = useNotifications();
  const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const getUser = useCallback(async () => {
    try {
      showSpinner();
      const { data: userInfo } = await axiosService.get(API_ROUTES.USER_ME);
      dispatch({ type: CREATE_USER, payload: userInfo });
      console.log(userState);
    } catch (error) {
      showNotification(error.response.data.message, notificationTypes.error);
    } finally {
      closeSpinner();
    }
  }, [closeSpinner, showNotification, showSpinner, userState]);

  const uploadPhoto = useCallback(
    async ({ file }) => {
      try {
        const { id } = userState;
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
    [userState, showSpinner, showNotification, navigate, closeSpinner]
  );

  return { getUser, user: userState, uploadPhoto };
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
