import React from "react";
import { VscGithub } from "react-icons/vsc";
import { RiLinkedinBoxLine, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/70 px-4 py-14 text-text backdrop-blur-xl">
      <div
        className="mx-auto grid w-full max-w-7xl gap-8 sm:grid-cols-2 sm:items-end"
        data-reveal="text"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-primary">Daniel C. Amadi</p>
          <h3 className="mt-3 max-w-xl text-3xl leading-tight sm:text-4xl">
            Creative thinking with engineering precision.
          </h3>
          <a
            href="mailto:hello@chimene.dev"
            className="mt-4 inline-flex text-sm text-text-alt transition-colors hover:text-primary"
          >
            hello@chimene.dev
          </a>
        </div>

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <div className="flex items-center gap-3">
            <a
              target="_blank"
              href="https://www.instagram.com/daniel.amadi/"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-xl transition-colors hover:border-primary hover:text-primary"
            >
              <RiInstagramLine />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/daniel-amadi-7ba646129"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-xl transition-colors hover:border-primary hover:text-primary"
            >
              <RiLinkedinBoxLine />
            </a>
            <a
              target="_blank"
              href="https://github.com/ChimeneD"
              rel="noreferrer"
              aria-label="Github"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-xl transition-colors hover:border-primary hover:text-primary"
            >
              <VscGithub />
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.12em] text-text-alt">
            © 2026 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
