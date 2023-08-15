/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Typography } from "@mui/material";
import { main_class } from "@utils/styles/javascript/main";
import { about_classes } from "@utils/styles/javascript/about";
import { BsAwardFill } from "react-icons/bs";
import { BiPaint } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";

const img_url = "/images/daniel.JPG";
const About = () => {
  const classes = main_class();
  const about_class = about_classes();
  return (
    <section id="about">
      <Typography variant="h5">What about me?</Typography>
      <Typography variant="h2" style={{ marginBottom: "4rem" }}>
        About Me
      </Typography>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={img_url} alt="me" />
          </div>
        </div>
        <div className={about_class.about_content}>
          <div className={about_class.about_cards}>
            <article className={about_class.about_card}>
              <BsAwardFill className={about_class.about_icon} />
              <Typography variant="h5">Experience</Typography>
              <small>+3 years coding</small>
            </article>
            <article className={about_class.about_card}>
              <FaRegFolderOpen className={about_class.about_icon} />
              <Typography variant="h5">Projects</Typography>
              <small>+2 projects done</small>
            </article>
            <article className={about_class.about_card}>
              <BiPaint className={about_class.about_icon} />
              <Typography variant="h5">Skills</Typography>
              <small>Always evolving</small>
            </article>
          </div>
          <p>
            {` <!-- Hello World! --> `}I'm Daniel Chimene Amadi, a self thought
            fullstack web developer with quite a bit of Experience. I'm a
            computer engineering graduate (Diploma) from the Cape Peninsula
            University of Technology and I like to draw, design and build sweet
            responsive websites (like this one) and I look forward to hearing
            from you about exciting new projects.
          </p>
          <a
            className={`${classes.btn} ${classes.btn_contained}`}
            href="#contact"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
