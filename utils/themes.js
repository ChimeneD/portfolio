import { createTheme } from '@mui/material/styles';

//Light Theme
export const lightTheme = createTheme({
  typography: {
    h1: {
      fontSize: '1.6rem',
      fontWeight: 400,
      margin: '1rem 0',
      color: '#370665',
      fontFamily: 'Poiret One',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
      color: '#370665',
      fontFamily: 'Poiret One',
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 400,
      margin: '0',
      color: '#370665',
      fontFamily: 'Poiret One',
    },
    h4: {
      fontSize: '1.0rem',
      fontWeight: 500,
      margin: '0',
      color: '#370665',
      fontFamily: 'Marcellus',
    },
    h5: {
      fontSize: '0.8rem',
      fontWeight: 400,
      margin: '0',
      color: '#370665',
      fontFamily: 'Poiret One',
    },
    h6: {
      fontSize: '0.6rem',
      fontWeight: 400,
      margin: '0',
      color: '#370665',
      fontFamily: 'Poiret One',
    },
    body1: {
      fontFamily: 'Poiret One',
      color: '#757575',
    },
    caption: {
      color: '#370665',
      fontFamily: 'Josefin Sans',
    },
    button: {
      fontFamily: 'Poiret One',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#370665',
    },
    secondary: {
      main: '#263238',
    },
    success: {
      main: '#00e676',
    },
    info: {
      main: '#1de9b6',
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
      color: '#e8f5e9',
      fontFamily: 'Poiret One',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
      color: '#e8f5e9',
      fontFamily: 'Poiret One',
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 400,
      margin: '0',
      color: '#e8f5e9',
      fontFamily: 'Poiret One',
    },
    h4: {
      fontSize: '1.0rem',
      fontWeight: 500,
      margin: '0',
      color: '#e8f5e9',
      fontFamily: 'Marcellus',
    },
    h5: {
      fontSize: '0.8rem',
      fontWeight: 400,
      margin: '0',
      color: '#e8f5e9',
      fontFamily: 'Poiret One',
    },
    h6: {
      fontSize: '0.6rem',
      fontWeight: 400,
      margin: '0',
      color: '#e8f5e9',
      fontFamily: 'Poiret One',
    },
    body1: {
      fontFamily: 'Poiret One',
      color: '#757575',
    },
    caption: {
      color: '#e8f5e9',
      fontFamily: 'Josefin Sans',
    },
    button: {
      fontFamily: 'Poiret One',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#e8f5e9',
    },
    secondary: {
      main: '#f4ff81',
    },
    success: {
      main: '#b2ff59',
    },
    info: {
      main: '#b3e5fc',
    },
  },
});
