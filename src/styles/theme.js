import { createTheme } from '@mui/material/styles';

import { COLORS } from './colors';

const theme = createTheme({
  palette: {
    form: {
      main: COLORS.FORM,
      contrastText: COLORS.WHITE
    },
    primary: {
      main: COLORS.PRIMARY,
      contrastText: COLORS.WHITE
    },
    secondary: {
      main: COLORS.SECONDARY,
      contrastText: COLORS.WHITE
    },
    error: {
      main: COLORS.ERROR,
      contrastText: COLORS.WHITE
    },
    warning: {
      main: COLORS.WARNING,
      contrastText: COLORS.WHITE
    },
    success: {
      main: COLORS.SUCCESS,
      contrastText: COLORS.WHITE
    },
    disabled: {
      main: COLORS.DISABLED,
      contrastText: COLORS.WHITE
    }
  },
  components: {
    MuiTablePagination: {
      styleOverrides: {
        root: {
          borderRight: 'none',
          borderBottom: 'none'
        },
        displayedRows: {
          display: 'none'
        },
        actions: {
          display: 'none'
        },
        selectLabel: {
          margin: 0,
          fontFamily: 'Rasa, sans-serif',
          fontWeight: 400,
          fontSize: '30px',
          lineHeight: '37px',
          color: COLORS.WHITE
        },
        select: {
          fontFamily: 'Rasa, sans-serif',
          fontWeight: 400,
          fontSize: '28px',
          lineHeight: '34px',
          color: COLORS.WHITE
        },
        selectIcon: {
          color: COLORS.WHITE
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child': {
            '.MuiTableCell-root': {
              borderBottom: 'none'
            }
          }
        },
        head: {
          borderBottom: '1px solid #000'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: '28px',
          lineHeight: '33px',
          color: COLORS.WHITE,
          textAlign: 'center',
          borderBottom: '1px solid #000',
          borderRight: '1px solid #000',
          '&:last-child': {
            borderRight: 'none'
          }
        },
        head: {
          fontWeight: 400,
          fontSize: '36px',
          lineHeight: '42px',
          color: COLORS.WHITE,
          textAlign: 'center'
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(196, 162, 103, 0.7)',
          borderRadius: '8px'
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          width: '48px',
          height: '40px',
          border: `1px solid #fff`,
          borderRadius: '50px',
          backgroundColor: '#898199',
          fontFamily: `Rasa, sans-serif`,
          fontWeight: 700,
          fontSize: '30px',
          lineHeight: '37px',
          color: COLORS.WHITE,
          '&:hover': {
            backgroundColor: '#746B85'
          },
          '&.Mui-selected': {
            width: '70px'
          }
        }
      }
    },
    MuiRating: {
      styleOverrides: {
        iconFilled: {
          color: '#FFBC73'
        },
        sizeLarge: {
          fontSize: '80px'
        },
        sizeMedium: { fontSize: '45px' },
        sizeSmall: { fontSize: '30px' }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          marginTop: '75px',
          zIndex: 100,
          transition: `0.3s`,
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.1)'
          }
        }
      }
    },
    MuiModal: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          fontSize: '16px'
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          color: COLORS.WHITE
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '25px'
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',
          color: COLORS.BLACK,
          '&:hover': {
            color: COLORS.FORM
          }
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%',
          height: '100%'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '8px'
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: '0px',
          paddingBottom: '0px'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '27px',
          paddingTop: '10px',
          paddingBottom: '10px',
          '&:hover': {
            backgroundColor: '#C7F1FF'
          },
          '&.Mui-selected': {
            backgroundColor: '#C7F1FF'
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '27px',
          transform: `translate(14px, 21px) scale(1)`,
          '&.Mui-focused': {
            transform: `translate(14px, -16px) scale(0.75)`
          }
        },
        shrink: {
          transform: `translate(14px, -14px) scale(0.75)`,
          color: COLORS.BLACK
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '27px',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          width: '100%',
          height: '100%',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.FORM
          }
        },
        input: {
          borderColor: COLORS.FORM,
          '::-webkit-textfield-decoration-container': {
            visibility: 'hidden'
          }
        },
        notchedOutline: {
          borderColor: COLORS.BLACK
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: {
          fontSize: '3rem'
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: COLORS.WHITE
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
            backgroundColor: COLORS.FORM,
            color: COLORS.WHITE,
            width: '100%',
            height: '100%',
            fontSize: '32px',
            lineHeight: '38px',
            fontWeight: '400',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#1eb1f0'
            },
            '&:active:not(:disabled)': {
              transform: 'translateY(3px)'
            },
            '&:disabled': {
              backgroundColor: COLORS.DISABLED,
              cursor: 'not-allowed',
              color: COLORS.WHITE
            }
          }),
          ...(ownerState.variant === 'contained' &&
            ownerState.size === 'large' && {
              fontSize: '36px',
              lineHeight: '44px',
              width: '280px',
              height: '95px'
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.size === 'medium' && {
              fontSize: '30px',
              lineHeight: '37px',
              width: '200px',
              height: '60px'
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.size === 'medium-long' && {
              fontSize: '39px',
              lineHeight: '48px',
              width: '300px',
              height: '60px'
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.size === 'small' && {
              fontSize: '36px',
              lineHeight: '44px',
              width: '190px',
              height: '55px'
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.size === 'extra_small' && {
              fontSize: '30px',
              lineHeight: '37px',
              width: '130px',
              height: '45px'
            })
        }),
        contained: {
          fontFamily: `'Rasa', 'sans-serif'`,
          fontWeight: 700,
          borderRadius: '50px',
          boxShadow: 'none',
          textTransform: 'none',
          '&:disabled': {
            backgroundColor: COLORS.DISABLED,
            cursor: 'not-allowed',
            color: COLORS.WHITE
          },
          '&.MuiButton-containedError': {
            backgroundColor: COLORS.ERROR_LIGHT
          }
        }
      }
    }
  }
});

export default theme;
