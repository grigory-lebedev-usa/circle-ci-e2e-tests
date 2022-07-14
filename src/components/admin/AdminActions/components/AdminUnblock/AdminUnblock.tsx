import React from 'react';

import Button from '../../../../../shared/components/Button/Button';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS
} from '../../../../../shared/components/Button/button.constants';
import ConfirmationModal from '../../../../../shared/components/ConfirmationModal/ConfirmationModal';

import { useModal } from '../../../../../shared/hooks/useModal';
import { Users } from '../../../AdminUsers/admin-users.types';

type AdminUnblockProps = {
  userInfo: Users;
};

function AdminUnblock({ userInfo }: AdminUnblockProps) {
  const { isModalOpened, openModal, closeModal } = useModal();
  return (
    <>
      <ConfirmationModal isOpened={isModalOpened} onCancel={closeModal} text="Blocked" />
      <Button
        variant={BUTTON_VARIANTS.CONTAINED}
        size={BUTTON_SIZES.EXTRA_SMALL}
        color={BUTTON_COLORS.ERROR}
        onClick={openModal}
      >
        Block
      </Button>
    </>
  );
}

export default AdminUnblock;
