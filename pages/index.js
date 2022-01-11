import React from 'react';
import Layout from '@components/layout';
import dynamic from 'next/dynamic';

const Home = () => {
  return (
    <Layout title='Home'>
      <div></div>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
