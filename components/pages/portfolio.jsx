import React from 'react';
import { Typography } from '@mui/material';
import { main_class } from '@utils/styles/javascript/main';
import { portfolio_classes } from '@utils/styles/javascript/portfolio';

const Portfolio = () => {
  const classes = main_class();
  const portfolio_class = portfolio_classes();
  return (
    <section id='portfolio'>
      <Typography variant='h5'>What have I built?</Typography>
      <Typography variant='h2'>My Portfolio</Typography>
      <div
        className={`${classes.container} ${portfolio_class.portfolio_container}`}
      ></div>
    </section>
  );
};

export default Portfolio;
