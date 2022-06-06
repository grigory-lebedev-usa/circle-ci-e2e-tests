import React from 'react';

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

import { ORDER_DELETE } from '../../../actions/orders/orders.action';

import classes from './client-current-order.module.css';

function ClientCurrentOrder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { source, destination, id } = useSelector((state) => state.orders);

  const handleCancelOrder = async () => {
    await dispatch(ORDER_DELETE(id));
    navigate(PRIVATE_ROUTES.HOME);
  };
  return (
    <div className={classes.container}>
      <div className={classes.block__description}>
        <h2 className={classes.description__title}>Current order</h2>
        <div className={classes.line} />
        <p className={classes.description__text}>{`${source} - ${destination}`}</p>
      </div>
      <div className={classes.wrapper__message}>
        <p className={classes.message}>
          No drivers found at this time. Refresh the list to see driver‘s offers.
        </p>
      </div>
      <Button
        size={BUTTON_SIZES.BIG}
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
