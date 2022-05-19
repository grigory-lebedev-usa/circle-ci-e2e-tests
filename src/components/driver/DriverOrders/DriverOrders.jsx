import { useOrder } from '../../../api/hooks/useOrder';
import Refresh from '../../../shared/components/Refresh/Refresh';

import Order from './components/Order/Order';

import classes from './driver-orders.module.css';

function DriverOrders() {
  const { orders } = useOrder();
  return (
    <div className={classes.container}>
      <div className={classes.block__title}>
        <h2 className={classes.title}>Orders</h2>
      </div>
      <div className={classes.line} />
      <div className={classes.driver__orders}>
        {orders.map((order) => (
          <Order key={String(order?.id)} order={order} />
        ))}
      </div>
      <Refresh className={classes.refresh} />
    </div>
  );
}

export default DriverOrders;
