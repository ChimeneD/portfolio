import React from "react";
import { VscGithub } from "react-icons/vsc";
import { RiLinkedinBoxLine, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary px-4 py-12 text-secondary-foreground">
      <div
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 max-sm:flex-col max-sm:text-center"
        data-reveal="text"
      >
        <div>
          <strong className="block text-lg font-black text-primary">
            Daniel C. Amadi
          </strong>
          <span className="text-sm text-secondary-foreground/75">
            Fullstack developer crafting refined web products.
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            target="_blank"
            href="https://www.instagram.com/daniel.amadi/"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex size-10 items-center justify-center rounded-full border border-primary/35 text-xl transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <RiInstagramLine />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/daniel-amadi-7ba646129"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex size-10 items-center justify-center rounded-full border border-primary/35 text-xl transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <RiLinkedinBoxLine />
          </a>
          <a
            target="_blank"
            href="https://github.com/ChimeneD"
            rel="noreferrer"
            aria-label="Github"
            className="flex size-10 items-center justify-center rounded-full border border-primary/35 text-xl transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <VscGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
