import PropTypes from 'prop-types';

import Button from '../../../../../../../shared/components/Button/Button';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS
} from '../../../../../../../shared/components/Button/button.constants';

import { useModal } from '../../../../../../../shared/hooks/useModal';
import DriverCarInfoModal from '../../../../../../DriverCarInfoModal/DriverCarInfoModal';

import classes from './driver-car.module.css';

function DriverCar({ info }) {
  const { isModalOpened, openModal, closeModal } = useModal(false);
  return (
    <div className={classes.container}>
      <DriverCarInfoModal
        isOpened={isModalOpened}
        closeModal={closeModal}
        info={info}
        hasRatingAndPrice={false}
        hasButton={false}
      />
      {info.driver.firstName} {info.driver.lastName}
      <Button
        variant={BUTTON_VARIANTS.CONTAINED}
        size={BUTTON_SIZES.EXTRA_SMALL}
        type={BUTTON_TYPES.BUTTON}
        color={BUTTON_COLORS.SECONDARY}
        onClick={openModal}
        className={classes.car__button}
      >
        Car
      </Button>
    </div>
  );
}

DriverCar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  info: PropTypes.object.isRequired
};

export default DriverCar;
