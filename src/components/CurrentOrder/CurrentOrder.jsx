import React from 'react';

import Button from '../../shared/components/Button/Button';
import Refresh from '../../shared/components/Refresh/Refresh';
import { buttonColors, buttonSizes } from '../../shared/components/Button/button.constants';

import { useOrder } from '../../api/hooks/useOrder';

import classes from './current-order.module.css';

function CurrentOrder() {
  const { deleteOrder } = useOrder();

  const handleCancelOrder = async () => {
    await deleteOrder('');
  };
  return (
    <div className={classes.container}>
      <div className={classes.block__description}>
        <h2 className={classes.description__title}>Current order</h2>
        <div className={classes.line} />
        <p className={classes.description__text}>source - destination</p>
      </div>
      <div className={classes.wrapper__message}>
        <p className={classes.message}>
          No drivers found at this time. Refresh the list to see driver‘s offers.
        </p>
      </div>
      <Button
        size={buttonSizes.big}
        color={buttonColors.primary}
        onClick={handleCancelOrder}
        className={classes.block__button}>
        Cancel order
      </Button>
      <Refresh className={classes.refresh} />
    </div>
  );
}

export default CurrentOrder;
