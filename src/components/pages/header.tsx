/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Tooltip } from "@/components/tooltip";
import { Typography } from "@/components/typography";
import { VscGithub } from "react-icons/vsc";
import { RiLinkedinBoxLine, RiInstagramLine } from "react-icons/ri";
import { HiOutlineArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { header_classes } from "@/utils/styles/javascript/header";
import { main_class } from "@/utils/styles/javascript/main";

const stats = [
  { value: "3+", label: "Years building" },
  { value: "12+", label: "Product surfaces" },
  { value: "Full", label: "Stack fluency" },
];

const Header = () => {
  const classes = main_class();
  const header_class = header_classes();

  return (
    <header className="overflow-hidden">
      <div className={`${classes.container} ${header_class.header_container}`}>
        <div className="max-lg:text-center" data-reveal="stagger-group">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-bold text-text shadow-(--shadow-soft) backdrop-blur-xl"
            data-stagger-item
          >
            <HiOutlineSparkles className="text-primary" />
            Fullstack developer and interface craftsman
          </span>
          <Typography
            variant="h1"
            className={`${header_class.name} mt-8`}
            data-stagger-item
          >
            Daniel C. Amadi
          </Typography>
          <p
            className="mt-7 max-w-2xl text-lg leading-8 text-text-alt max-lg:mx-auto max-sm:text-base"
            data-stagger-item
          >
            I build expressive, reliable web products with a sharp eye for
            interaction, performance, and the tiny details that make interfaces
            feel expensive.
          </p>
          <div className={header_class.cta} data-stagger-item>
            <a
              href="/assets/CV.pdf"
              download="DC_AMADI_CV"
              className={`${classes.btn} ${classes.btn_outlined}`}
            >
              Download CV
            </a>
            <a
              href="#contact"
              className={`${classes.btn} ${classes.btn_contained}`}
            >
              Let's Talk <HiOutlineArrowRight />
            </a>
          </div>
          <div
            className="mt-10 grid max-w-xl grid-cols-3 gap-3 max-lg:mx-auto max-sm:grid-cols-1"
            data-stagger-item
          >
            {stats.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-border bg-card/70 p-4 text-left shadow-[var(--shadow-soft)] backdrop-blur-xl max-lg:text-center"
              >
                <strong className="block text-2xl font-black text-text">
                  {item.value}
                </strong>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-text-alt">
                  {item.label}
                </span>
              </article>
            ))}
          </div>
          <div className={header_class.header_socials} data-stagger-item>
            <Tooltip title="Instagram">
              <a
                target="_blank"
                href="https://www.instagram.com/daniel.amadi/"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <RiInstagramLine />
              </a>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/daniel-amadi-7ba646129"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <RiLinkedinBoxLine />
              </a>
            </Tooltip>
            <Tooltip title="Github">
              <a
                target="_blank"
                href="https://github.com/ChimeneD"
                rel="noreferrer"
                aria-label="Github"
              >
                <VscGithub />
              </a>
            </Tooltip>
          </div>
        </div>

        <div className="relative" data-reveal="image" data-delay="0.12">
          <article className="relative mx-auto aspect-[0.82] w-full max-w-[430px] overflow-hidden rounded-[2rem] border border-border bg-card/70 p-3 shadow-[var(--shadow-lift)] backdrop-blur-xl">
            <img
              className="h-full rounded-[1.4rem] object-cover object-top"
              src="/images/daniel.JPG"
              alt="Daniel C. Amadi"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-primary/40 bg-secondary/90 p-4 text-secondary-foreground shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Available for selected work
              </span>
              <p className="mt-2 text-sm leading-6">
                Product engineering, modern frontends, API design, and polished
                web experiences.
              </p>
            </div>
          </article>
        </div>
        <a href="#contact" className={header_class.scroll_down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
