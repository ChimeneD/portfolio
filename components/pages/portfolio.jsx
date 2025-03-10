/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Typography } from "@mui/material";
import { main_class } from "@utils/styles/javascript/main";
import { portfolio_classes } from "@utils/styles/javascript/portfolio";

const Portfolio = () => {
  const classes = main_class();
  const portfolio_class = portfolio_classes();
  const data = [
    {
      id: 1,
      image: "/images/ouicestnous.svg",
      title: "Knus Wonen Website",
      github_repo: "https://github.com/ChimeneD/knus-wonen",
      stack: "NextJS",
      demo_link: "https://knus-wonen.vercel.app/",
    },
    {
      id: 2,
      image: "/images/ouicestnous.svg",
      title: "DoForGood Website",
      github_repo: "https://github.com/ChimeneD/foundation",
      demo_link: "https://doforgood.netlify.app/",
    },
    {
      id: 3,
      image: "/images/ouicestnous.svg",
      title: "Portfolio",
      github_repo: "https://github.com/ChimeneD/portfolio",
      demo_link: "https://chimene.dev/",
    },
  ];
  return (
    <section id="portfolio">
      <Typography variant="h5">What are my recent projects?</Typography>
      <Typography variant="h2" style={{ marginBottom: "4rem" }}>
        My Portfolio
      </Typography>
      <div
        className={`${classes.container} ${portfolio_class.portfolio_container}`}
      >
        {data.map((item) => {
          return (
            <article className={portfolio_class.portfolio_item} key={item.id}>
              <div className={portfolio_class.portfolio_image}>
                <img src={item.image} alt={item.title} />
              </div>
              <Typography
                variant="h3"
                className={portfolio_class.portfolio_heading}
              >
                {item.title}
              </Typography>
              <Typography
                style={{
                  fontSize: "12px",
                  color: "var(--primary-color)",
                  marginBottom: "1em",
                }}
              >
                Tech stack: {item.stack}
              </Typography>
              <div className={portfolio_class.portfolio_cta}>
                <a
                  href={item.github_repo}
                  className={`${classes.btn} ${classes.btn_outlined}`}
                  target="_blank"
                >
                  Github Repo
                </a>
                <a
                  href={item.demo_link}
                  className={`${classes.btn} ${classes.btn_contained}`}
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
