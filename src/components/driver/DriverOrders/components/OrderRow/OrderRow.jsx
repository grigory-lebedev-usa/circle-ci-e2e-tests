import PropTypes from 'prop-types';

import { OrderObjectPropType } from '../../../../../shared/prop-types';

import classes from './order-row.module.css';

function OrderRow({ order, offerId, renderButton }) {
  return (
    <div className={classes.driver__order}>
      <h4 className={classes.order__title}>Who:</h4>
      <p className={classes.order__text}>{`${order.client.firstName} ${order.client.lastName}`}</p>
      <h4 className={classes.order__title}>From:</h4>
      <p className={classes.order__text}>{order.source}</p>
      <h4 className={classes.order__title}>To:</h4>
      <p className={classes.order__text}>{order.destination}</p>
      {renderButton(order, offerId)}
    </div>
  );
}

OrderRow.propTypes = {
  order: OrderObjectPropType,
  offerId: PropTypes.string,
  renderButton: PropTypes.func.isRequired
};

OrderRow.defaultProps = {
  order: {},
  offerId: null
};

export default OrderRow;
