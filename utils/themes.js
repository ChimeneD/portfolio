import { createTheme } from '@mui/material/styles';
import { colors } from './styles/colors';
import { font_family } from './styles/fonts';
//colors
const {
  background_light,
  background_dark,
  primary_dark,
  primary_light,
  secondary_dark,
  secondary_light,
  success_dark,
  success_light,
  info_dark,
  info_light,
} = colors;
//fonts
const { heading, subheading, caption, button, display } = font_family;
//Light Theme
export const lightTheme = createTheme({
  typography: {
    h1: {
      fontSize: '4rem',
      fontWeight: 500,
      margin: '1rem 0',
      color: primary_light,
      fontFamily: display,
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
      fontWeight: 'bold',
      textTransform: 'none',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: primary_light,
    },
    secondary: {
      main: secondary_light,
    },
    success: {
      main: success_light,
    },
    info: {
      main: info_light,
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
      fontSize: '4rem',
      fontWeight: 500,
      margin: '1rem 0',
      color: primary_dark,
      fontFamily: display,
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 500,
      margin: '1rem 0',
      color: primary_dark,
      fontFamily: heading,
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 500,
      margin: '0',
      color: primary_dark,
      fontFamily: heading,
    },
    h4: {
      fontSize: '1.0rem',
      fontWeight: 500,
      margin: '0',
      color: primary_dark,
      fontFamily: subheading,
    },
    h5: {
      fontSize: '0.8rem',
      fontWeight: 500,
      margin: '0',
      color: primary_dark,
      fontFamily: heading,
    },
    h6: {
      fontSize: '0.6rem',
      fontWeight: 500,
      margin: '0',
      color: primary_dark,
      fontFamily: heading,
    },
    body1: {
      fontFamily: heading,
      color: '#757575',
    },
    caption: {
      color: primary_dark,
      fontFamily: caption,
    },
    button: {
      fontFamily: button,
      fontWeight: 'bold',
      textTransform: 'none',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: primary_dark,
    },
    secondary: {
      main: secondary_dark,
    },
    success: {
      main: success_dark,
    },
    info: {
      main: info_dark,
    },
    background: {
      default: background_dark,
    },
  },
});
