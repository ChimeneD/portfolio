/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { BiPaint } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";

const highlights = [
  {
    icon: BsAwardFill,
    title: "Execution",
    detail: "Strategy translated into working outcomes.",
  },
  {
    icon: FaRegFolderOpen,
    title: "Range",
    detail: "From landing pages to full product ecosystems.",
  },
  {
    icon: BiPaint,
    title: "Taste",
    detail: "Visual systems that feel premium and intentional.",
  },
];

const About = () => {
  return (
    <section id="about" className="site-section">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl" data-reveal="text">
          <span className="section-kicker">About</span>
          <h2 className="section-title mt-5">
            A technical mind with an art director's instinct.
          </h2>
          <p className="mt-5 text-base text-text-alt sm:text-lg">
            I pair engineering discipline with brand sensitivity, helping ideas
            move from concept to production without losing creative edge.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article
            className="section-shell overflow-hidden p-2"
            data-reveal="image"
          >
            <img
              src="/images/me.png"
              alt="Daniel Amadi portrait"
              className="h-full min-h-104 w-full object-cover"
            />
          </article>

          <div className="space-y-5" data-reveal="stagger-group">
            <article className="section-shell p-6" data-stagger-item>
              <p className="text-sm text-text-alt">
                With a Computer Engineering foundation from the Cape Peninsula
                University of Technology, I focus on scalable frontends, calm
                interaction design, and backend structure that stays reliable as
                complexity grows.
              </p>
            </article>

            <div className="grid gap-4 sm:grid-cols-3" data-stagger-item>
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="section-shell p-4" key={item.title}>
                    <Icon className="text-xl text-primary" />
                    <h3 className="mt-3 text-lg font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-alt">{item.detail}</p>
                  </article>
                );
              })}
            </div>

            <article className="section-shell p-6" data-stagger-item>
              <p className="text-sm uppercase tracking-[0.13em] text-primary">
                Working style
              </p>
              <p className="mt-3 text-sm text-text-alt">
                Discovery first, then rapid build cycles, then refinement. The
                goal is always to make the final product feel both beautiful and
                inevitable.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
