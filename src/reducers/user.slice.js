import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejectedWithValue
} from '@reduxjs/toolkit';

import { API_ROUTES } from '../constants/api.constants';
import { REQUEST_STATUS, USER_VALUES } from '../constants/app.constants';
import { axiosService } from '../services/axios.service';
import LocalStorageService from '../services/LocalStorageService';
import { NOTIFICATION_TYPES } from '../shared/components/Notifications/components/Notification/notification.constants';

import { addNotification } from './notifications.slice';

const INITIAL_STATE = {
  userData: {
    createdAt: null,
    currentOrder: null,
    email: '',
    firstName: '',
    id: '',
    lastName: '',
    role: ''
  },
  status: REQUEST_STATUS.IDLE,
  isAuthenticated: LocalStorageService.isAuthenticated
};

export const getUser = createAsyncThunk('user/get', async () => {
  const { data: userInfo } = await axiosService.get(API_ROUTES.USER_ME);
  LocalStorageService.role = userInfo.role;
  return userInfo;
});

export const registrationUser = createAsyncThunk(
  'user/registration',
  async (requestPayload, { dispatch }) => {
    try {
      await axiosService.post(API_ROUTES.REGISTER, requestPayload);
      dispatch(
        addNotification({
          type: NOTIFICATION_TYPES.SUCCESS,
          message: 'We sent the activation link to email address. Please activate your account.'
        })
      );
    } catch (error) {
      dispatch(addNotification(NOTIFICATION_TYPES.ERROR, error.response.data.message));
    }
  }
);

export const finishedUserTrip = createAsyncThunk(
  'user/finished-trip',
  async ({ userId, rating, tripId }) => {
    await axiosService.patch(`${API_ROUTES.USER}/${userId}`, { rating, tripId });
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (requestPayload, { dispatch, rejectWithValue }) => {
    try {
      LocalStorageService.user = USER_VALUES;
      const {
        data: { accessToken, refreshToken, expirationTime }
      } = await axiosService.post(API_ROUTES.LOGIN, requestPayload);
      LocalStorageService.isAuthenticated = true;
      LocalStorageService.accessToken = accessToken;
      LocalStorageService.refreshToken = refreshToken;
      LocalStorageService.expirationTime = expirationTime;
      dispatch(
        addNotification({
          type: NOTIFICATION_TYPES.SUCCESS,
          message: 'You have successfully logged in'
        })
      );
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  }
);

export const resetUserPassword = createAsyncThunk(
  'user/reset-password',
  async (requestPayload, { dispatch }) => {
    try {
      await axiosService.post(API_ROUTES.RESET_PASSWORD, requestPayload);
      dispatch(
        addNotification({
          type: NOTIFICATION_TYPES.SUCCESS,
          message: 'We sent the link for reset password on your email address.'
        })
      );
    } catch (error) {
      dispatch(
        addNotification({ type: NOTIFICATION_TYPES.ERROR, message: error.response.data.message })
      );
    }
  }
);

export const uploadUserPhoto = createAsyncThunk('user/upload-photo', async ({ file, id }) => {
  const formData = new FormData();
  formData.append('file', file);
  await axiosService.post(`${API_ROUTES.USER}/${id}/${API_ROUTES.PHOTO}`, formData);
});

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    logoutUser: () => {
      return INITIAL_STATE;
    }
  },
  extraReducers: (builder) =>
    builder

      .addCase(getUser.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.SUCCESS;
        state.userData = action.payload;
      })

      .addCase(loginUser.fulfilled, (state) => {
        state.status = REQUEST_STATUS.SUCCESS;
        state.isAuthenticated = true;
      })

      .addMatcher(
        isPending(
          getUser,
          loginUser,
          registrationUser,
          resetUserPassword,
          uploadUserPhoto,
          finishedUserTrip
        ),
        (state) => {
          state.status = REQUEST_STATUS.LOADING;
        }
      )

      .addMatcher(
        isFulfilled(registrationUser, resetUserPassword, uploadUserPhoto, finishedUserTrip),
        (state) => {
          state.status = REQUEST_STATUS.SUCCESS;
        }
      )

      .addMatcher(isRejectedWithValue(getUser, loginUser, registrationUser), (state, action) => {
        state.status = REQUEST_STATUS.FAILED;
        state.error = action.error.message;
      })
});

export const userSelector = (state) => state.user;

export default userSlice.reducer;

export const { logoutUser } = userSlice.actions;
