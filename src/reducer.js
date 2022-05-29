import { combineReducers } from 'redux';

import { spinnerReducer } from './shared/hooks/useAppSpinner/app-spinner.reducer';
import { notificationsReducer } from './shared/hooks/useNotifications/notifications.reducer';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  spinner: spinnerReducer
});

export default rootReducer;
