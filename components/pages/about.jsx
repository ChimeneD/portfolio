/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Typography } from '@mui/material';
import { main_class } from '@utils/styles/javascript/main';
import { about_classes } from '@utils/styles/javascript/about';
import { BsAwardFill } from 'react-icons/bs';

const img_url = '/images/daniel.JPG';
const About = () => {
  const classes = main_class();
  const about_class = about_classes();
  return (
    <section id='about'>
      <Typography variant='h5'>Get to know me</Typography>
      <Typography variant='h2' style={{ marginBottom: '4rem' }}>
        About Me
      </Typography>
      <div className={`${classes.container} ${about_class.about_container}`}>
        <div className={about_class.about_me}>
          <div className={about_class.about_me_image}>
            <img src={img_url} alt='me' />
          </div>
        </div>
        <div className={about_class.about_content}>
          <div className={about_class.about_cards}>
            <article className={about_class.about_card}>
              <BsAwardFill className={about_class.about_icon} />
              <Typography variant='h5'>Experience</Typography>
              <small>+3 years coding</small>
            </article>
            <article className={about_class.about_card}>
              <BsAwardFill className={about_class.about_icon} />
              <Typography variant='h5'>Experience</Typography>
              <small>+3 years coding</small>
            </article>
            <article className={about_class.about_card}>
              <BsAwardFill className={about_class.about_icon} />
              <Typography variant='h5'>Experience</Typography>
              <small>+3 years coding</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            cumque maiores praesentium quis harum nobis. Ullam, rem temporibus
            laborum ducimus, nemo nisi tempore iste quod debitis architecto
            suscipit, aperiam officia.
          </p>
          <a className={`${classes.btn} ${classes.btn_contained}`}>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
