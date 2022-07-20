import { Users } from '../../../../../AdminUsers/admin-users.types';

export type AdminBlockModalProps = {
  isOpened: boolean;
  closeModal: () => void;
  title: string;
  userInfo: Users;
  getUsers: () => void;
};
