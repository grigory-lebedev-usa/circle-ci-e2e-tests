import { Rating } from '@mui/material';
import PropTypes from 'prop-types';

import classes from './rating-and-price.module.css';

function RatingAndPrice({ rating, price, className }) {
  return (
    <div className={`${classes.block} ${className}`}>
      <div className={classes.block__rating}>
        <p className={classes.rating__text}>{rating || '-'}</p>
        <div>
          <Rating max={1} defaultValue={1} readOnly sx={{ marginLeft: '5px' }} />
        </div>
      </div>
      <div className={classes.line} />
      <div className={classes.block__price}>
        <p className={classes.price__text}>${price}</p>
      </div>
    </div>
  );
}

RatingAndPrice.propTypes = {
  rating: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  className: PropTypes.string
};

RatingAndPrice.defaultProps = {
  className: ''
};

export default RatingAndPrice;
