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
import { PRIVATE_ROUTES } from '../../../constants/app.constants';
import { ORDERS_GET, ORDER_DELETE } from '../../../actions/orders/orders.actions';
import { USER_GET } from '../../../actions/user/user.actions';

import { OFFERS_GET } from '../../../actions/offers/offers.action';

import classes from './client-current-order.module.css';
import CardDriver from './components/DriverCard/DriverCard';

function ClientCurrentOrder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    userData: { currentOrder }
  } = useSelector((state) => state.user);
  const { source, destination, id } = useSelector((state) => state.orders);

  useEffect(() => {
    if (!currentOrder) {
      navigate(PRIVATE_ROUTES.HOME);
    } else {
      dispatch(ORDERS_GET());
      dispatch(OFFERS_GET(currentOrder));
    }
  }, [currentOrder, dispatch, navigate]);

  const handleCancelOrder = async () => {
    await dispatch(ORDER_DELETE(id));
    await dispatch(USER_GET());
    navigate(PRIVATE_ROUTES.HOME);
  };

  return (
    <div className={classes.container}>
      <div className={classes.block__description}>
        <h2 className={classes.description__title}>Current order</h2>
        <div className={classes.line} />
        <p className={classes.description__text}>{`${source} - ${destination}`}</p>
      </div>
      <CardDriver />
      <div className={classes.wrapper__message}>
        <p className={classes.message}>
          No drivers found at this time. Refresh the list to see driver‘s offers.
        </p>
      </div>
      <Button
        size={BUTTON_SIZES.LARGE}
        color={BUTTON_COLORS.PRIMARY}
        onClick={handleCancelOrder}
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
