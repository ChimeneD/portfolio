import { Context } from '@utils/appContext';
import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import { Typography } from '@mui/material';
import { classes } from '@utils/classes';

const Loading = () => {
  const context = useContext(Context);
  const { darkMode } = context.value.state;
  const theClass = classes();
  return darkMode ? (
    <section
      style={{
        background: '#121212',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        style={{ color: '#F4EEFF', fontFamily: 'Comforter' }}
        id="loading"
        className={theClass.animTypewriter}
      >
        Loading...
      </Typography>
      <Typography
        style={{ fontSize: 30, color: '#F4EEFF', fontFamily: 'Comforter' }}
        id="loading"
        className={theClass.blink}
      >
        _
      </Typography>
    </section>
  ) : (
    <>
      <section
        style={{
          background: '#fafafa',
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          style={{
            color: '#370665',
            fontFamily: 'Comforter',
          }}
          className={theClass.animTypewriter}
        >
          Loading . . .
        </Typography>
        <Typography
          style={{
            fontSize: '30px',
            color: '#370665',
            fontFamily: 'Comforter',
          }}
          className={theClass.blink}
        >
          _
        </Typography>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(Loading), { ssr: false }); //
//export default dynamic(() => Promise.resolve(Loading), { ssr: false });
