import { Car } from '../../driver/DriverTypes/driver.types';

export type Users = {
  blocked: boolean;
  blockedUntil: number;
  email: string;
  feedbackCount: number;
  firstName: string;
  id: string;
  lastName: string;
  rating: number;
  role: string;
  car: Car;
};

export type AdminUsersProps = {
  renderTable: (items: Users[]) => JSX.Element;
};

export type AdminUsersTableProps = {
  items: Users[];
};
