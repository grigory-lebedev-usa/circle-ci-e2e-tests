import { Users } from '../AdminUsers/admin-users.types';

export type Report = {
  id: string;
  comment: string;
  createdAt: number;
  client: Users;
  driver: Users;
};
