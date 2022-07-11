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

function DriverCar({ info, hasDriverName }) {
  const { isModalOpened, openModal, closeModal } = useModal(false);
  return (
    <div className={`${hasDriverName ? classes.container : null}`}>
      <DriverCarInfoModal
        isOpened={isModalOpened}
        closeModal={closeModal}
        info={info}
        hasRatingAndPrice={false}
        hasAcceptButton={false}
      />
      {hasDriverName ? `${info.driver.firstName} ${info.driver.lastName}` : null}
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
  info: PropTypes.object.isRequired,
  hasDriverName: PropTypes.bool
};

DriverCar.defaultProps = {
  hasDriverName: false
};

export default DriverCar;
