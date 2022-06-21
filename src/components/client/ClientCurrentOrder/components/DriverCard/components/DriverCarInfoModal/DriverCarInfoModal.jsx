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

import RatingAndPrice from '../RatingAndPrice/RatingAndPrice';

import { OfferObjectPropType } from '../../../../../../../shared/prop-types';

import classes from './driver-car-info-modal.module.css';

function DriverCarInfoModal({ isOpened, closeModal, onClick, offer }) {
  return (
    <Modal isOpened={isOpened} closeModal={closeModal} size={MODAL_SIZE.LARGE}>
      <div className={classes.modal__content}>
        <div>
          <img className={classes.img} src={offer.driver.car.photo} alt="Car" />
          <RatingAndPrice
            rating={offer.driver.rating}
            price={offer.price}
            className={classes.block}
          />
        </div>

        <div className={classes.info__block}>
          <h3 className={classes.block__title}>Info</h3>
          <div className={classes.info__item}>
            <h4 className={classes.item__title}>Make:</h4>
            <p className={classes.item__text}>{offer.driver.car.make}</p>
          </div>
          <div className={classes.info__item}>
            <h4 className={classes.item__title}>Model:</h4>
            <p className={classes.item__text}>{offer.driver.car.model}</p>
          </div>
          <div className={classes.info__item}>
            <h4 className={classes.item__title}>Year:</h4>
            <p className={classes.item__text}>{offer.driver.car.year}</p>
          </div>
          <div className={classes.info__item}>
            <h4 className={classes.item__title}>Color:</h4>
            <p className={classes.item__text}>{offer.driver.car.color}</p>
          </div>
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
        </div>
      </div>
    </Modal>
  );
}

DriverCarInfoModal.propTypes = {
  isOpened: PropTypes.bool,
  closeModal: PropTypes.func,
  onClick: PropTypes.func,
  offer: OfferObjectPropType
};

DriverCarInfoModal.defaultProps = {
  isOpened: false,
  closeModal: () => {},
  onClick: () => {},
  offer: {}
};

export default DriverCarInfoModal;
