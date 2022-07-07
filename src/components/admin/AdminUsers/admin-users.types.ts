export type AdminUsersType = {
  blocked: boolean;
  blockedUntil: number;
  email: string;
  feedbackCount: number;
  firstName: string;
  id: string;
  lastName: string;
  rating: number;
  role: string;
  car: {
    color: string;
    make: string;
    model: string;
    year: number;
    photo: string;
  };
};

export interface AdminUsersRenderTableProps {
  renderTable: (items: AdminUsersType[]) => JSX.Element;
}

export interface AdminUsersTableProps {
  items: AdminUsersType[];
}
