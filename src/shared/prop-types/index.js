import PropTypes from 'prop-types';

export const DropDownPropType = PropTypes.shape({
  id: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
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

export const CarObjectPropType = PropTypes.shape({
  photo: PropTypes.string,
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  color: PropTypes.string
});
