import PropTypes from 'prop-types';

import { useOffers } from '../../../../../../../api/hooks/useOffers/useOffers';
import { REQUEST_STATUS } from '../../../../../../../constants/app.constants';

import ConfirmationModal from '../../../../../../../shared/components/ConfirmationModal/ConfirmationModal';
import ProgressSpinner from '../../../../../../../shared/components/ProgressSpinner/ProgressSpinner';
import { OrderObjectPropType } from '../../../../../../../shared/prop-types';

function CancelOfferConfirmationModal({ isOpened, onCancel, order, offerId, getOffers }) {
  const { deleteOffer, status } = useOffers();

  const handleOfferDelete = async () => {
    onCancel();
    await deleteOffer(offerId);
    await getOffers();
  };

  if (status === REQUEST_STATUS.LOADING) {
    return <ProgressSpinner isShow />;
  }

  return (
    <ConfirmationModal
      isOpened={isOpened}
      onCancel={onCancel}
      onConfirm={handleOfferDelete}
      text={`Are you sure you want to cancel ${order.source} - ${order.destination} offer?`}
    />
  );
}

CancelOfferConfirmationModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onCancel: PropTypes.func,
  order: OrderObjectPropType,
  offerId: PropTypes.string.isRequired,
  getOffers: PropTypes.func.isRequired
};

CancelOfferConfirmationModal.defaultProps = {
  onCancel: () => {},
  order: {}
};

export default CancelOfferConfirmationModal;
