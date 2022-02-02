import { Context } from '@utils/appContext';
import '@utils/fonts.css';
import Cookies from 'js-cookie';
import React, { useReducer } from 'react';
import { SnackbarProvider } from 'notistack';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

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
  const timeout = 3000;
  const underConstruction = true;

  return (
    <CacheProvider value={emotionCache}>
      <SnackbarProvider
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Context.Provider
          value={{
            value,
            timeout,
            underConstruction,
          }}
        >
          <Component {...pageProps} />
        </Context.Provider>
      </SnackbarProvider>
    </CacheProvider>
  );
}

export default MyApp;
