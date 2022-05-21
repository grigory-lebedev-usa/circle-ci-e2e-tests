import { useEffect } from 'react';

import { useOffer } from '../../../api/hooks/useOffer';
import { useOrder } from '../../../api/hooks/useOrder';
import Refresh from '../../../shared/components/Refresh/Refresh';

import Order from './components/Order/Order';

import classes from './driver-orders.module.css';

function DriverOrders() {
  const { getOrder, orders } = useOrder();
  const { getOffer, offers } = useOffer();

  useEffect(() => {
    getOrder();
    getOffer();
  }, [getOffer, getOrder]);

  const handleRefresh = () => {
    getOrder();
    getOffer();
  };

  return (
    <div className={classes.container}>
      <div className={classes.block__title}>
        <h2 className={classes.title}>Orders</h2>
      </div>
      <div className={classes.line} />
      <div className={classes.driver__orders}>
        {orders.map((order) => (
          <Order
            key={String(order?.id)}
            order={order}
            offer={offers.find(({ orderId }) => orderId === order.id)}
          />
        ))}
      </div>
      <Refresh className={classes.refresh} onClick={handleRefresh} />
    </div>
  );
}

export default DriverOrders;
