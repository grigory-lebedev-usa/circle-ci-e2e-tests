export interface ICar {
  make: string;
  model: string;
  year: number;
  color: string;
  photo: string;
}

export interface IDriver {
  firstName: string;
  lastName: string;
  role: string;
  createdAt: number;
  email: string;
  id: string;
  car: ICar;
}
