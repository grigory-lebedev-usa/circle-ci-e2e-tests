import { combineReducers } from 'redux';

import { userReducer } from './user.reducer';
import { spinnerReducer } from './spinner.reducer';
import { notificationsReducer } from './notifications.reducer';
import { tripsReducer } from './trips.reducer';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  spinner: spinnerReducer,
  user: userReducer,
  trips: tripsReducer
});

export default rootReducer;
