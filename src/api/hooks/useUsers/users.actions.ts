import { createAsyncThunk } from '@reduxjs/toolkit';

import { API_ROUTES } from '../../../constants/api.constants';
import { axiosService } from '../../../services/axios.service';

import { UsersProps, UserBlockedProps } from './users.types';

export const getUsers = createAsyncThunk(
  'user/get-users',
  async ({ page, size, role }: UsersProps, { rejectWithValue }) => {
    try {
      const { data: usersInfo } = await axiosService.get(API_ROUTES.USER, {
        params: {
          page,
          size,
          role
        }
      });
      return usersInfo;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userBlocked = createAsyncThunk(
  'user/blocked',
  async ({ blocked, blockedUntil, userId }: UserBlockedProps, { rejectWithValue }) => {
    try {
      await axiosService.patch(`${API_ROUTES.USER}/${userId}/${API_ROUTES.BLOCKED}`, {
        blocked,
        blockedUntil
      });
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  }
);
