import React, { useState } from 'react';

import DropDown from '../../../../../../../shared/components/DropDown/DropDown';
import { useModal } from '../../../../../../../shared/hooks/useModal';

import AdminBlockModal from '../../../../../AdminActions/components/AdminBlock/components/AdminBlockModal/AdminBlockModal';
import { Report } from '../../../../admin-reports.types';
import { PAGINATION_ACTIONS, PAGINATION_USER_ROLE } from '../../reports.constants';

type ListItemProps = {
  value: string;
};

type DropDownActionsProps = {
  userInfo: Report;
};

function DropDownActions({ userInfo }: DropDownActionsProps) {
  const { isModalOpened, openModal, closeModal } = useModal();
  const [userRoleInfo, setUserRoleInfo] = useState('');
  const handleListItemClick = (listItem: ListItemProps) => {
    openModal();
    setUserRoleInfo(listItem.value);
  };

  const key = userRoleInfo === PAGINATION_USER_ROLE.BLOCK_DRIVER ? 'driver' : 'client';

  return (
    <>
      <AdminBlockModal
        getUsers={() => {}}
        userInfo={userInfo[key]}
        isOpened={isModalOpened}
        closeModal={closeModal}
        title={userRoleInfo}
      />
      <DropDown
        onListItemClick={handleListItemClick}
        hasAction
        value={null}
        items={PAGINATION_ACTIONS}
      />
    </>
  );
}

export default DropDownActions;
