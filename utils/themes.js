import { createTheme } from '@mui/material/styles';
import { colors } from './styles/colors';
import { font_family } from './styles/fonts';
//colors
const { background_light, background_dark, dark_brown, primary_light } = colors;
//fonts
const { heading, subheading, caption, button } = font_family;
//Light Theme
export const lightTheme = createTheme({
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      margin: '1rem 0',
      color: dark_brown,
      fontFamily: heading,
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 500,
      margin: '1rem 0',
      color: dark_brown,
      fontFamily: heading,
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 500,
      margin: '0',
      color: dark_brown,
      fontFamily: heading,
    },
    h4: {
      fontSize: '1.0rem',
      fontWeight: 500,
      margin: '0',
      color: dark_brown,
      fontFamily: subheading,
    },
    h5: {
      fontSize: '0.8rem',
      fontWeight: 500,
      margin: '0',
      color: dark_brown,
      fontFamily: heading,
    },
    h6: {
      fontSize: '0.6rem',
      fontWeight: 500,
      margin: '0',
      color: dark_brown,
      fontFamily: heading,
    },
    body1: {
      fontFamily: heading,
      color: '#757575',
    },
    caption: {
      color: dark_brown,
      fontFamily: caption,
    },
    button: {
      fontFamily: button,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: dark_brown,
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
    background: {
      default: background_light,
    },
  },
});
//Dark Theme
export const darkTheme = createTheme({
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      margin: '1rem 0',
      color: primary_light,
      fontFamily: heading,
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 500,
      margin: '1rem 0',
      color: primary_light,
      fontFamily: heading,
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 500,
      margin: '0',
      color: primary_light,
      fontFamily: heading,
    },
    h4: {
      fontSize: '1.0rem',
      fontWeight: 500,
      margin: '0',
      color: primary_light,
      fontFamily: subheading,
    },
    h5: {
      fontSize: '0.8rem',
      fontWeight: 500,
      margin: '0',
      color: primary_light,
      fontFamily: heading,
    },
    h6: {
      fontSize: '0.6rem',
      fontWeight: 500,
      margin: '0',
      color: primary_light,
      fontFamily: heading,
    },
    body1: {
      fontFamily: heading,
      color: '#757575',
    },
    caption: {
      color: primary_light,
      fontFamily: caption,
    },
    button: {
      fontFamily: button,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: primary_light,
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
    background: {
      default: background_dark,
    },
  },
});
