import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      mode: 'light',
      background: {
        paper: '#252331',
        primary: '#211E2D',
        secondary: '#2161FD',
      },
      text: {
        primary: '#fff',
        secondary: '#fff',
        dark: '#4a4364',
      },
      primary: {
        main: "#252331",
      },
      secondary: {
        main: '#2161FD',
      },
      error: {
        main:'#0CF25D',
      },
    },
  });