import { ButtonPropsSizeOverrides } from '@mui/material';

declare module '@mui/material/Button' {
  // eslint-disable-next-line no-shadow
  interface ButtonPropsSizeOverrides {
    extra_small: true;
  }
}
