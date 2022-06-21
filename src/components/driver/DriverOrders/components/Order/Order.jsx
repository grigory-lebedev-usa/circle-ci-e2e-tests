import PropTypes from 'prop-types';

import classes from './order.module.css';

function Order({ order }) {
  return (
    <div className={classes.driver__order}>
      <h4 className={classes.order__title}>Who:</h4>
      <p className={classes.order__text}>{`${order.client.firstName} ${order.client.lastName}`}</p>
      <h4 className={classes.order__title}>From:</h4>
      <p className={classes.order__text}>{order.source}</p>
      <h4 className={classes.order__title}>To:</h4>
      <p className={classes.order__text}>{order.destination}</p>
      {/* 
        TODO: next task 
      <Button
        color={id ? BUTTON_COLORS.ERROR : BUTTON_COLORS.SUCCESS}
        size={BUTTON_SIZES.SMALL}
        variant={BUTTON_VARIANTS.CONTAINED}
        className={classes.button__offer}
      >
        {id ? 'Cancel' : 'Offer'}
      </Button> */}
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.shape({
    client: PropTypes.objectOf(PropTypes.string),
    createdAt: PropTypes.number,
    destination: PropTypes.string,
    id: PropTypes.string,
    source: PropTypes.string
  }),
  offer: PropTypes.shape({
    client: PropTypes.objectOf(PropTypes.string),
    createdAt: PropTypes.number,
    id: PropTypes.string
  })
};

Order.defaultProps = {
  order: {},
  offer: {}
};

export default Order;
