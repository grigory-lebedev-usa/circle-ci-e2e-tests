// eslint-disable-next-line no-shadow
export enum PAGINATION_USER_ROLE {
  BLOCK_DRIVER = 'Block driver',
  BLOCK_CLIENT = 'Block client'
}

export const PAGINATION_ACTIONS = [
  { id: 1, value: PAGINATION_USER_ROLE.BLOCK_DRIVER },
  { id: 2, value: PAGINATION_USER_ROLE.BLOCK_CLIENT }
];
