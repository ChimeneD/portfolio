import { createTheme } from '@mui/material/styles';

//Light Theme
export const lightTheme = createTheme({
  typography: {
    h1: {
      fontSize: '1.6rem',
      fontWeight: 400,
      margin: '1rem 0',
      color: '#4caf50',
      fontFamily: 'Josefin Sans',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
      color: '#4caf50',
      fontFamily: 'Josefin Sans',
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 400,
      margin: '0',
      color: '#4caf50',
      fontFamily: 'Josefin Sans',
    },
    h4: {
      fontSize: '1.0rem',
      fontWeight: 500,
      margin: '0',
      color: 'rebeccapurple',
      fontFamily: 'Marcellus',
    },
    h5: {
      fontSize: '0.8rem',
      fontWeight: 400,
      margin: '0',
      color: 'rebeccapurple',
      fontFamily: 'Josefin Sans',
    },
    h6: {
      fontSize: '0.6rem',
      fontWeight: 400,
      margin: '0',
      color: 'rebeccapurple',
      fontFamily: 'Josefin Sans',
    },
    body1: {
      fontFamily: 'Josefin Sans',
      color: '#757575',
    },
    caption: {
      color: 'rebeccapurple',
      fontFamily: 'Josefin Sans',
    },
    button: {
      fontFamily: 'Josefin Sans',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#FF8A8A',
    },
  },
});
//Dark Theme
export const darkTheme = createTheme({
  typography: {
    h1: {
      fontSize: '1.6rem',
      fontWeight: 400,
      margin: '1rem 0',
      color: '#b2ff59',
      fontFamily: 'Josefin Sans',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
      color: '#b2ff59',
      fontFamily: 'Josefin Sans',
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 400,
      margin: '0',
      color: '#b2ff59',
      fontFamily: 'Josefin Sans',
    },
    h4: {
      fontSize: '1.0rem',
      fontWeight: 500,
      margin: '0',
      color: '#b2ff59',
      fontFamily: 'Marcellus',
    },
    h5: {
      fontSize: '0.8rem',
      fontWeight: 400,
      margin: '0',
      color: '#b2ff59',
      fontFamily: 'Josefin Sans',
    },
    h6: {
      fontSize: '0.6rem',
      fontWeight: 400,
      margin: '0',
      color: '#b2ff59',
      fontFamily: 'Josefin Sans',
    },
    body1: {
      fontFamily: 'Josefin Sans',
      color: '#757575',
    },
    caption: {
      color: '#b2ff59',
      fontFamily: 'Josefin Sans',
    },
    button: {
      fontFamily: 'Josefin Sans',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#b2ff59',
    },
    secondary: {
      main: '#FF8A8A',
    },
  },
});
