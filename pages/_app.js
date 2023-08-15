import { Context } from '@utils/appContext';
import Cookies from 'js-cookie';
import React, { useReducer, useState } from 'react';
import { SnackbarProvider } from 'notistack';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@utils/createEmotionCache';
import { Toaster } from 'react-hot-toast';

const clientSideEmotionCache = createEmotionCache();

// css
import '@utils/styles/css/main.css';
import '@utils/styles/css/home.css';
import '@utils/styles/css/about.css';
function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const initialState = {
    darkMode: Cookies.get('darkmode') === 'ON' ? true : false,
  };
  //initializing reducer
  function reducer(state, action) {
    switch (action.type) {
      case 'DARK_MODE_ON':
        return { ...state, darkMode: true };
      case 'DARK_MODE_OFF':
        return { ...state, darkMode: false };
      default:
        return state;
    }
  }
  //using the reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  const [activeLink, setActiveLink] = useState('');
  const timeout = 1000;
  const underConstruction = false;

  return (
    <CacheProvider value={emotionCache}>
      <SnackbarProvider
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Context.Provider
          value={{
            value,
            activeLink,
            setActiveLink,
            timeout,
            underConstruction,
          }}
        >
          <Toaster position='top-center' reverseOrder={false} />
          <Component {...pageProps} />
        </Context.Provider>
      </SnackbarProvider>
    </CacheProvider>
  );
}

export default MyApp;
