import { API_ROUTES } from '../../constants/api.constants';
import { USER_VALUES } from '../../constants/app.constants';
import { axiosService } from '../../services/axios.service';
import LocalStorageService from '../../services/LocalStorageService';
import { NOTIFICATION_TYPES } from '../../shared/components/Notifications/components/Notification/notification.constants';
import { NOTIFICATION_ADD } from '../notification/notification.actions';
import { SPINNER_HIDE, SPINNER_SHOW } from '../spinner/spinner.actions';
import { TRIPS_RESET } from '../trips/trips.actions';

import { USER_ACTION_TYPES } from './user.action-types';

export const USER_GET_SUCCESS = (user) => {
  return { type: USER_ACTION_TYPES.GET_SUCCESS, payload: user };
};

export const LOGIN_SUCCESS = {
  type: USER_ACTION_TYPES.LOGIN_SUCCESS
};

export const LOGOUT = {
  type: USER_ACTION_TYPES.LOGOUT
};

export const USER_REQUEST_START = {
  type: USER_ACTION_TYPES.REQUEST_START
};

export const USER_REQUEST_FAILED = (payload) => {
  return { type: USER_ACTION_TYPES.REQUEST_FAILED, payload };
};

export const USER_GET = () => {
  return async (dispatch) => {
    try {
      dispatch(SPINNER_SHOW);
      dispatch(USER_REQUEST_START);
      const { data: userInfo } = await axiosService.get(API_ROUTES.USER_ME);
      dispatch(USER_GET_SUCCESS(userInfo));
      LocalStorageService.role = userInfo.role;
    } catch (error) {
      dispatch(USER_REQUEST_FAILED(error));
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };
};

export const USER_REGISTRATION = (requestPayload) => {
  return async (dispatch) => {
    try {
      dispatch(SPINNER_SHOW);
      dispatch(USER_REQUEST_START);
      await axiosService.post(API_ROUTES.REGISTER, requestPayload);
      dispatch(
        NOTIFICATION_ADD(
          NOTIFICATION_TYPES.SUCCESS,
          'We sent the activation link to email address. Please activate your account.'
        )
      );
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };
};

export const USER_LOGIN = (requestPayload) => {
  return async (dispatch) => {
    try {
      dispatch(SPINNER_SHOW);
      dispatch(USER_REQUEST_START);
      LocalStorageService.user = USER_VALUES;
      const {
        data: { accessToken, refreshToken, expirationTime }
      } = await axiosService.post(API_ROUTES.LOGIN, requestPayload);
      LocalStorageService.isAuthenticated = true;
      LocalStorageService.accessToken = accessToken;
      LocalStorageService.refreshToken = refreshToken;
      LocalStorageService.expirationTime = expirationTime;
      dispatch(LOGIN_SUCCESS);
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.SUCCESS, 'You have successfully logged in'));
    } catch (error) {
      dispatch(USER_REQUEST_FAILED(error));
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };
};

export const USER_RESET_PASSWORD = (requestPayload) => {
  return async (dispatch) => {
    try {
      dispatch(SPINNER_SHOW);
      dispatch(USER_REQUEST_START);
      await axiosService.post(API_ROUTES.RESET_PASSWORD, requestPayload);
      dispatch(
        NOTIFICATION_ADD(
          NOTIFICATION_TYPES.SUCCESS,
          'We sent the link for reset password on your email address.'
        )
      );
    } catch (error) {
      dispatch(USER_REQUEST_FAILED(error));
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };
};

export const USER_UPLOAD_PHOTO = ({ file, id }) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      dispatch(SPINNER_SHOW);
      dispatch(USER_REQUEST_START);
      await axiosService.post(`${API_ROUTES.USER}/${id}/${API_ROUTES.PHOTO}`, formData);
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.SUCCESS, 'Upload successfully!'));
    } catch (error) {
      dispatch(USER_REQUEST_FAILED(error));
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };
};

export const USER_LOGOUT = () => {
  return async (dispatch) => {
    dispatch(LOGOUT);
    dispatch(TRIPS_RESET);
    LocalStorageService.clear();
  };
};

export const USER_TRIP_FINISHED = (userId, rating, tripId) => {
  return async (dispatch) => {
    try {
      dispatch(USER_REQUEST_START);
      await axiosService.patch(`${API_ROUTES.USER}/${userId}`, { rating, tripId });
    } finally {
      dispatch(SPINNER_HIDE);
    }
  };
};

const USER_REFRESH_TOKEN = (token) => {
  return async (dispatch) => {
    try {
      const {
        data: { accessToken, refreshToken, expirationTime }
      } = await axiosService.post(API_ROUTES.REFRESH, { refreshToken: token });
      LocalStorageService.accessToken = accessToken;
      LocalStorageService.refreshToken = refreshToken;
      LocalStorageService.expirationTime = expirationTime;
    } catch (error) {
      dispatch(USER_REQUEST_FAILED(error));
      dispatch(NOTIFICATION_ADD(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    }
  };
};

export const USER_AUTO_REFRESH_TOKEN = (refreshToken, expirationTime) => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(USER_REFRESH_TOKEN(refreshToken));
    }, expirationTime - 120000);
  };
};

export const USER_AUTO_LOGOUT = (expirationTime) => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(USER_LOGOUT());
    }, expirationTime - 120000);
  };
};
