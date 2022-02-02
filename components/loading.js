import { Context } from '@utils/appContext';
import React, { useContext } from 'react';
import { GridSpinner } from 'react-spinners-kit';
import dynamic from 'next/dynamic';

const Loading = (props) => {
  const context = useContext(Context);
  const { darkMode } = context.value.state;
  return darkMode ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#181D31',
      }}
    >
      <GridSpinner size={30} color="#F0E9D2" loading={props.loading} />
    </div>
  ) : (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#181D31',
      }}
    >
      <GridSpinner size={30} color="#F0E9D2" loading={props.loading} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Loading), { ssr: false });
