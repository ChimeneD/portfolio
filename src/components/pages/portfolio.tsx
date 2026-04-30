/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Typography } from "@/components/typography";
import { main_class } from "../../utils/styles/javascript/main";
import { portfolio_classes } from "../../utils/styles/javascript/portfolio";

const Portfolio = () => {
  const classes = main_class();
  const portfolio_class = portfolio_classes();
  const data = [
    {
      id: 1,
      image: "/images/ecommerce.jpg",
      title: "Knus Wonen Website",
      github_repo: "https://github.com/ChimeneD/knus-wonen",
      stack: ["Next.js", "Design System", "Responsive UI"],
      demo_link: "https://knus-wonen.vercel.app/",
    },
    {
      id: 2,
      image: "/images/about-me.jpg",
      title: "DoForGood Website",
      github_repo: "https://github.com/ChimeneD/foundation",
      stack: ["React", "Nonprofit", "Content"],
      demo_link: "https://doforgood.netlify.app/",
    },
    {
      id: 3,
      image: "/images/ouicestnous.svg",
      title: "Portfolio",
      github_repo: "https://github.com/ChimeneD/portfolio",
      stack: ["Next.js", "Tailwind", "GSAP"],
      demo_link: "https://chimene.dev/",
    },
  ];
  return (
    <section id="portfolio" className="py-28 max-lg:py-20">
      <div className={`${classes.container} mb-14`} data-reveal="text">
        <Typography className="text-center" variant="h5">
          Selected Work
        </Typography>
        <Typography className="mx-auto mt-4 max-w-3xl text-center" variant="h2">
          Recent builds with a bias for clean structure and polished detail.
        </Typography>
      </div>
      <div
        className={`${classes.container} ${portfolio_class.portfolio_container}`}
        data-reveal="stagger-group"
      >
        {data.map((item) => {
          return (
            <article
              className={portfolio_class.portfolio_item}
              key={item.id}
              data-stagger-item
            >
              <div className={portfolio_class.portfolio_image}>
                <img src={item.image} alt={item.title} />
              </div>
              <Typography
                variant="h3"
                className={portfolio_class.portfolio_heading}
              >
                {item.title}
              </Typography>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((tag) => (
                  <span
                    className="rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-xs font-bold text-text"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className={portfolio_class.portfolio_cta}>
                <a
                  href={item.github_repo}
                  className={`${classes.btn} ${classes.btn_outlined}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a>
                <a
                  href={item.demo_link}
                  className={`${classes.btn} ${classes.btn_contained}`}
                  target="_blank"
                  rel="noreferrer"
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
