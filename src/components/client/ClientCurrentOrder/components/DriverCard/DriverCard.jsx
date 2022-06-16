import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Card } from '@mui/material';

import { useDispatch } from 'react-redux';

import Button from '../../../../../shared/components/Button/Button';
import {
  BUTTON_VARIANTS,
  BUTTON_COLORS,
  BUTTON_SIZES
} from '../../../../../shared/components/Button/button.constants';

import { PRIVATE_ROUTES } from '../../../../../constants/app.constants';

import { ACTIVE_TRIP_GET, TRIP_CREATE } from '../../../../../actions/trips/trips.actions';

import ConfirmationDriverCard from './components/ConfirmationDriverCard/ConfirmationDriverCard';

import classes from './driver-card.module.css';
import ModalDriverCard from './components/ModalDriverCard/ModalDriverCard';
import RatingAndPrice from './components/RatingAndPrice/RatingAndPrice';

function DriverCard({ offer }) {
  const dispatch = useDispatch();
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [isOpenedConfirmation, setIsOpenedConfirmation] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsOpenedModal(true);
  };

  const closeModal = () => {
    setIsOpenedModal(false);
  };

  const openConfirmation = (e) => {
    e.stopPropagation();
    setIsOpenedConfirmation(true);
  };

  const closeConfirmation = () => {
    setIsOpenedConfirmation(false);
  };

  const handleSubmitOffer = async (id) => {
    closeModal();
    closeConfirmation();
    await dispatch(TRIP_CREATE({ offerId: id }));
    await dispatch(ACTIVE_TRIP_GET());
    navigate(PRIVATE_ROUTES.TRIP);
  };

  return (
    <Card>
      <ConfirmationDriverCard
        isOpened={isOpenedConfirmation}
        onCancel={closeConfirmation}
        onConfirm={() => handleSubmitOffer(offer.id)}
        text={`Are you sure you want to accept the offer from ${offer.driver.firstName} ${offer.driver.lastName}?`}
      />
      <ModalDriverCard
        isOpened={isOpenedModal}
        closeModal={closeModal}
        onClick={openConfirmation}
        offer={offer}
      />
      <div className={classes.card__container} role="button" tabIndex="0" onClick={openModal}>
        <img className={classes.img} src={offer.driver.car.photo} alt="Car" />
        <h3 className={classes.card__title_car}>
          {offer.driver.car.make} {offer.driver.car.model}
        </h3>
        <h3 className={classes.card__title_user}>
          {offer.driver.firstName} {offer.driver.lastName}
        </h3>
        <RatingAndPrice rating={offer.driver.rating} price={offer.price} />
        <Button
          color={BUTTON_COLORS.SUCCESS}
          variant={BUTTON_VARIANTS.CONTAINED}
          size={BUTTON_SIZES.EXTRA_SMALL}
          className={classes.block__button}
          onClick={openConfirmation}
        >
          Accept
        </Button>
      </div>
    </Card>
  );
}

DriverCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  offer: PropTypes.object.isRequired
};

export default DriverCard;
