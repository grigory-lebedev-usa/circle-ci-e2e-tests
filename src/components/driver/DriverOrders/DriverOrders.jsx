import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { OFFERS_GET } from '../../../actions/offers/offers.action';
import { useOrders } from '../../../api/hooks/useOrders/useOrders';
import { REQUEST_STATUS } from '../../../constants/app.constants';
import ProgressSpinner from '../../../shared/components/ProgressSpinner/ProgressSpinner';
import Refresh from '../../../shared/components/Refresh/Refresh';

import Order from './components/Order/Order';
import classes from './driver-orders.module.css';

function DriverOrders() {
  const { getOrders, orders, status } = useOrders();
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers);

  useEffect(() => {
    dispatch(OFFERS_GET());
    getOrders();
  }, [dispatch, getOrders]);

  if (status === REQUEST_STATUS.LOADING) {
    return <ProgressSpinner isShow />;
  }

  const handleRefresh = () => {
    dispatch(OFFERS_GET());
    getOrders();
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
            key={order?.id}
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
