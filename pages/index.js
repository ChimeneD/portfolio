/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react';
import Layout from '@components/layout';
import { Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { classes } from '@utils/classes';
import { Context } from '@utils/appContext';
import Construction from '@components/construction';
import Loading from '@components/loading';

const Home = () => {
  const context = useContext(Context);
  const [loading, setLoading] = useState(true);
  const theClass = classes();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false), context.timeout;
    });
    //eslint-disable-next-line
  }, []);

  return context.underConstruction ? (
    <Construction />
  ) : loading ? (
    <Loading />
  ) : (
    <Layout title="Home">
      <Box className={theClass.cardContainer}>
        <img
          src="/images/daniel.JPG"
          alt="Daniel"
          className={theClass.profileImage}
        />
        <Typography variant="h1">{`Hi! I'm Daniel`}</Typography>
      </Box>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
