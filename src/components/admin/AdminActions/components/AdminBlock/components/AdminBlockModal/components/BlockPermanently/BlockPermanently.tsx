import { userBlocked } from '../../../../../../../../../api/hooks/useUsers/users.actions';
import Button from '../../../../../../../../../shared/components/Button/Button';
import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_COLORS
} from '../../../../../../../../../shared/components/Button/button.constants';
import ConfirmationModal from '../../../../../../../../../shared/components/ConfirmationModal/ConfirmationModal';
import { NOTIFICATION_TYPES } from '../../../../../../../../../shared/components/Notifications/components/Notification/notification.constants';
import { useModal } from '../../../../../../../../../shared/hooks/useModal';
import { addNotification } from '../../../../../../../../../slices/notifications.slice';
import { useAppDispatch } from '../../../../../../../../../store';
import { Report } from '../../../../../../../AdminReports/admin-reports.types';
import { Users } from '../../../../../../../AdminUsers/admin-users.types';

type BlockPermanentlyProps = {
  userInfo: Users;
  closeAdminBlockModal: () => void;
  getUsers: () => void;
};

function BlockPermanently({ userInfo, closeAdminBlockModal, getUsers }: BlockPermanentlyProps) {
  const { isModalOpened, openModal, closeModal } = useModal();
  const dispatch = useAppDispatch();

  const handleBlockPermanentlyAccept = () => {
    closeModal();
    closeAdminBlockModal();
    dispatch(userBlocked({ blocked: true, userId: userInfo.id }))
      .unwrap()
      .catch(({ message }) =>
        dispatch(
          addNotification({
            type: NOTIFICATION_TYPES.ERROR,
            message
          })
        )
      );
    getUsers();
  };
  return (
    <>
      <ConfirmationModal
        isOpened={isModalOpened}
        onCancel={closeModal}
        onConfirm={handleBlockPermanentlyAccept}
        text={`Are you sure you want to block ${userInfo.firstName} ${userInfo.lastName} permanently?`}
      />
      <Button
        variant={BUTTON_VARIANTS.CONTAINED}
        size={BUTTON_SIZES.MEDIUM_LONG}
        color={BUTTON_COLORS.ERROR}
        onClick={openModal}
      >
        Block permanently
      </Button>
    </>
  );
}

export default BlockPermanently;
