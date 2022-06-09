import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/Button/Button';
import Refresh from '../../../shared/components/Refresh/Refresh';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS
} from '../../../shared/components/Button/button.constants';
import { PRIVATE_ROUTES } from '../../../constants/app.constants';
import { ORDERS_GET, ORDER_DELETE } from '../../../actions/orders/orders.actions';
import { USER_GET } from '../../../actions/user/user.actions';

import { OFFERS_GET } from '../../../actions/offers/offers.action';

import classes from './client-current-order.module.css';
import NotFoundDriver from './components/NotFoundDrivers/NotFoundDriver';
import DriverCard from './components/DriverCard/DriverCard';
import ConfirmationCancelOrder from './components/ConfirmationCancelOrder/ConfirmationCancelOrder';

function ClientCurrentOrder() {
  const [isOpenedConfirmation, setIsOpenedConfirmation] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    userData: { currentOrder }
  } = useSelector((state) => state.user);
  const { source, destination, id } = useSelector((state) => state.orders);
  const offers = useSelector((state) => state.offers);

  useEffect(() => {
    if (!currentOrder) {
      navigate(PRIVATE_ROUTES.HOME);
    } else {
      dispatch(ORDERS_GET());
      dispatch(OFFERS_GET(currentOrder));
    }
  }, [currentOrder, dispatch, navigate]);

  const openConfirmation = () => {
    setIsOpenedConfirmation(true);
  };

  const closeConfirmation = () => {
    setIsOpenedConfirmation(false);
  };

  const handleCancelOrder = async () => {
    closeConfirmation();
    await dispatch(ORDER_DELETE(id));
    await dispatch(USER_GET());
    navigate(PRIVATE_ROUTES.HOME);
  };

  return (
    <div className={classes.container}>
      <ConfirmationCancelOrder
        isOpened={isOpenedConfirmation}
        onCancel={closeConfirmation}
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
        onClick={openConfirmation}
        variant={BUTTON_VARIANTS.CONTAINED}
        className={classes.block__button}
      >
        Cancel order
      </Button>
      <Refresh className={classes.refresh} />
    </div>
  );
}

export default ClientCurrentOrder;
