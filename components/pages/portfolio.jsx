/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Typography } from '@mui/material';
import { main_class } from '@utils/styles/javascript/main';
import { portfolio_classes } from '@utils/styles/javascript/portfolio';

const Portfolio = () => {
  const classes = main_class();
  const portfolio_class = portfolio_classes();
  return (
    <section id='portfolio'>
      <Typography variant='h5'>What are my recent projects?</Typography>
      <Typography variant='h2' style={{ marginBottom: '4rem' }}>
        My Portfolio
      </Typography>
      <div
        className={`${classes.container} ${portfolio_class.portfolio_container}`}
      >
        <article className={portfolio_class.portfolio_item}>
          <div className={portfolio_class.portfolio_image}>
            <img src='/images/ecommerce.jpg' alt='project-img' />
          </div>
          <Typography
            variant='h3'
            className={portfolio_class.portfolio_heading}
          >
            Ouicestnous
          </Typography>
          <div className={portfolio_class.portfolio_cta}>
            <a
              href=''
              className={`${classes.btn} ${classes.btn_outlined}`}
              target='_blank'
            >
              Github Repo
            </a>
            <a
              href=''
              className={`${classes.btn} ${classes.btn_contained}`}
              target='_blank'
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={portfolio_class.portfolio_item}>
          <div className={portfolio_class.portfolio_image}>
            <img src='/images/ecommerce.jpg' alt='project-img' />
          </div>
          <Typography
            variant='h3'
            className={portfolio_class.portfolio_heading}
          >
            Ouicestnous
          </Typography>
          <div className={portfolio_class.portfolio_cta}>
            <a
              href=''
              className={`${classes.btn} ${classes.btn_outlined}`}
              target='_blank'
            >
              Github Repo
            </a>
            <a
              href=''
              className={`${classes.btn} ${classes.btn_contained}`}
              target='_blank'
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={portfolio_class.portfolio_item}>
          <div className={portfolio_class.portfolio_image}>
            <img src='/images/ecommerce.jpg' alt='project-img' />
          </div>
          <Typography
            variant='h3'
            className={portfolio_class.portfolio_heading}
          >
            Ouicestnous
          </Typography>
          <div className={portfolio_class.portfolio_cta}>
            <a
              href=''
              className={`${classes.btn} ${classes.btn_outlined}`}
              target='_blank'
            >
              Github Repo
            </a>
            <a
              href=''
              className={`${classes.btn} ${classes.btn_contained}`}
              target='_blank'
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
