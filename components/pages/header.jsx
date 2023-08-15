/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Tooltip, Typography } from "@mui/material";

import { VscGithub } from "react-icons/vsc";
import { RiLinkedinBoxLine, RiInstagramLine } from "react-icons/ri";
import { header_classes } from "@utils/styles/javascript/header";

const Header = () => {
  const header_class = header_classes();
  return (
    <header>
      <div className="container header-container">
        <Typography variant="h5">Hi I'm</Typography>
        <Typography variant="h1" className="name">
          Daniel .C. Amadi
        </Typography>
        <Typography variant="h5">Fullstack Developer</Typography>

        <div className="cta">
          <a
            href="/assets/CV.pdf"
            download="DC_AMADI_CV"
            className="btn btn-outlined"
          >
            Download CV
          </a>
          <a href="#contact" className="btn btn-contained">
            Let's Talk
          </a>
        </div>
        <div className="me">
          {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="var(--primary-color)"
              d="M32,-58.8C42.7,-49.3,53.3,-43.1,62.3,-33.8C71.3,-24.6,78.7,-12.3,80.2,0.9C81.7,14.1,77.4,28.1,69.9,40C62.4,51.9,51.8,61.5,39.6,66.8C27.4,72,13.7,72.7,0.2,72.4C-13.3,72,-26.5,70.5,-38.2,64.9C-49.9,59.4,-60,49.9,-64.6,38.4C-69.3,27,-68.5,13.5,-67,0.9C-65.4,-11.7,-63,-23.3,-59.7,-37.2C-56.4,-51.1,-52.2,-67.2,-42.1,-77C-32.1,-86.8,-16,-90.3,-2.7,-85.7C10.7,-81.1,21.4,-68.3,32,-58.8Z"
              transform="translate(100 100)"
            />
          </svg> */}
          <article>
            <img src="/images/daniel.JPG" alt="me" />
          </article>
        </div>
        <div className={header_class.header_socials}>
          <Tooltip title="Instagram">
            <a target="_blank" href="https://www.instagram.com/daniel.amadi/">
              <RiInstagramLine />
            </a>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/daniel-amadi-7ba646129"
            >
              <RiLinkedinBoxLine />
            </a>
          </Tooltip>
          <Tooltip title="Github">
            <a target="_blank" href="https://github.com/ChimeneD">
              <VscGithub />
            </a>
          </Tooltip>
        </div>
        <a href="#contact" className={header_class.scroll_down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
