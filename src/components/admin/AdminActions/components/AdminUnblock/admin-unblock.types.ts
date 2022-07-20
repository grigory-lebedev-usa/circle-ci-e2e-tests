import { Users } from '../../../AdminUsers/admin-users.types';

export type AdminUnblockProps = {
  userInfo: Users;
  getUsers: () => void;
};
