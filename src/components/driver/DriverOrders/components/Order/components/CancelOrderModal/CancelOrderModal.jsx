import PropTypes from 'prop-types';

import { useOffers } from '../../../../../../../api/hooks/useOffers/useOffers';

import ConfirmationModal from '../../../../../../../shared/components/ConfirmationModal/ConfirmationModal';

function CancelOrderModal({ isOpened, onCancel, order, offerId, getOffers }) {
  const { deleteOffer } = useOffers();

  const handleOfferDelete = async () => {
    onCancel();
    await deleteOffer(offerId);
    await getOffers();
  };

  return (
    <ConfirmationModal
      isOpened={isOpened}
      onCancel={onCancel}
      onConfirm={handleOfferDelete}
      text={`Are you sure you want to cancel ${order.source} - ${order.destination} offer?`}
    />
  );
}

CancelOrderModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onCancel: PropTypes.func,
  order: PropTypes.shape({
    client: PropTypes.objectOf(PropTypes.string),
    createdAt: PropTypes.number,
    destination: PropTypes.string,
    id: PropTypes.string,
    source: PropTypes.string
  }),
  offerId: PropTypes.string.isRequired,
  getOffers: PropTypes.func.isRequired
};

CancelOrderModal.defaultProps = {
  onCancel: () => {},
  order: {}
};

export default CancelOrderModal;
