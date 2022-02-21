import React, { useContext } from 'react';
import Head from 'next/head';
import {
  Toolbar,
  useMediaQuery,
  CssBaseline,
  IconButton,
  Link,
  Typography,
  Divider,
  Box,
  AppBar,
  Card,
  Tooltip,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@utils/themes';

import { Context } from '@utils/appContext';
import Cookies from 'js-cookie';
import { classes } from '@utils/classes';
import {
  DarkMode,
  GitHub,
  Instagram,
  LightMode,
  LinkedIn,
  Twitter,
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
  const small = useMediaQuery('(max-width:300px)');
  const medium = useMediaQuery('(max-width:600px)');
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
        <AppBar
          position="fixed"
          style={
            darkMode
              ? { background: '#121212', height: '10vh' }
              : { background: '#fafafa', height: '10vh' }
          }
        >
          <Toolbar>
            <Link variant="h1" className={theClass.logoLink} underline="none">
              <Typography
                variant="h1"
                className={theClass.logoText}
                style={small || medium ? { fontSize: 23 } : { fontSize: 35 }}
              >
                Daniel Amadi
              </Typography>
              <Typography
                variant="h1"
                className={`${theClass.logoText} ${theClass.blink}`}
                style={small || medium ? { fontSize: 23 } : { fontSize: 35 }}
              >
                _
              </Typography>
            </Link>
            <section style={{ flexGrow: 1 }}></section>
            {small || medium ? (
              ''
            ) : (
              <>
                <Box
                  style={{
                    padding: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Link
                    underline="none"
                    className={theClass.navLink}
                    component="button"
                  >
                    About
                  </Link>
                  <Divider orientation="vertical" flexItem />
                  <Link underline="none" className={theClass.navLink}>
                    Projects
                  </Link>
                  <Divider orientation="vertical" flexItem />
                  <Link underline="none" className={theClass.navLink}>
                    Get in touch
                  </Link>
                </Box>
                <Card style={{ padding: 5, marginRight: 10 }}>
                  <Tooltip title="Instagram">
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/daniel.amadi/"
                    >
                      <IconButton size="small" color="info">
                        <Instagram fontSize="small" />
                      </IconButton>
                    </Link>
                  </Tooltip>
                  <Tooltip title="LinkedIn">
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/daniel-amadi-7ba646129"
                    >
                      <IconButton size="small" color="primary">
                        <LinkedIn fontSize="small" />
                      </IconButton>
                    </Link>
                  </Tooltip>
                  <Tooltip title="Github">
                    <Link target="_blank" href="https://github.com/ChimeneD">
                      <IconButton size="small">
                        <GitHub fontSize="small" color="secondary" />
                      </IconButton>
                    </Link>
                  </Tooltip>
                  <Tooltip title="Twitter">
                    <Link target="_blank" href="https://twitter.com/mrchimene">
                      <IconButton size="small" color="success">
                        <Twitter fontSize="small" />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </Card>
              </>
            )}
            {darkMode ? (
              <Tooltip title="Light Mode">
                <IconButton
                  onClick={handleDarkmode}
                  color="primary"
                  size="small"
                >
                  <LightMode fontSize="small" />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Dark Mode">
                <IconButton
                  onClick={handleDarkmode}
                  color="primary"
                  size="small"
                >
                  <DarkMode fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
            {small || medium ? 'Menu' : ''}
          </Toolbar>
        </AppBar>
        <Box className={theClass.container} style={{ width: '100%' }}>
          {children}
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
