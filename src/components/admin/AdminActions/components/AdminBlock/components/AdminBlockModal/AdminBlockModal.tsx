import Modal from '../../../../../../../shared/components/Modal/Modal';
import { MODAL_SIZE } from '../../../../../../../shared/components/Modal/modal.constants';
import { Users } from '../../../../../AdminUsers/admin-users.types';

import classes from './admin-block-modal.module.css';
import BlockPermanently from './components/BlockPermanently/BlockPermanently';
import BlockUntil from './components/BlockUntil/BlockUntil';

type AdminBlockModalProps = {
  isOpened: boolean;
  closeModal: () => void;
  title: string;
  userInfo: Users;
};

function AdminBlockModal({ isOpened, closeModal, title, userInfo }: AdminBlockModalProps) {
  return (
    <Modal isOpened={isOpened} closeModal={closeModal} size={MODAL_SIZE.LARGE}>
      <div className={classes.modal__content}>
        <h2 className={classes.modal__title}>{title}</h2>
        <div className={classes.modal__actions}>
          <BlockPermanently userInfo={userInfo} />
          <BlockUntil title={title} />
        </div>
      </div>
    </Modal>
  );
}

export default AdminBlockModal;
