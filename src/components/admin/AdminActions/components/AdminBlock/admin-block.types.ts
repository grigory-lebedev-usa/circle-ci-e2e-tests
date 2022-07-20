import { Users } from '../../../AdminUsers/admin-users.types';

export type AdminBlockProps = {
  title: string;
  userInfo: Users;
  getUsers: () => void;
};
