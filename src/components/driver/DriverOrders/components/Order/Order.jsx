import { OfferObjectPropType, OrderObjectPropType } from '../../../../../shared/prop-types';

import classes from './order.module.css';

function Order({ order, offer }) {
  return (
    <div className={classes.driver__order}>
      <h4 className={classes.order__title}>Who:</h4>
      <p className={classes.order__text}>{`${order.client.firstName} ${order.client.lastName}`}</p>
      <h4 className={classes.order__title}>From:</h4>
      <p className={classes.order__text}>{order.source}</p>
      <h4 className={classes.order__title}>To:</h4>
      <p className={classes.order__text}>{order.destination}</p>
    </div>
  );
}

Order.propTypes = {
  order: OrderObjectPropType,
  offer: OfferObjectPropType
};

Order.defaultProps = {
  order: {},
  offer: {}
};

export default Order;
