import { useState } from 'react';

import Button from '../../../../../shared/components/Button/Button';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS
} from '../../../../../shared/components/Button/button.constants';
import RateDriverModal from '../RateDriverModal/RateDriverModal';

import classes from './client-active-trip-actions.module.css';

function ClientActiveTripActions() {
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const openModal = () => {
    setIsOpenedModal(true);
  };

  const closeModal = () => {
    setIsOpenedModal(false);
  };
  return (
    <>
      <RateDriverModal isOpened={isOpenedModal} closeModal={closeModal} />
      <Button
        variant={BUTTON_VARIANTS.CONTAINED}
        color={BUTTON_COLORS.SECONDARY}
        type={BUTTON_TYPES.BUTTON}
        size={BUTTON_SIZES.MEDIUM_LONG}
        className={classes.treep__button}
        onClick={openModal}
      >
        Finish treep
      </Button>
    </>
  );
}

export default ClientActiveTripActions;
