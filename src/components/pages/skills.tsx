import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

const skillGroups = [
  {
    title: "Frontend Craft",
    skills: [
      ["React / Next.js", "Advanced"],
      ["TypeScript", "Advanced"],
      ["Tailwind CSS", "Advanced"],
      ["Animation Systems", "Strong"],
      ["Design Implementation", "Strong"],
    ],
  },
  {
    title: "Backend & Delivery",
    skills: [
      ["Node.js", "Advanced"],
      ["GraphQL", "Strong"],
      ["SQL / MongoDB", "Strong"],
      ["API Architecture", "Strong"],
      ["Deployment Workflows", "Strong"],
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="site-section pt-0">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl" data-reveal="text">
          <span className="section-kicker">Capabilities</span>
          <h2 className="section-title mt-5">Stack depth for ambitious product work.</h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2" data-reveal="stagger-group">
          {skillGroups.map((group) => (
            <article className="section-shell p-6" key={group.title} data-stagger-item>
              <h3 className="text-2xl leading-tight">{group.title}</h3>
              <ul className="mt-6 grid gap-4">
                {group.skills.map(([name, level]) => (
                  <li
                    className="flex items-start gap-3 border-t border-border pt-4 first:border-t-0 first:pt-0"
                    key={name}
                  >
                    <HiBadgeCheck className="mt-0.5 shrink-0 text-lg text-primary" />
                    <div className="flex w-full items-center justify-between gap-3">
                      <span className="text-sm font-medium text-text">{name}</span>
                      <span className="text-xs uppercase tracking-[0.12em] text-text-alt">
                        {level}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
