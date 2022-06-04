import { useState } from 'react';

import { PRIVATE_ROUTES } from '../../../../../constants/app.constants';
import Button from '../../../../../shared/components/Button/Button';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS
} from '../../../../../shared/components/Button/button.constants';
import Confirmation from '../../../../../shared/components/Confirmation/Confirmation';

import Link from '../../../../../shared/components/Link/Link';
import Modal from '../../../../../shared/components/Modal/Modal';

import classes from './client-actions.module.css';

function ClientActions() {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);

  const openModal = () => {
    setIsOpened(true);
  };

  const closeModal = () => {
    setIsOpened(false);
  };

  const openConfirmation = () => {
    setIsOpenConfirmation(true);
  };

  const closeConfirmation = () => {
    setIsOpenConfirmation(false);
  };
  return (
    <div className={classes.block__buttons}>
      <Modal isOpened={isOpened} closeModal={closeModal}>
        <div>
          <Confirmation isOpened={isOpenConfirmation}>
            <h1 style={{ textAlign: 'center' }}>
              Are you sure you want to accept the offer from Ivan Ivanov?
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                size={BUTTON_SIZES.MEDIUM}
                color={BUTTON_COLORS.ERROR}
                variant={BUTTON_VARIANTS.CONTAINED}
                className={classes.button}
                onClick={closeConfirmation}
              >
                Cancel
              </Button>
              <Button
                size={BUTTON_SIZES.MEDIUM}
                color={BUTTON_COLORS.SUCCESS}
                variant={BUTTON_VARIANTS.CONTAINED}
              >
                Ok
              </Button>
            </div>
          </Confirmation>
          <h1 style={{ textAlign: 'center' }}>You open view history!</h1>
          <Button
            size={BUTTON_SIZES.BIG}
            color={BUTTON_COLORS.PRIMARY}
            variant={BUTTON_VARIANTS.CONTAINED}
            onClick={openConfirmation}
          >
            Open confirmation
          </Button>
        </div>
      </Modal>
      <Link to={PRIVATE_ROUTES.ORDER}>
        <Button
          size={BUTTON_SIZES.BIG}
          color={BUTTON_COLORS.PRIMARY}
          variant={BUTTON_VARIANTS.CONTAINED}
          className={classes.button}
        >
          Create order
        </Button>
      </Link>
      <Button
        size={BUTTON_SIZES.BIG}
        color={BUTTON_COLORS.PRIMARY}
        variant={BUTTON_VARIANTS.CONTAINED}
        onClick={openModal}
      >
        View history
      </Button>
    </div>
  );
}

export default ClientActions;
