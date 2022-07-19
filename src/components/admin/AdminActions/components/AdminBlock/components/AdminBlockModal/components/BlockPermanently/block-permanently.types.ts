import { Users } from '../../../../../../../AdminUsers/admin-users.types';

export type BlockPermanentlyProps = {
  userInfo: Users;
  closeAdminBlockModal: () => void;
  getUsers: () => void;
};
