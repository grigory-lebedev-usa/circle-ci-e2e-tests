import { useState } from 'react';

import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import Modal from '../../../../../../../../../../../shared/components/Modal/Modal';

import Button from '../../../../../../../../../../../shared/components/Button/Button';

import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS
} from '../../../../../../../../../../../shared/components/Button/button.constants';

import classes from './block-until-modal.module.css';

type BlockUntilModalProps = {
  isOpened: boolean;
  closeModal: () => void;
  title: string;
};

function BlockUntilModal({ isOpened, closeModal, title }: BlockUntilModalProps) {
  const [value, setValue] = useState(null);

  return (
    <Modal isOpened={isOpened} closeModal={closeModal}>
      <div className={classes.modal__content}>
        <h2 className={classes.modal__title}>{title}</h2>
        <div className={classes.modal__date_picker}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Block until"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField color="form" {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className={classes.modal__actions}>
          <Button
            variant={BUTTON_VARIANTS.CONTAINED}
            size={BUTTON_SIZES.MEDIUM_LONG}
            color={BUTTON_COLORS.ERROR}
          >
            Back
          </Button>
          <Button
            variant={BUTTON_VARIANTS.CONTAINED}
            size={BUTTON_SIZES.MEDIUM_LONG}
            color={BUTTON_COLORS.SUCCESS}
            className={classes.button}
          >
            Accept
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default BlockUntilModal;
