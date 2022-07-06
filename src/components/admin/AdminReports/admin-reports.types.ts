interface IClient {
  firstName: string;
  lastName: string;
  id: string;
}

interface ICar {
  make: string;
  model: string;
  year: number;
  color: string;
  photo: string;
}

interface IDriver {
  firstName: string;
  lastName: string;
  role: string;
  createdAt: number;
  email: string;
  id: string;
  car: ICar;
}

export type RenderReport = {
  id: string;
  comment: string;
  createdAt: number;
  client: IClient;
  driver: IDriver;
};
