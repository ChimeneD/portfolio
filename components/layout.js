import React, { useContext } from 'react';
import Head from 'next/head';
import {
  createTheme,
  AppBar,
  Toolbar,
  MuiThemeProvider,
  CssBaseline,
  Switch,
  //useMediaQuery,
  Container,
} from '@material-ui/core';
//import { purple, red, indigo, amber } from '@material-ui/core/colors';
//import { useTheme } from '@material-ui/core/styles';
import { useStyles } from '@utils/styles';
import { Context } from '@utils/appContext';
import Cookies from 'js-cookie';

const Layout = ({ title, description, children }) => {
  const context = useContext(Context);
  //const router = useRouter();
  const { darkMode } = context.value.state;
  //Light Theme
  const lightTheme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
        color: 'rebeccapurple',
        fontFamily: 'Josefin Sans',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
        color: 'rebeccapurple',
        fontFamily: 'Josefin Sans',
      },
      h3: {
        fontSize: '1.2rem',
        fontWeight: 400,
        margin: '0',
        color: 'rebeccapurple',
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
      type: 'light',
      primary: {
        main: '#663399',
      },
      secondary: {
        main: '#FF8A8A',
      },
    },
  });
  //Dark Theme
  const darkTheme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
        color: 'rebeccapurple',
        fontFamily: 'Josefin Sans',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
        color: 'rebeccapurple',
        fontFamily: 'Josefin Sans',
      },
      h3: {
        fontSize: '1.2rem',
        fontWeight: 400,
        margin: '0',
        color: 'rebeccapurple',
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
      type: 'light',
      primary: {
        main: '#663399',
      },
      secondary: {
        main: '#FF8A8A',
      },
    },
  });
  const classes = useStyles();
  const handleDarkmode = () => {
    context.value.dispatch({
      type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON',
    });

    const newMode = !darkMode;
    Cookies.set('darkmode', newMode ? 'ON' : 'OFF');
  };
  //const theme = useTheme();
  //const notPhoneScreen = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div style={{ padding: '2px 2px 0 2px', fontFamily: 'Josefin Sans' }}>
      <Head>
        <title>{title ? `${title} | PortFolio` : 'PortFolio'}</title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppBar position='static' className={classes.navbar}>
          <Toolbar>
            <Switch onChange={handleDarkmode}></Switch>
          </Toolbar>
        </AppBar>
        <Container>{children}</Container>
      </MuiThemeProvider>
    </div>
  );
};

export default Layout;
