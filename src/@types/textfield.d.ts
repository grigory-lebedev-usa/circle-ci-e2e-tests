import { TextFieldPropsColorOverrides } from '@mui/material';

declare module '@mui/material/TextField' {
  // eslint-disable-next-line no-shadow
  interface TextFieldPropsColorOverrides {
    form: true;
  }
}
