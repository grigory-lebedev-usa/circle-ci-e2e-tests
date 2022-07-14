import { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { PRIVATE_ROUTES } from '../../../../../constants/app.constants';

import Button from '../../../../../shared/components/Button/Button';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS
} from '../../../../../shared/components/Button/button.constants';
import { useModal } from '../../../../../shared/hooks/useModal';
import { Users } from '../../../AdminUsers/admin-users.types';

import AdminBlockModal from './components/AdminBlockModal/AdminBlockModal';

type AdminBlockProps = {
  title: string;
  userInfo: Users;
  getUsers: () => void;
};

function AdminBlock({ title, userInfo, getUsers }: AdminBlockProps) {
  const { isModalOpened, closeModal, openModal, toggleModal: toggleBlockModal } = useModal();
  return (
    <>
      <AdminBlockModal
        userInfo={userInfo}
        getUsers={getUsers}
        isOpened={isModalOpened}
        closeModal={closeModal}
        title={title}
      />
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

export default AdminBlock;
