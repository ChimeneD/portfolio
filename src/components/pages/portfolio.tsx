/* eslint-disable @next/next/no-img-element */
import React from "react";

const projects = [
  {
    id: 1,
    image: "/images/knus-wonen.png",
    title: "Knus Wonen",
    description:
      "At KnusWonen, we are committed to making our homes more energy-efficient and sustainable.",
    githubRepo: "https://github.com/ChimeneD/knus-wonen",
    stack: ["Next.js", "Design System", "Responsive UI"],
    demoLink: "https://knus-wonen.vercel.app/",
  },
  {
    id: 2,
    image: "/images/do-for-good.png",
    title: "DoForGood",
    description:
      "A nonprofit-first platform focused on storytelling, awareness, and community action.",
    // githubRepo: "https://github.com/ChimeneD/foundation",
    stack: ["React", "Content Platform", "Campaign UX"],
    demoLink: "https://doforgood.netlify.app/",
  },
  {
    id: 3,
    image: "/images/portfolio-platform.svg",
    title: "Portfolio Platform",
    description:
      "A brand-led personal site with motion, structure, and a clear conversion path.",
    // githubRepo: "https://github.com/ChimeneD/portfolio",
    stack: ["Next.js", "Tailwind", "GSAP"],
    demoLink: "https://chimene.dev/",
  },
  {
    id: 4,
    image: "/images/darkies-in-tech.png",
    title: "Darkies in tech",
    description:
      "The tech startup space has long been skewed against founders of colour. We’re here to change that By connecting the right people, resources, and opportunities, DIT helps founders grow, strengthens programs, and drives real transformation in the South African tech ecosystem",
    // githubRepo: "https://github.com/ChimeneD/darkies-in-tech",
    stack: ["Webflow"],
    demoLink: "https://www.darkiesintech.com/",
  },
  {
    id: 5,
    image: "/images/thecreativesuite.png",
    title: "The Creative Suite",
    description:
      "A Creative Partner for companies and Brands that decide to move forward.",
    // githubRepo: "https://github.com/ChimeneD/project-teaser",
    stack: ["React", "Tailwind"],
    demoLink: "https://www.thecreativesuite.co.za",
  },
  {
    id: 6,
    image: "/images/physiq-store.svg",
    title: "The PhysiQ Store",
    description:
      "My PhysiQ Store curates apparel and accessories for everyday movement, recovery, and comfort. Product availability, material finishes, and pricing may change without notice, so please review sizing, care guidance, and shipping details before placing your order.",
    // githubRepo: "https://github.com/ChimeneD/project-teaser",
    stack: ["React", "Tailwind", "GSAP", "MongoDB", "Express", "GraphQL"],
    demoLink: "https://platform-frontend-dev-eight.vercel.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="site-section">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl" data-reveal="text">
          <span className="section-kicker">Selected Work</span>
          <h2 className="section-title mt-5">
            Proof of concept, proof of execution.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:auto-rows-fr lg:grid-cols-3" data-reveal="stagger-group">
          {projects.map((item) => (
            <article
              className="section-shell group flex h-full flex-col overflow-hidden p-3"
              key={item.id}
              data-stagger-item
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem] border border-border bg-linear-to-br from-secondary/60 via-card to-accent/70">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="media-scrim absolute inset-0" />
                <p className="absolute bottom-4 left-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
                  Case Study
                </p>
              </div>

              <div className="flex grow flex-col p-4">
                <h3 className="text-2xl leading-tight">{item.title}</h3>
                <p className="mt-3 min-h-[5.5rem] text-sm leading-relaxed text-text-alt [display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((tag) => (
                    <span
                      className="border border-primary/45 bg-primary/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-widest text-primary"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-4">
                  {item.githubRepo && (
                    <a
                      href={item.githubRepo}
                      className="inline-flex items-center justify-center border border-border bg-card/75 px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Repo
                    </a>
                  )}
                  <a
                    href={item.demoLink}
                    className="inline-flex items-center justify-center border border-primary bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
