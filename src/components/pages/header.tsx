/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Tooltip } from "@/components/tooltip";
import { VscGithub } from "react-icons/vsc";
import { RiLinkedinBoxLine, RiInstagramLine } from "react-icons/ri";
import { HiOutlineArrowRight, HiOutlineSparkles } from "react-icons/hi";

const stats = [
  { value: "5+", label: "Years in product delivery" },
  { value: "8+", label: "Products built" },
  { value: "100%", label: "Detail obsessed" },
];

const Header = () => {
  return (
    <header id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/daniel.JPG"
          alt="Creative background"
          className="h-full w-full object-cover grayscale"
        />
        <div className="media-scrim absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div
          className="flex min-h-[66vh] flex-col justify-center"
          data-reveal="stagger-group"
        >
          <span className="section-kicker w-fit" data-stagger-item>
            <HiOutlineSparkles className="text-sm" />
            Creative Strategy x Fullstack Build
          </span>

          <h1 className="section-title mt-7 max-w-4xl" data-stagger-item>
            Ideas that turn heads
            <span className="block text-primary">and move people to act.</span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-base text-text-alt sm:text-lg"
            data-stagger-item
          >
            I'm Daniel C. Amadi. I engineer bold digital experiences for brands
            and products that want clarity, momentum, and measurable lift.
          </p>

          <div className="mt-10 flex flex-wrap gap-3" data-stagger-item>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
            >
              Explore Work
              <HiOutlineArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border bg-card/75 px-5 py-3 text-sm font-semibold uppercase tracking-widest text-text transition-colors hover:border-primary hover:text-primary"
            >
              Start a Project
            </a>
          </div>

          <div
            className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3"
            data-stagger-item
          >
            {stats.map((item) => (
              <article key={item.label} className="section-shell p-4">
                <strong className="block text-3xl font-black leading-none text-text">
                  {item.value}
                </strong>
                <span className="mt-2 block text-xs uppercase tracking-[0.16em] text-text-alt">
                  {item.label}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col justify-center gap-4"
          data-reveal="image"
          data-delay="0.12"
        >
          <article className="section-shell overflow-hidden p-2">
            <img
              className="h-136 w-full object-cover object-top"
              src="/images/daniel.JPG"
              alt="Daniel C. Amadi"
            />
          </article>
          <div className="section-shell p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-primary">
              Available for select collaborations
            </p>
            <p className="mt-2 text-sm text-text-alt">
              Product websites, high-performance web apps, and growth-focused
              frontend systems.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Tooltip title="Instagram">
                <a
                  target="_blank"
                  href="https://www.instagram.com/daniel.amadi/"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex size-9 items-center justify-center border border-border text-lg transition-colors hover:border-primary hover:text-primary"
                >
                  <RiInstagramLine />
                </a>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/daniel-amadi-7ba646129"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex size-9 items-center justify-center border border-border text-lg transition-colors hover:border-primary hover:text-primary"
                >
                  <RiLinkedinBoxLine />
                </a>
              </Tooltip>
              <Tooltip title="Github">
                <a
                  target="_blank"
                  href="https://github.com/ChimeneD"
                  rel="noopener noreferrer"
                  aria-label="Github"
                  className="inline-flex size-9 items-center justify-center border border-border text-lg transition-colors hover:border-primary hover:text-primary"
                >
                  <VscGithub />
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
