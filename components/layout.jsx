import React, { useContext } from 'react';
import Head from 'next/head';
import Cookies from 'js-cookie';
import FloatingNav from './floating-nav';
import { CssBaseline, IconButton, Box, Tooltip } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@utils/themes';

import { Context } from '@utils/appContext';
import { DarkMode, LightMode } from '@mui/icons-material';

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
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Head>
        <title>{title ? `${title} | PortFolio` : 'PortFolio'}</title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <Box style={{ width: '100%' }}>
        {darkMode ? (
          <Tooltip title='Light Mode'>
            <IconButton
              onClick={handleDarkmode}
              color='primary'
              size='small'
              style={{ position: 'absolute', top: '1rem', right: '1rem' }}
            >
              <LightMode fontSize='small' />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title='Dark Mode'>
            <IconButton
              onClick={handleDarkmode}
              color='primary'
              size='small'
              style={{ position: 'absolute', top: '1rem', right: '1rem' }}
            >
              <DarkMode fontSize='small' />
            </IconButton>
          </Tooltip>
        )}
        {children}
        <FloatingNav />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;