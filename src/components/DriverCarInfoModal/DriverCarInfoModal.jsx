import PropTypes from 'prop-types';

import Modal from '../../shared/components/Modal/Modal';
import { MODAL_SIZE } from '../../shared/components/Modal/modal.constants';
import Button from '../../shared/components/Button/Button';

import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_COLORS
} from '../../shared/components/Button/button.constants';

import RatingAndPrice from '../client/ClientCurrentOrder/components/DriverCard/components/RatingAndPrice/RatingAndPrice';

import { CarObjectPropType, OfferObjectPropType } from '../../shared/prop-types';

import { RATING_AND_PRICE_SIZES } from '../client/ClientCurrentOrder/components/DriverCard/components/RatingAndPrice/rating-and-price.constants';

import classes from './driver-car-info-modal.module.css';

function DriverCarInfoModal({
  isOpened,
  closeModal,
  onClick,
  info,
  car,
  hasRatingAndPrice,
  hasAcceptButton
}) {
  return (
    <Modal isOpened={isOpened} closeModal={closeModal} size={MODAL_SIZE.LARGE}>
      <div className={classes.modal__content}>
        <div>
          <img className={classes.img} src={car.photo} alt="Car" />
          {hasRatingAndPrice && (
            <RatingAndPrice
              rating={info.driver.rating}
              price={info.price}
              className={classes.block}
              size={RATING_AND_PRICE_SIZES.MEDIUM}
            />
          )}
        </div>
        <div className={classes.info__block}>
          <h3 className={classes.block__title}>Info</h3>
          <div className={classes.info__item}>
            <h4 className={classes.item__title}>Make:</h4>
            <p className={classes.item__text}>{car.make}</p>
          </div>
          <div className={classes.info__item}>
            <h4 className={classes.item__title}>Model:</h4>
            <p className={classes.item__text}>{car.model}</p>
          </div>
          <div className={classes.info__item}>
            <h4 className={classes.item__title}>Year:</h4>
            <p className={classes.item__text}>{car.year}</p>
          </div>
          <div className={classes.info__item}>
            <h4 className={classes.item__title}>Color:</h4>
            <p className={classes.item__text}>{car.color}</p>
          </div>
          {hasAcceptButton && (
            <Button
              size={BUTTON_SIZES.MEDIUM}
              color={BUTTON_COLORS.SUCCESS}
              variant={BUTTON_VARIANTS.CONTAINED}
              type={BUTTON_TYPES.BUTTON}
              className={classes.block__button}
              onClick={onClick}
            >
              Accept
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}

DriverCarInfoModal.propTypes = {
  isOpened: PropTypes.bool,
  closeModal: PropTypes.func,
  onClick: PropTypes.func,
  info: OfferObjectPropType,
  car: CarObjectPropType,
  hasRatingAndPrice: PropTypes.bool,
  hasAcceptButton: PropTypes.bool
};

DriverCarInfoModal.defaultProps = {
  isOpened: false,
  closeModal: () => {},
  onClick: () => {},
  info: {},
  car: {},
  hasRatingAndPrice: true,
  hasAcceptButton: true
};

export default DriverCarInfoModal;
