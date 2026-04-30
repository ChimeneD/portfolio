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
    <article
      className={`overflow-hidden rounded-[1.5rem] border border-border bg-card/75 text-card-foreground shadow-[var(--shadow-soft)] backdrop-blur-xl ${theClass.projectCard}`}
    >
      <header className="flex items-center gap-3 p-4 font-josefin-sans">
        <span
          aria-label={props.name}
          className="inline-flex size-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground"
        >
          {props.name[0]}
        </span>
        <Typography variant="h4">{props.name}</Typography>
      </header>
      <Image
        className="m-auto h-[180px] w-[230px] object-contain p-5"
        alt={props.name}
        height={180}
        src={props.image}
        width={230}
      />
      <div className="p-4">
        <Typography variant="body2">{props.description}</Typography>
      </div>
      <footer className="p-4">
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
