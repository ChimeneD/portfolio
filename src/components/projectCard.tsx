import React from "react";
import Image from "next/image";
import { Typography } from "@/components/typography";
import { main_class } from "../utils/styles/javascript/main";

type ProjectCardProps = {
  color: string;
  name: string;
  image: string;
  description: string;
  link: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  const theClass = main_class();
  return (
    <article className={`project-card ${theClass.projectCard}`}>
      <header className="project-card__header">
        <span
          aria-label={props.name}
          className="project-card__avatar"
          style={{ backgroundColor: props.color }}
        >
            {props.name[0]}
        </span>
        <Typography variant="h4">{props.name}</Typography>
      </header>
      <Image
        className="project-card__media"
        alt={props.name}
        height={180}
        src={props.image}
        width={230}
      />
      <div className="project-card__content">
        <Typography variant="body2">{props.description}</Typography>
      </div>
      <footer className="project-card__actions">
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className={theClass.navLink}
        >
          View Project
        </a>
      </footer>
    </article>
  );
};

export default ProjectCard;
