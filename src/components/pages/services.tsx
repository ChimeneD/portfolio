import React from "react";
import { Typography } from "@/components/typography";
import { main_class } from "../../utils/styles/javascript/main";
import { service_classes } from "../../utils/styles/javascript/services";

import { GiCheckMark } from "react-icons/gi";

const services = [
  {
    title: "Product Interfaces",
    items: [
      "Design-aware React and Next.js builds",
      "Responsive layouts tuned for real workflows",
      "Motion, accessibility, and visual polish",
      "Component systems that can grow",
    ],
  },
  {
    title: "Fullstack Delivery",
    items: [
      "API design and backend integration",
      "Forms, validation, auth-aware flows",
      "Data modeling for practical product needs",
      "Deployment-ready project structure",
    ],
  },
  {
    title: "Creative Systems",
    items: [
      "Brand-forward portfolio and campaign sites",
      "Interactive storytelling and landing pages",
      "Performance passes for smoother UX",
      "Sharp handoff and maintainable docs",
    ],
  },
];

const Services = () => {
  const classes = main_class();
  const service_class = service_classes();

  return (
    <section id="services" className="py-28 max-lg:py-20">
      <div className={`${classes.container} mb-14`} data-reveal="text">
        <Typography className="text-center" variant="h5">
          Services
        </Typography>
        <Typography className="mx-auto mt-4 max-w-3xl text-center" variant="h2">
          From elegant UI to dependable application architecture.
        </Typography>
      </div>
      <div
        className={`${classes.container} ${service_class.service_container}`}
        data-reveal="stagger-group"
      >
        {services.map((service) => (
          <article
            className={service_class.services}
            key={service.title}
            data-stagger-item
          >
            <div className={`${service_class.service_header}`}>
              <Typography variant="h3">{service.title}</Typography>
            </div>
            <ul className={`${service_class.service_list}`}>
              {service.items.map((item) => (
                <li key={item}>
                  <GiCheckMark className={service_class.service_list_icon} />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
