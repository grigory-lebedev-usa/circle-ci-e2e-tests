import Button from '../../../../../../../../../shared/components/Button/Button';
import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_COLORS
} from '../../../../../../../../../shared/components/Button/button.constants';
import ConfirmationModal from '../../../../../../../../../shared/components/ConfirmationModal/ConfirmationModal';
import { useModal } from '../../../../../../../../../shared/hooks/useModal';
import { Users } from '../../../../../../../AdminUsers/admin-users.types';

type BlockPermanentlyProps = {
  userInfo: Users;
};

function BlockPermanently({ userInfo }: BlockPermanentlyProps) {
  const { isModalOpened, openModal, closeModal } = useModal();
  return (
    <>
      <ConfirmationModal
        isOpened={isModalOpened}
        onCancel={closeModal}
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
