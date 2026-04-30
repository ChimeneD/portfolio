import React from "react";
import { Typography } from "@/components/typography";
import { skill_classes } from "../../utils/styles/javascript/skill";
import { main_class } from "../../utils/styles/javascript/main";
import { HiBadgeCheck } from "react-icons/hi";

const skillGroups = [
  {
    title: "Frontend Development",
    classKey: "skill_frontend" as const,
    skills: [
      ["HTML", "Experienced"],
      ["CSS", "Intermediate"],
      ["Javascript", "Intermediate"],
      ["ReactJS", "Experienced"],
      ["Tailwind CSS", "Intermediate"],
      ["UI/UX-Figma", "Basic"],
    ],
  },
  {
    title: "Backend Development",
    classKey: "skill_backend" as const,
    skills: [
      ["MongoDB", "Intermediate"],
      ["NodeJS", "Intermediate"],
      ["GraphQL", "Intermediate"],
      ["MySQL", "Basic"],
      ["Python", "Basic"],
      ["API Design", "Practical"],
    ],
  },
];

const Skills = () => {
  const classes = main_class();
  const skill_class = skill_classes();

  return (
    <section id="skills" className="py-28 max-lg:py-20">
      <div className={`${classes.container} mb-14`} data-reveal="text">
        <Typography className="text-center" variant="h5">
          Capabilities
        </Typography>
        <Typography className="mx-auto mt-4 max-w-3xl text-center" variant="h2">
          A practical stack for thoughtful, production-ready web work.
        </Typography>
      </div>
      <div className={`${classes.container} ${skill_class.skill_container}`}>
        {skillGroups.map((group, groupIndex) => (
          <div
            className={skill_class[group.classKey]}
            key={group.title}
            data-reveal="stagger-group"
            data-delay={groupIndex * 0.08}
          >
            <Typography variant="h3">{group.title}</Typography>
            <div className={skill_class.skill_content}>
              {group.skills.map(([name, level]) => (
                <article
                  className={skill_class.skill_details}
                  key={name}
                  data-stagger-item
                >
                  <HiBadgeCheck className={skill_class.skill_icon} />
                  <div>
                    <Typography variant="h4">{name}</Typography>
                    <small>{level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
