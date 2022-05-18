import { useOrder } from '../../../api/hooks/useOrder';
import Refresh from '../../../shared/components/Refresh/Refresh';
import Button from '../../../shared/components/Button/Button';

import { buttonColors, buttonSizes } from '../../../shared/components/Button/button.constants';

import classes from './driver-orders.module.css';

function DriverOrders() {
  const { order } = useOrder();
  console.log(order);
  return (
    <div className={classes.container}>
      <div className={classes.block__title}>
        <h2 className={classes.title}>Orders</h2>
      </div>
      <div className={classes.line} />
      <div className={classes.driver__orders}>
        <div className={classes.driver__item}>
          <h4 className={classes.item__title}>Who:</h4>
          <p className={classes.item__text}>Vasya Pupkin</p>
          <h4 className={classes.item__title}>From:</h4>
          <p className={classes.item__text}>Chkalova street, 28/3</p>
          <h4 className={classes.item__title}>To:</h4>
          <p className={classes.item__text}>Lenina 53</p>
          <Button color={buttonColors.accept} size={buttonSizes.small} className={classes.button}>
            Offer
          </Button>
        </div>
      </div>
      <Refresh className={classes.refresh} />
    </div>
  );
}

export default DriverOrders;
