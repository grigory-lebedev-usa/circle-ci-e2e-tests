import classes from './rating-and-price.module.css';

export const RATING_AND_PRICE_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium'
};

export const ratingAndPriceSizesClasses = {
  [RATING_AND_PRICE_SIZES.SMALL]: classes.small,
  [RATING_AND_PRICE_SIZES.MEDIUM]: classes.medium
};
