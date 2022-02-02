import React, { useContext } from 'react';
import Head from 'next/head';
import {
  Toolbar,
  //useMediaQuery,
  Container,
  CssBaseline,
  IconButton,
  Link,
  Card,
  Typography,
  Divider,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@utils/themes';

//import { purple, red, indigo, amber } from '@material-ui/core/colors';
//import { useTheme } from '@material-ui/core/styles';
import { Context } from '@utils/appContext';
import Cookies from 'js-cookie';
import { classes } from '@utils/classes';
import LightMode from '@mui/icons-material/LightMode';
import {
  AlternateEmailRounded,
  CreateOutlined,
  DarkMode,
  HomeOutlined,
} from '@mui/icons-material';

const Layout = ({ title, description, children }) => {
  const context = useContext(Context);
  //const router = useRouter();
  const { darkMode } = context.value.state;
  const theClass = classes();

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
            <meta name="description" content={description}></meta>
          )}
        </Head>
        <Toolbar>
          <Typography variant="h1">Logo here</Typography>
          <section style={{ flexGrow: 1 }}></section>
          <Card className={theClass.navCard}>
            <Link
              underline="none"
              className={theClass.navLink}
              component="button"
            >
              <HomeOutlined fontSize="small" />
              Home
            </Link>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Link underline="none" className={theClass.navLink}>
              <CreateOutlined fontSize="small" />
              Projects
            </Link>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Link underline="none" className={theClass.navLink}>
              <AlternateEmailRounded fontSize="small" />
              Get in touch
            </Link>
          </Card>
          {darkMode ? (
            <IconButton onClick={handleDarkmode} color="primary">
              <LightMode />
            </IconButton>
          ) : (
            <IconButton onClick={handleDarkmode} color="primary">
              <DarkMode />
            </IconButton>
          )}
        </Toolbar>
        <Container className={theClass.container}>{children}</Container>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
