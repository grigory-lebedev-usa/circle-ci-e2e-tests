import PropTypes from 'prop-types';

import { notificationTypes } from './notification.constants';

export const NotificationPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(notificationTypes)).isRequired,
  id: PropTypes.string.isRequired
});
