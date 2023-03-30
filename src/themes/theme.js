import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E3F66',
    },
    inform: {
      pink: '#B71A5D',
      green: '#AABE3B',
      purple: '#7719DF',
      secondary: {
        blue: '#1D52A2',
        green: '#7E9A29',
      },
    },
  },
  typography: {
    h1: {
      fontSize: '42px',
      lineHeight: '125%',
    },
    h2: {
      fontSize: '32px',
      letterSpacing: '0',
      lineHeight: '125%',
    },
    h3: {
      fontSize: '24px',
      letterSpacing: '0',
    },
    h4: {
      fontSize: '20px',
      letterSpacing: 0.25,
    },
    h5: {
      fontSize: '18px',
      lineHeight: '16px',
    },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12.8451px 0px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12.8451px 0px',
          },
        },
      },
    },
  },
});
