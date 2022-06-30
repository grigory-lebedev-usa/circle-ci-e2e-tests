import { combineReducers } from 'redux';

import notificationsSlice from './notifications.slice';
import tripsSlice from './trips.slice';
import userSlice from './user.slice';

const rootReducer = combineReducers({
  notifications: notificationsSlice,
  user: userSlice,
  trips: tripsSlice
});

export default rootReducer;
