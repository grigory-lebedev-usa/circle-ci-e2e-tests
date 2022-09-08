export type UsersProps = {
  page: number;
  size: number;
  role: string;
};

export type UserBlockedProps = {
  blocked: boolean;
  blockedUntil?: number | null;
  userId: string;
};
