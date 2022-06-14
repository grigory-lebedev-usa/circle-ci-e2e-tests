import { useState } from 'react';

import PropTypes from 'prop-types';

import Button from '../../../../../shared/components/Button/Button';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS
} from '../../../../../shared/components/Button/button.constants';

import { useOffers } from '../../../../../api/hooks/useOffers/useOffers';

import classes from './order.module.css';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';
import OrderModal from './components/OrderModal/OrderModal';

function Order({ order, offer: { id }, getOffers }) {
  const { deleteOffer } = useOffers();
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [isOpenedConfirmation, setIsOpenedConfirmation] = useState(false);

  const closeModal = () => {
    setIsOpenedModal(false);
  };

  const openModal = () => {
    setIsOpenedModal(true);
  };

  const openConfirmation = () => {
    setIsOpenedConfirmation(true);
  };

  const closeConfirmation = () => {
    setIsOpenedConfirmation(false);
  };

  const handleOfferDelete = async () => {
    closeConfirmation();
    await deleteOffer(id);
    await getOffers();
  };

  return (
    <div className={classes.driver__order}>
      <OrderConfirmation
        isOpened={isOpenedConfirmation}
        onCancel={closeConfirmation}
        onConfirm={handleOfferDelete}
        text={`Are you sure you want to cancel ${order.source} - ${order.destination} offer?`}
      />
      <OrderModal
        isOpened={isOpenedModal}
        closeModal={closeModal}
        order={order}
        getOffers={getOffers}
      />
      <h4 className={classes.order__title}>Who:</h4>
      <p className={classes.order__text}>{`${order.client.firstName} ${order.client.lastName}`}</p>
      <h4 className={classes.order__title}>From:</h4>
      <p className={classes.order__text}>{order.source}</p>
      <h4 className={classes.order__title}>To:</h4>
      <p className={classes.order__text}>{order.destination}</p>
      <Button
        color={id ? BUTTON_COLORS.ERROR : BUTTON_COLORS.SUCCESS}
        size={BUTTON_SIZES.SMALL}
        variant={BUTTON_VARIANTS.CONTAINED}
        className={classes.button__offer}
        onClick={id ? openConfirmation : openModal}
      >
        {id ? 'Cancel' : 'Offer'}
      </Button>
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.shape({
    client: PropTypes.objectOf(PropTypes.string),
    createdAt: PropTypes.number,
    destination: PropTypes.string,
    id: PropTypes.string,
    source: PropTypes.string
  }),
  offer: PropTypes.shape({
    client: PropTypes.objectOf(PropTypes.string),
    createdAt: PropTypes.number,
    id: PropTypes.string
  }),
  getOffers: PropTypes.func.isRequired
};

Order.defaultProps = {
  order: {},
  offer: {}
};

export default Order;
