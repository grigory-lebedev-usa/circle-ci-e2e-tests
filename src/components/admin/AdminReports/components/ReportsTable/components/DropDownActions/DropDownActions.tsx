import React, { useState } from 'react';

import DropDown from '../../../../../../../shared/components/DropDown/DropDown';
import { useModal } from '../../../../../../../shared/hooks/useModal';

import AdminBlockModal from '../../../../../AdminActions/components/AdminBlock/components/AdminBlockModal/AdminBlockModal';
import { Users } from '../../../../../AdminUsers/admin-users.types';
import { Report } from '../../../../admin-reports.types';
import { PAGINATION_ACTIONS } from '../../reports.constants';

type ListItemProps = {
  value: string;
};

type DropDownActionsProps = {
  userInfo: Report | Users;
};

function DropDownActions({ userInfo }: DropDownActionsProps) {
  const { isModalOpened, openModal, closeModal } = useModal();
  const [userRoleInfo, setUserRoleInfo] = useState('');
  const handleListItemClick = (listItem: ListItemProps) => {
    openModal();
    setUserRoleInfo(listItem.value);
  };
  return (
    <>
      <AdminBlockModal
        userInfo={
          // eslint-disable-next-line no-nested-ternary
          userRoleInfo === PAGINATION_ACTIONS[0].value
            ? userInfo.driver
            : userRoleInfo === PAGINATION_ACTIONS[1].value
            ? userInfo.client
            : null
        }
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
