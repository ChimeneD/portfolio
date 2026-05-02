import Link from "next/link";
import React from "react";

const projects = [
  {
    id: 1,
    image: "",
    title: "CLean Helpdesk",
    description:
      "The CLimate, Environment, and Nature Helpdesk is a free online platform providing climate, environment, and nature technical assistance and resources to UK government officials.",
    stack: [
      "Next.js",
      "NodeJS & Express",
      "Rest API",
      "MongoDB",
      "AWS",
      "Github",
      "Microsoft Graph API",
    ],
    demoLink: "https://www.clean-helpdesk.org",
  },
  {
    id: 2,
    image: "/images/darkies-in-tech.png",
    title: "Darkies in tech",
    description:
      "The tech startup space has long been skewed against founders of colour. We’re here to change that By connecting the right people, resources, and opportunities, DIT helps founders grow, strengthens programs, and drives real transformation in the South African tech ecosystem",
    // githubRepo: "https://github.com/ChimeneD/darkies-in-tech",
    stack: ["Webflow"],
    demoLink: "https://www.darkiesintech.com/",
  },
  {
    id: 3,
    image: "/images/physiq-store.svg",
    title: "SDRecruitment Portal",
    description:
      "An admin dashboard for managing products, orders, and customer data for The PhysiQ Store.",
    // githubRepo: "https://github.com/ChimeneD/physiq-store-admin"
    stack: ["React", "Tailwind", "GSAP", "MongoDB", "Express", "GraphQL"],
    demoLink: "https://portal.sdrecruit.co.za/",
  },
  {
    id: 4,
    image: "/images/thecreativesuite.png",
    title: "The Creative Suite",
    description:
      "A Creative Partner for companies and Brands that decide to move forward.",
    // githubRepo: "https://github.com/ChimeneD/project-teaser",
    stack: ["React", "Tailwind"],
    demoLink: "https://www.thecreativesuite.co.za",
  },
  {
    id: 5,
    image: "/images/physiq-store.svg",
    title: "Zaio Applications Portal",
    description:
      "A user-friendly interface for managing and tracking applications within the Zaio ecosystem.",
    stack: ["React", "Tailwind", "Vite", "Supabase", "AWS", "Framer Motion"],
    demoLink: "https://applications.zaio.io/",
  },
  {
    id: 6,
    image: "/images/portfolio-platform.svg",
    title: "Portfolio Platform",
    description:
      "A brand-led personal site with motion, structure, and a clear conversion path.",
    // githubRepo: "https://github.com/ChimeneD/portfolio",
    stack: ["Next.js", "Tailwind", "GSAP"],
    demoLink: "https://chimene.dev/",
  },
  {
    id: 7,
    image: "/images/physiq-store.svg",
    title: "Aneno Beauty",
    description:
      "Built on faith, discipline, and genuine care, it grew because women felt seen, not just serviced.We believe beauty should never feel rushed, loud, or transactional. It should feel calm. Intentional.Restorative.",
    stack: ["React", "Tailwind", "GSAP"],
    demoLink: "https://aneno.vercel.app",
  },
  {
    id: 8,
    image: "/images/physiq-store.svg",
    title: "The PhysiQ Store",
    description:
      "My PhysiQ Store curates apparel and accessories for everyday movement, recovery, and comfort. Product availability, material finishes, and pricing may change without notice, so please review sizing, care guidance, and shipping details before placing your order.",
    // githubRepo: "https://github.com/ChimeneD/project-teaser",
    stack: [
      "React",
      "Tailwind",
      "GSAP",
      "MongoDB",
      "Express & Node",
      "GraphQL",
      "Paystack",
      "Google Maps API",
    ],
    demoLink: "https://platform-frontend-dev-eight.vercel.app",
  },
  {
    id: 9,
    image: "/images/physiq-store.svg",
    title: "The PhysiQ Store Dashboard",
    description:
      "My PhysiQ Store Dashboard is an admin interface for managing products, orders, and customer data for The PhysiQ Store. It provides a streamlined experience for administrators to efficiently oversee and maintain the online store's operations.",
    // githubRepo: "https://github.com/ChimeneD/project-teaser",
    stack: ["React", "Tailwind", "GSAP", "MongoDB", "Express", "GraphQL"],
    demoLink: "https://platform-dashboard-dev.vercel.app",
  },

  {
    id: 10,
    image: "/images/knus-wonen.png",
    title: "Knus Wonen",
    description:
      "At KnusWonen, we are committed to making our homes more energy-efficient and sustainable.",
    githubRepo: "https://github.com/ChimeneD/knus-wonen",
    stack: ["Next.js", "Design System", "Responsive UI"],
    demoLink: "https://knus-wonen.vercel.app/",
  },
  {
    id: 11,
    image: "/images/do-for-good.png",
    title: "DoForGood",
    description:
      "A nonprofit-first platform focused on storytelling, awareness, and community action.",
    // githubRepo: "https://github.com/ChimeneD/foundation",
    stack: ["React", "Content Platform", "Campaign UX"],
    demoLink: "https://doforgood.netlify.app/",
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

        <div
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:auto-rows-fr xl:grid-cols-3"
          data-reveal="stagger-group"
        >
          {projects.map((item, index) => (
            <article
              className="section-shell relative group flex h-full flex-col p-5 sm:p-6"
              key={item.id}
              data-stagger-item
            >
              <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-text-alt">
                  Case Study {String(index + 1).padStart(2, "0")}
                </p>
                <span className="inline-flex h-6 items-center border border-primary/45 bg-primary/10 px-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Live
                </span>
              </div>

              <div className="flex grow flex-col">
                <h3 className="text-[1.35rem] leading-tight sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 min-h-24 text-sm leading-relaxed text-text-alt [display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tag) => (
                    <span
                      className="border border-border bg-card/70 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-text"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="relative mt-auto h-20">
                  <div className="absolute bottom-0 left-0 right-0 mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
                    {item.githubRepo && (
                      <a
                        href={item.githubRepo}
                        className="inline-flex items-center justify-center border border-border bg-card/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:border-primary hover:text-primary max-sm:flex-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github Repo
                      </a>
                    )}
                    <a
                      href={item.demoLink}
                      className="inline-flex items-center justify-center border border-primary bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-transparent hover:text-primary max-sm:flex-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
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
