import { Client } from '../../../@types/Client/client.types';
import { Driver } from '../../../@types/Driver/driver.types';

export type Report = {
  id: string;
  comment: string;
  createdAt: number;
  client: Client;
  driver: Driver;
};
