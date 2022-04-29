/* eslint-disable @next/next/no-img-element */
import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '@components/layout';
import Header from '@components/pages/header';
import About from '@components/pages/about';
import Skills from '@components/pages/skills';
import Portfolio from '@components/pages/portfolio';
import Contact from '@components/pages/contacts';
import Services from '@components/pages/services';

const Home = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </Layout>
  );
};

/*import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { classes } from '@utils/classes';
import { Context } from '@utils/appContext';
import Loading from '@components/loading';
import ProjectCard from '@components/projectCard';
import { MailOutlineRounded } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';

const Home = () => {
  const context = useContext(Context);
  const { timeout } = context;
  const [loading, setLoading] = useState(true);
  const [fetchLoading, setFetchLoading] = useState(false);

  const theClass = classes();
  const { darkMode } = context.value.state;
  const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: darkMode ? '#e8f5e9' : '#370665',
      fontWeight: 'bold',
      fontSize: 15,
      letterSpacing: 2,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: darkMode ? '#757575' : '#bdbdbd',
        fontFamily: 'Josefin Sans',
      },
      '&:hover fieldset': {
        borderColor: darkMode ? '#b3e5fc' : '#1de9b6',
      },
      '&.Mui-focused fieldset': {
        borderColor: darkMode ? '#e8f5e9' : '#370665',
      },
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const sendMessage = async ({ email, name, subject, message }) => {
    try {
      setFetchLoading(true);
      const templateParams = {
        from_name: name,
        to_name: 'Daniel Amadi',
        subject: subject,
        reply_to: email,
        message: message,
      };
      await emailjs
        .send(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          templateParams,
          process.env.USER_ID
        )
        .then(
          (response) => {
            setFetchLoading(false);
            setValue('email', '');
            setValue('name', '');
            setValue('subject', '');
            setValue('message', '');
            toast.success(`SUCCESS!... ${response.status}, ${response.text}`);
          },
          (err) => {
            setFetchLoading(false);
            toast.error(`FAILED... ${err.message}`);
          }
        );
    } catch (err) {
      setFetchLoading(false);
      toast.error(
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };
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
        <Paper className={theClass.parallax_container} id="about">
          <Paper className={theClass.parallax_about} />
          <Typography
            variant="h1"
            style={{ fontWeight: 'bold', letterSpacing: 6 }}
          >
            About Me
          </Typography>
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
        <Paper className={theClass.parallax_container} id="projects">
          <Paper className={theClass.parallax_project} />
          <Typography
            variant="h1"
            style={{ fontWeight: 'bold', letterSpacing: 6 }}
          >
            My Projects
          </Typography>
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
        <Paper className={theClass.parallax_container} id="contact">
          <Paper className={theClass.parallax_contact} />
          <Typography
            variant="h1"
            style={{ fontWeight: 'bold', letterSpacing: 6 }}
          >
            Get in touch
          </Typography>
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
          <form
            className={theClass.formContainer}
            onSubmit={handleSubmit(sendMessage)}
          >
            <Typography
              variant="h3"
              style={{ fontWeight: 'bold', letterSpacing: 6, marginBottom: 10 }}
            >
              Say Hello
            </Typography>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              }}
              render={({ field }) => (
                <StyledTextField
                  className={theClass.textField}
                  variant="outlined"
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  error={Boolean(errors.email)}
                  helperText={
                    errors.email
                      ? errors.email.type === 'pattern'
                        ? 'Email is not valid'
                        : 'Email is required'
                      : ''
                  }
                  {...field}
                />
              )}
            />
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <StyledTextField
                  className={theClass.textField}
                  variant="outlined"
                  id="name"
                  label="Full Name"
                  type="text"
                  fullWidth
                  error={Boolean(errors.name)}
                  helperText={errors.name ? 'Full name is required' : ''}
                  {...field}
                />
              )}
            />
            <Controller
              name="subject"
              control={control}
              defaultValue=""
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <StyledTextField
                  className={theClass.textField}
                  variant="outlined"
                  id="subject"
                  label="Subject"
                  type="text"
                  fullWidth
                  error={Boolean(errors.name)}
                  helperText={errors.name ? 'Subject is required' : ''}
                  {...field}
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              defaultValue=""
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <StyledTextField
                  className={theClass.textField}
                  variant="outlined"
                  id="message"
                  label="Message"
                  type="text"
                  multiline
                  minRows={5}
                  fullWidth
                  error={Boolean(errors.name)}
                  helperText={errors.name ? 'Message is required' : ''}
                  {...field}
                />
              )}
            />
            <Button
              variant="outlined"
              color="info"
              style={{ marginTop: 20, fontWeight: 'bold' }}
              size="large"
              startIcon={<MailOutlineRounded />}
              type="submit"
              disabled={fetchLoading}
            >
              Send Message
            </Button>
          </form>
        </Box>
        <Card style={{ padding: 20 }}>
          <Grid container spacing={3}>
            <Grid item>
              <Typography variant="caption">Contact Info: </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                Email: chimenejnr@gmail.com
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                Phone Number: +27783355292
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Card>
    </Layout>
  );
};*/

export default dynamic(() => Promise.resolve(Home), { ssr: false });
