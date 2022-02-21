/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react';
import Layout from '@components/layout';
import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import dynamic from 'next/dynamic';
import { classes } from '@utils/classes';
import { Context } from '@utils/appContext';
import Loading from '@components/loading';
import ProjectCard from '@components/projectCard';

const Home = () => {
  const context = useContext(Context);
  const { timeout } = context;
  const [loading, setLoading] = useState(true);
  const theClass = classes();
  //const { darkMode } = context.value.state;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, timeout);
    //eslint-disable-next-line
  }, []);

  return loading ? (
    <Loading loading={loading} />
  ) : (
    <Layout title="Home">
      <Card className={theClass.cardContainer}>
        <Paper className={theClass.parallax_about}>
          <Typography variant="h1">About Me</Typography>
        </Paper>
        <Grid container spacing={4} style={{ padding: 20 }}>
          <Grid item xs={12} md={4} lg={3}>
            <Box className={theClass.cardContainer}>
              <img
                src="/images/daniel.JPG"
                alt="Daniel"
                className={theClass.profileImage}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Box
              className={theClass.cardContainer}
              style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                display: 'flex',
                height: '100%',
              }}
            >
              <Typography variant="h3">{`Hi! I'm Daniel, a 26 year old Javascript developer`}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Paper className={theClass.parallax_project}>
          <Typography variant="h1">My Projects</Typography>
        </Paper>
        <Box style={{ display: 'flex', minHeight: 400, padding: 20 }}>
          <ProjectCard
            link="https://matchoice-client.netlify.app/"
            name="Matchoice"
            color="#673ab7"
            image="https://res.cloudinary.com/danny-cloud/image/upload/v1618398952/rqyiafnwpkiwhbxn5xal.svg"
          />
          <ProjectCard
            link="https://ouicestnous-ca.netlify.app/"
            name="Ouicestnous"
            color="#76ff03"
            image="https://res.cloudinary.com/danny-cloud/image/upload/v1645481365/smo1rayrw4dh0ptzlsy5.png"
          />
        </Box>
        <Paper className={theClass.parallax_contact}>
          <Typography variant="h1">Get in touch</Typography>
        </Paper>
        <Box
          style={{
            display: 'flex',
            flexFlow: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
          }}
        >
          <form className={theClass.formContainer}>
            <Typography variant="h1">Say Hello!</Typography>
            <TextField label="Email" fullWidth className={theClass.textField} />
            <TextField
              label="Subject"
              fullWidth
              className={theClass.textField}
            />
            <TextField
              label="Message"
              multiline
              minRows={6}
              fullWidth
              className={theClass.textField}
            />
            <Button variant="outlined" color="info" style={{ marginTop: 20 }}>
              Send Message
            </Button>
          </form>
        </Box>
      </Card>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
