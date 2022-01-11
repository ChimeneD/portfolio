import '@styles/globals.css';
import { Context } from '@utils/appContext';
import Cookies from 'js-cookie';
import React, { useReducer, useEffect } from 'react';
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }) {
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

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const timeout = 1000;

  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Context.Provider
        value={{
          value,
          timeout,
        }}
      >
        <Component {...pageProps} />
      </Context.Provider>
    </SnackbarProvider>
  );
}

export default MyApp;
