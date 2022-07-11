import { createAsyncThunk } from '@reduxjs/toolkit';

import { API_ROUTES } from '../../../constants/api.constants';
import { axiosService } from '../../../services/axios.service';

import { UsersProps } from './users.types';

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
