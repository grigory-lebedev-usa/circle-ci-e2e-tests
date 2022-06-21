import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/Button/Button';
import Refresh from '../../../shared/components/Refresh/Refresh';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS
} from '../../../shared/components/Button/button.constants';
import { PRIVATE_ROUTES, REQUEST_STATUS } from '../../../constants/app.constants';
import { USER_GET } from '../../../actions/user/user.actions';

import { useOffers } from '../../../api/hooks/useOffers/useOffers';

import { useOrders } from '../../../api/hooks/useOrders/useOrders';

import ProgressSpinner from '../../../shared/components/ProgressSpinner/ProgressSpinner';

import CancelOrderConfirmationModal from '../../../shared/components/ConfirmationModal/ConfirmationModal';

import { useModal } from '../../../shared/hooks/useModal';

import classes from './client-current-order.module.css';
import NotFoundDriver from './components/NotFoundDrivers/NotFoundDriver';
import DriverCard from './components/DriverCard/DriverCard';

function ClientCurrentOrder() {
  const {
    isModalOpened: isConfirmationModalOpened,
    openModal: openConfirmationModal,
    closeModal: closeConfirmationModal
  } = useModal();
  const { offers, getOffers, status: offerRequestStatus } = useOffers();
  const {
    orders: { source, destination, id },
    status: orderRequestStatus,
    getOrders,
    deleteOrder
  } = useOrders();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    userData: { currentOrder }
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (!currentOrder) {
      navigate(PRIVATE_ROUTES.HOME);
    } else {
      getOrders();
      getOffers(currentOrder);
    }
  }, [currentOrder, getOffers, getOrders, navigate]);

  if (
    offerRequestStatus === REQUEST_STATUS.LOADING &&
    orderRequestStatus === REQUEST_STATUS.LOADING
  ) {
    return <ProgressSpinner isShow />;
  }

  const handleCancelOrder = async () => {
    closeConfirmationModal();
    await deleteOrder(id);
    await dispatch(USER_GET());
    navigate(PRIVATE_ROUTES.HOME);
  };

  const handleRefresh = () => {
    getOrders();
    getOffers(currentOrder);
  };

  return (
    <div className={classes.container}>
      <CancelOrderConfirmationModal
        isOpened={isConfirmationModalOpened}
        onCancel={closeConfirmationModal}
        onConfirm={handleCancelOrder}
        text="Are you sure you want to cancel the order?"
      />
      <div className={classes.block__description}>
        <h2 className={classes.description__title}>Current order</h2>
        <div className={classes.line} />
        <p className={classes.description__text}>{`${source} - ${destination}`}</p>
      </div>
      <div className={classes.card__driver__container}>
        {offers.map((offer) => (
          <DriverCard key={offer.id} offer={offer} />
        ))}
      </div>
      {offers.length === 0 ? <NotFoundDriver /> : null}
      <Button
        size={BUTTON_SIZES.LARGE}
        color={BUTTON_COLORS.PRIMARY}
        onClick={openConfirmationModal}
        variant={BUTTON_VARIANTS.CONTAINED}
        className={classes.block__button}
      >
        Cancel order
      </Button>
      <Refresh className={classes.refresh} onClick={handleRefresh} />
    </div>
  );
}

export default ClientCurrentOrder;
