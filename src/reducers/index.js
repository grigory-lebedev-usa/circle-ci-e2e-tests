import { combineReducers } from 'redux';

import { userReducer } from './user.reducer';
import { spinnerReducer } from './spinner.reducer';
import { notificationsReducer } from './notifications.reducer';
import { ordersReducer } from './orders.reducer';
import { offersReducer } from './offers.reducer';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  spinner: spinnerReducer,
  user: userReducer,
  orders: ordersReducer,
  offers: offersReducer
});

export default rootReducer;
