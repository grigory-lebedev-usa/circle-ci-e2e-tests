import { combineReducers } from 'redux';

import { userReducer } from './user.reducer';
import { spinnerReducer } from './spinner.reducer';
import { notificationsReducer } from './notifications.reducer';
import { offersReducer } from './offers.reducer';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  spinner: spinnerReducer,
  user: userReducer,
  offers: offersReducer
});

export default rootReducer;
