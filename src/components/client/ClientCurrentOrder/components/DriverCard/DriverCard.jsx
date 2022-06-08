import { Card } from '@mui/material';

import Button from '../../../../../shared/components/Button/Button';
import {
  BUTTON_VARIANTS,
  BUTTON_COLORS,
  BUTTON_SIZES
} from '../../../../../shared/components/Button/button.constants';

import classes from './driver-card.module.css';

function DriverCard() {
  return (
    <Card>
      <div className={classes.card__container}>
        <div className={classes.img} />
        <h3 className={classes.card__title_car}>Car Title</h3>
        <h3 className={classes.card__title_user}>User Title</h3>
        <div className={classes.card__information}>
          <div className={classes.block__rating}>
            <p className={classes.rating__text}>4.8</p>
            <span>star</span>
          </div>
          <div className={classes.line} />
          <div className={classes.block__price}>
            <p className={classes.price__text}>$5.3</p>
          </div>
        </div>
        <Button
          color={BUTTON_COLORS.SUCCESS}
          variant={BUTTON_VARIANTS.CONTAINED}
          size={BUTTON_SIZES.EXTRA_SMALL}
          className={classes.block__button}
        >
          Accept
        </Button>
      </div>
    </Card>
  );
}

export default DriverCard;
