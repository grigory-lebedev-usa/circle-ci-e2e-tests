import { Client } from '../../client/ClientTypes/client.types';
import { Driver } from '../../driver/DriverTypes/driver.types';

export type Report = {
  id: string;
  comment: string;
  createdAt: number;
  client: Client;
  driver: Driver;
};
