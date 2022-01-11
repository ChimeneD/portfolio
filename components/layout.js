import React, { useContext } from 'react';
import Head from 'next/head';
import {
  AppBar,
  Toolbar,
  Switch,
  //useMediaQuery,
  Container,
  CssBaseline,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@utils/themes';

//import { purple, red, indigo, amber } from '@material-ui/core/colors';
//import { useTheme } from '@material-ui/core/styles';
import { Context } from '@utils/appContext';
import Cookies from 'js-cookie';

const Layout = ({ title, description, children }) => {
  const context = useContext(Context);
  //const router = useRouter();
  const { darkMode } = context.value.state;

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
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Head>
          <title>{title ? `${title} | PortFolio` : 'PortFolio'}</title>
          {description && (
            <meta name='description' content={description}></meta>
          )}
        </Head>
        <AppBar position='static'>
          <Toolbar>
            <Switch
              onChange={handleDarkmode}
              checked={darkMode}
              color='primary'
            />
          </Toolbar>
        </AppBar>
        <Container style={{ height: '75vh' }}>{children}</Container>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
