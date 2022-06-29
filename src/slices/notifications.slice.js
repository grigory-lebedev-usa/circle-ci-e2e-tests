import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const INITIAL_STATE = [];

const notificationsSlice = createSlice({
  name: 'notification',
  initialState: INITIAL_STATE,
  reducers: {
    addNotification: {
      reducer(state, action) {
        return [...state, action.payload].slice(-4);
      },
      prepare(payload) {
        return { payload: { id: uniqid(), ...payload } };
      }
    },
    deleteNotification(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    }
  }
});

export const notificationsSelector = (state) => state.notifications;

export const { actions, reducer } = notificationsSlice;

export const { addNotification, deleteNotification } = actions;

export default reducer;
