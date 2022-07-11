export type Car = {
  make: string;
  model: string;
  year: number;
  color: string;
  photo: string;
};

export type Driver = {
  firstName: string;
  lastName: string;
  role: string;
  createdAt: number;
  email: string;
  id: string;
  car: Car;
};
