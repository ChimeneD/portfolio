import React from "react";
import { GiCheckMark } from "react-icons/gi";

const services = [
  {
    title: "Creative Direction",
    items: [
      "Brand-aligned digital concepts",
      "Narrative-first campaign structure",
      "Visual direction for web rollouts",
      "Design critique and refinement",
    ],
  },
  {
    title: "Product Engineering",
    items: [
      "Next.js and React architecture",
      "API integration and backend flows",
      "Form, auth, and dashboard systems",
      "Performance and accessibility tuning",
    ],
  },
  {
    title: "Growth Websites",
    items: [
      "Conversion-focused landing pages",
      "SEO-conscious content structures",
      "Analytics-ready implementation",
      "Launch support and post-launch iteration",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="site-section">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl" data-reveal="text">
          <span className="section-kicker">Services</span>
          <h2 className="section-title mt-5">From concept room to shipped product.</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3" data-reveal="stagger-group">
          {services.map((service) => (
            <article className="section-shell p-6" key={service.title} data-stagger-item>
              <h3 className="text-2xl leading-tight">{service.title}</h3>
              <ul className="mt-6 space-y-4">
                {service.items.map((item) => (
                  <li className="flex items-start gap-3" key={item}>
                    <GiCheckMark className="mt-1 shrink-0 text-xs text-primary" />
                    <p className="text-sm text-text-alt">{item}</p>
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

export default Services;
