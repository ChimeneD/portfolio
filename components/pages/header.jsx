/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Tooltip, Typography } from '@mui/material';

import { VscGithub } from 'react-icons/vsc';
import {
  RiLinkedinBoxLine,
  RiInstagramLine,
  RiTwitterLine,
} from 'react-icons/ri';
import { main_class } from '@utils/styles/javascript/main';
import { header_classes } from '@utils/styles/javascript/header';

const Header = () => {
  const classes = main_class();
  const header_class = header_classes();
  return (
    <header>
      <div className={`${classes.container} ${header_class.header_container}`}>
        <Typography variant='h5'>Hi I'm</Typography>
        <Typography variant='h1' className={header_class.name}>
          Daniel .C. Amadi
        </Typography>
        <Typography variant='h5'>Fullstack Developer</Typography>

        <div className={header_class.cta}>
          <a
            href='/assets/CV.pdf'
            download='DC_AMADI_CV'
            className={`${classes.btn} ${classes.btn_outlined}`}
          >
            Download CV
          </a>
          <a
            href='#contact'
            className={`${classes.btn} ${classes.btn_contained}`}
          >
            Let's Talk
          </a>
        </div>
        <div className={header_class.me}>
          <img src='/images/me.jpg' alt='me' />
        </div>
        <div className={header_class.header_socials}>
          <Tooltip title='Instagram'>
            <a target='_blank' href='https://www.instagram.com/daniel.amadi/'>
              <RiInstagramLine />
            </a>
          </Tooltip>
          <Tooltip title='LinkedIn'>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/daniel-amadi-7ba646129'
            >
              <RiLinkedinBoxLine />
            </a>
          </Tooltip>
          <Tooltip title='Github'>
            <a target='_blank' href='https://github.com/ChimeneD'>
              <VscGithub />
            </a>
          </Tooltip>
          <Tooltip title='Twitter'>
            <a target='_blank' href='https://twitter.com/mrchimene'>
              <RiTwitterLine />
            </a>
          </Tooltip>
        </div>
        <a href='#contact' className={header_class.scroll_down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
