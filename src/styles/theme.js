import { createTheme } from '@mui/material/styles';

import { COLORS } from './colors';

const theme = createTheme({
  palette: {
    form: {
      main: COLORS.form,
      contrastText: COLORS.white
    },
    primary: {
      main: COLORS.primary,
      contrastText: COLORS.white
    },
    secondary: {
      main: COLORS.secondary,
      contrastText: COLORS.white
    }
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '27px'
        },
        focused: {
          transform: 'translate(14px, -14px) scale(0.75)'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: '400px',
          height: '80px',
          fontSize: '27px',
          backgroundColor: COLORS.white
        },
        notchedOutline: {
          borderColor: COLORS.black
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: '27px'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'form' && {
            backgroundColor: COLORS.form,
            color: COLORS.white,
            fontSize: '32px',
            lineHeight: '38px',
            fontWeight: '400',
            width: '400px',
            height: '80px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            ':hover': {
              backgroundColor: '#1eb1f0'
            },
            ':active:not(:disabled)': {
              transform: 'translateY(3px)'
            },
            ':disabled': {
              backgroundColor: COLORS.disabled,
              cursor: 'not-allowed',
              color: COLORS.white
            }
          })
        })
      }
    }
  }
});

export default theme;
