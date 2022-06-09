import { useState } from 'react';

import PropTypes from 'prop-types';

import Modal from '../../../../../../../shared/components/Modal/Modal';
import { MODAL_SIZE } from '../../../../../../../shared/components/Modal/modal.constants';
import Button from '../../../../../../../shared/components/Button/Button';

import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_COLORS
} from '../../../../../../../shared/components/Button/button.constants';

import ConfirmationDriverCard from '../ConfirmationDriverCard/ConfirmationDriverCard';

import RatingAndPrice from '../RatingAndPrice/RatingAndPrice';

import classes from './modal-driver-card.module.css';

function ModalDriverCard({ isOpened, closeModal }) {
  const [isOpenedConfirmation, setIsOpenedConfirmation] = useState(false);

  const openConfirmation = () => {
    setIsOpenedConfirmation(true);
  };

  const closeConfirmation = () => {
    setIsOpenedConfirmation(false);
  };
  return (
    <>
      <ConfirmationDriverCard
        isOpened={isOpenedConfirmation}
        onCancel={closeConfirmation}
        text="Are you sure you want to accept the offer from Ivan Ivanov?"
      />
      <Modal isOpened={isOpened} closeModal={closeModal} size={MODAL_SIZE.LARGE}>
        <div className={classes.modal__content}>
          <div>
            <div className={classes.img} />
            <RatingAndPrice rating="4.8" price="5.3" className={classes.block} />
          </div>

          <div className={classes.info__block}>
            <h3 className={classes.block__title}>Info</h3>
            <div className={classes.info__item}>
              <h4 className={classes.item__title}>Make:</h4>
              <p className={classes.item__text}>Chevrolet</p>
            </div>
            <div className={classes.info__item}>
              <h4 className={classes.item__title}>Model:</h4>
              <p className={classes.item__text}>Camaro</p>
            </div>
            <div className={classes.info__item}>
              <h4 className={classes.item__title}>Year:</h4>
              <p className={classes.item__text}>2020</p>
            </div>
            <div className={classes.info__item}>
              <h4 className={classes.item__title}>Color:</h4>
              <p className={classes.item__text}>Yellow</p>
            </div>
            <Button
              size={BUTTON_SIZES.MEDIUM}
              color={BUTTON_COLORS.SUCCESS}
              variant={BUTTON_VARIANTS.CONTAINED}
              type={BUTTON_TYPES.BUTTON}
              className={classes.block__button}
              onClick={openConfirmation}
            >
              Accept
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

ModalDriverCard.propTypes = {
  isOpened: PropTypes.bool,
  closeModal: PropTypes.func
};

ModalDriverCard.defaultProps = {
  isOpened: false,
  closeModal: () => {}
};

export default ModalDriverCard;
