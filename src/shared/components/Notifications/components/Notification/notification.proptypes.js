import PropTypes from 'prop-types';

import { NOTIFICATION_TYPES } from './notification.constants';

export const NotificationPropType = PropTypes.shape({
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(NOTIFICATION_TYPES)).isRequired,
  id: PropTypes.string.isRequired
});
