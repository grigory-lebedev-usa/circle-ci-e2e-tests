import uniqid from 'uniqid';

import { NOTIFICATION_ACTION_TYPES } from './notification.action-types';

export const NOTIFICATION_ADD = (type, text) => {
  return { type: NOTIFICATION_ACTION_TYPES.ADD, payload: { id: uniqid(), type, text } };
};

export const NOTIFICATION_DELETE = (id) => {
  return { type: NOTIFICATION_ACTION_TYPES.DELETE, payload: id };
};
