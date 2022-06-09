import { useState } from 'react';

import { Card } from '@mui/material';

import Button from '../../../../../shared/components/Button/Button';
import {
  BUTTON_VARIANTS,
  BUTTON_COLORS,
  BUTTON_SIZES
} from '../../../../../shared/components/Button/button.constants';

import classes from './driver-card.module.css';
import ModalDriverCard from './components/ModalDriverCard/ModalDriverCard';
import RatingAndPrice from './components/RatingAndPrice/RatingAndPrice';

function DriverCard() {
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const openModal = () => {
    setIsOpenedModal(true);
  };

  const closeModal = () => {
    setIsOpenedModal(false);
  };
  return (
    <Card>
      <ModalDriverCard isOpened={isOpenedModal} closeModal={closeModal} />
      <div className={classes.card__container}>
        <div className={classes.img} />
        <h3 className={classes.card__title_car}>Car Title</h3>
        <h3 className={classes.card__title_user}>User Title</h3>
        <RatingAndPrice rating="4.8" price="5.3" />
        <Button
          color={BUTTON_COLORS.SUCCESS}
          variant={BUTTON_VARIANTS.CONTAINED}
          size={BUTTON_SIZES.EXTRA_SMALL}
          className={classes.block__button}
          onClick={openModal}
        >
          Accept
        </Button>
      </div>
    </Card>
  );
}

export default DriverCard;
