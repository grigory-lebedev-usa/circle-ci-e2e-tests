import { useState } from 'react';

import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import Button from '../../../../../../../shared/components/Button/Button';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS
} from '../../../../../../../shared/components/Button/button.constants';

import Modal from '../../../../../../../shared/components/Modal/Modal';
import { MODAL_SIZE } from '../../../../../../../shared/components/Modal/modal.constants';
import { Users } from '../../../../../AdminUsers/admin-users.types';

import { Report } from '../../../../../AdminReports/admin-reports.types';

import classes from './admin-block-modal.module.css';
import BlockPermanently from './components/BlockPermanently/BlockPermanently';

type AdminBlockModalProps = {
  isOpened: boolean;
  closeModal: () => void;
  title: string;
  userInfo: Users;
  getUsers: () => void;
};

function AdminBlockModal({
  isOpened,
  closeModal,
  title,
  userInfo,
  getUsers
}: AdminBlockModalProps) {
  const [isBlockUntil, setIsBlockUntil] = useState(false);
  const [value, setValue] = useState(null);

  const handleOpenBlockUntil = () => {
    setIsBlockUntil(true);
  };

  const handleCloseBlockUntil = () => {
    setIsBlockUntil(false);
  };

  return (
    <Modal isOpened={isOpened} closeModal={closeModal} size={MODAL_SIZE.LARGE}>
      <div className={classes.modal__content}>
        <h2 className={classes.modal__title}>{title}</h2>
        {isBlockUntil || (
          <div className={classes.modal__actions}>
            <BlockPermanently
              getUsers={getUsers}
              closeAdminBlockModal={closeModal}
              userInfo={userInfo}
            />
            <Button
              variant={BUTTON_VARIANTS.CONTAINED}
              size={BUTTON_SIZES.MEDIUM_LONG}
              color={BUTTON_COLORS.ERROR}
              className={classes.button}
              onClick={handleOpenBlockUntil}
            >
              Block until
            </Button>
          </div>
        )}
        {isBlockUntil && (
          <>
            <div className={classes.modal__date_picker_until}>
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
                onClick={handleCloseBlockUntil}
              >
                Back
              </Button>
              <Button
                variant={BUTTON_VARIANTS.CONTAINED}
                size={BUTTON_SIZES.MEDIUM_LONG}
                color={BUTTON_COLORS.SUCCESS}
                className={classes.button_until}
              >
                Accept
              </Button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}

export default AdminBlockModal;
