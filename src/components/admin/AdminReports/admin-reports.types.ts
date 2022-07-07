import { IClient } from '../../../interfaces/Client/client.interface';
import { IDriver } from '../../../interfaces/Driver/driver.interface';

export type Report = {
  id: string;
  comment: string;
  createdAt: number;
  client: IClient;
  driver: IDriver;
};
