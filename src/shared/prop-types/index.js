import PropTypes from 'prop-types';

export const DropDownPropType = PropTypes.shape({
  id: PropTypes.number,
  value: PropTypes.string
});

export const OrderObjectPropType = PropTypes.shape({
  client: PropTypes.objectOf(PropTypes.string),
  createdAt: PropTypes.number,
  destination: PropTypes.string,
  id: PropTypes.string,
  source: PropTypes.string
});

export const OfferObjectPropType = PropTypes.shape({
  client: PropTypes.objectOf(PropTypes.string),
  createdAt: PropTypes.number,
  id: PropTypes.string
});
