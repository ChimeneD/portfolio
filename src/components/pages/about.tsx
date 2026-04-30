/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Typography } from "@/components/typography";
import { about_classes } from "../../utils/styles/javascript/about";
import { main_class } from "../../utils/styles/javascript/main";
import { BsAwardFill } from "react-icons/bs";
import { BiPaint } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";

const img_url = "/images/daniel.JPG";

const highlights = [
  {
    icon: BsAwardFill,
    title: "Experience",
    detail: "3+ years building",
  },
  {
    icon: FaRegFolderOpen,
    title: "Projects",
    detail: "Product work and experiments",
  },
  {
    icon: BiPaint,
    title: "Taste",
    detail: "Interfaces with polish",
  },
];

const About = () => {
  const classes = main_class();
  const about_class = about_classes();

  return (
    <section id="about" className="py-28 max-lg:py-20">
      <div className={`${classes.container} mb-14`} data-reveal="text">
        <Typography className="text-center" variant="h5">
          About
        </Typography>
        <Typography className="mx-auto mt-4 max-w-3xl text-center" variant="h2">
          Quietly technical, deeply visual, always tuned to the user.
        </Typography>
      </div>
      <div className={`${classes.container} ${about_class.about_container}`}>
        <div className={about_class.about_me} data-reveal="image">
          <div className={about_class.about_me_image}>
            <img src={img_url} alt="Daniel C. Amadi" />
          </div>
        </div>
        <div className={about_class.about_content} data-reveal="stagger-group">
          <div className={about_class.about_cards}>
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className={about_class.about_card}
                  key={item.title}
                  data-stagger-item
                >
                  <Icon className={about_class.about_icon} />
                  <Typography variant="h5">{item.title}</Typography>
                  <small>{item.detail}</small>
                </article>
              );
            })}
          </div>
          <p data-stagger-item>
            I'm Daniel Chimene Amadi, a self-taught fullstack developer with a
            computer engineering background from the Cape Peninsula University
            of Technology. I like building responsive systems that feel calm,
            sharp, and intentional, from the API contract all the way to the
            micro-interactions on the page.
          </p>
          <a
            className={`${classes.btn} ${classes.btn_outlined}`}
            href="#contact"
            data-stagger-item
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
