import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected
} from '@reduxjs/toolkit';

import { API_ROUTES } from '../constants/api.constants';

import { REQUEST_STATUS } from '../constants/app.constants';
import { axiosService } from '../services/axios.service';
import { NOTIFICATION_TYPES } from '../shared/components/Notifications/components/Notification/notification.constants';

import { addNotification } from './notifications.slice';

export const INITIAL_STATE = {
  activeTrip: {
    driver: {
      firstName: '',
      lastName: '',
      car: {
        photo: ''
      }
    }
  },
  inactiveTrips: [],
  status: REQUEST_STATUS.IDLE
};

export const getTrips = createAsyncThunk(
  'trips/get',

  async ({ page, size }, { dispatch, rejectWithValue }) => {
    try {
      const { data: tripInfo } = await axiosService.get(API_ROUTES.TRIP, {
        params: {
          active: false,
          page,
          size
        }
      });
      return tripInfo;
    } catch (error) {
      dispatch(
        addNotification({ type: NOTIFICATION_TYPES.ERROR, message: error.response.data.message })
      );
      return rejectWithValue(error.response.data);
    }
  }
);

export const getActiveTrip = createAsyncThunk(
  'trips/get-active-trip',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data: tripInfo } = await axiosService.get(API_ROUTES.TRIP, {
        params: {
          active: true
        }
      });
      return tripInfo;
    } catch (error) {
      dispatch(
        addNotification({ type: NOTIFICATION_TYPES.ERROR, message: error.response.data.message })
      );
      return rejectWithValue(error.response.data);
    }
  }
);

export const createTrip = createAsyncThunk(
  'trips/create-trip',
  async (requestPayload, { dispatch }) => {
    try {
      await axiosService.post(API_ROUTES.TRIP, requestPayload);
      dispatch(
        addNotification({
          type: NOTIFICATION_TYPES.SUCCESS,
          message: 'Offer was accepted. Your trip is started'
        })
      );
    } catch (error) {
      dispatch(
        addNotification({ type: NOTIFICATION_TYPES.ERROR, message: error.response.data.message })
      );
    }
  }
);

export const deleteTrip = createAsyncThunk('trips/delete-trip', async (tripId, { dispatch }) => {
  try {
    await axiosService.patch(`${API_ROUTES.TRIP}/${tripId}`);
    dispatch(
      addNotification({ type: NOTIFICATION_TYPES.SUCCESS, message: 'Your treep was finished' })
    );
  } catch (error) {
    dispatch(
      addNotification({ type: NOTIFICATION_TYPES.ERROR, message: error.response.data.message })
    );
  }
});

const tripsSlice = createSlice({
  name: 'trips',
  initialState: INITIAL_STATE,
  reducers: {
    resetTrips: () => {
      return INITIAL_STATE;
    }
  },
  extraReducers: (builder) =>
    builder

      .addCase(getTrips.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.SUCCESS;
        state.inactiveTrips = { ...action.payload };
      })

      .addCase(getActiveTrip.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.SUCCESS;
        state.activeTrip = { ...action.payload[0] };
      })

      .addMatcher(isPending(getTrips, getActiveTrip, createTrip, deleteTrip), (state) => {
        state.status = REQUEST_STATUS.LOADING;
      })

      .addMatcher(isFulfilled(createTrip, deleteTrip), (state) => {
        state.status = REQUEST_STATUS.SUCCESS;
      })

      .addMatcher(isRejected(getTrips, getActiveTrip, createTrip, deleteTrip), (state) => {
        state.status = REQUEST_STATUS.FAILED;
      })
});

export const tripsSelector = (state) => state.trips;

export const activeTripSelector = (state) => state.trips.activeTrip;

export const inactiveTripsSelector = (state) => state.trips.inactiveTrips;

export default tripsSlice.reducer;

export const { resetTrips } = tripsSlice.actions;
