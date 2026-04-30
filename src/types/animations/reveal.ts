import gsap from "gsap";

type RevealKind = "text" | "image" | "stagger-group";

type SetupRevealOptions = {
  rootSelector?: string;
  threshold?: number;
  rootMargin?: string;
};

const HIDDEN_STATES: Record<RevealKind, gsap.TweenVars> = {
  text: {
    autoAlpha: 0,
    y: 28,
    filter: "blur(8px)",
  },
  image: {
    autoAlpha: 0,
    y: 36,
    scale: 1.03,
    filter: "blur(10px)",
  },
  "stagger-group": {
    autoAlpha: 1,
  },
};

const ENTER_STATES: Record<RevealKind, gsap.TweenVars> = {
  text: {
    autoAlpha: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 0.85,
    ease: "power2.out",
  },
  image: {
    autoAlpha: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 1.05,
    ease: "power3.out",
  },
  "stagger-group": {
    autoAlpha: 1,
    duration: 0.3,
    ease: "none",
  },
};

const EXIT_STATES: Record<RevealKind, gsap.TweenVars> = {
  text: {
    autoAlpha: 0,
    y: -18,
    filter: "blur(8px)",
    duration: 0.45,
    ease: "power1.inOut",
  },
  image: {
    autoAlpha: 0,
    y: -24,
    scale: 0.985,
    filter: "blur(10px)",
    duration: 0.5,
    ease: "power1.inOut",
  },
  "stagger-group": {
    autoAlpha: 1,
    duration: 0.3,
    ease: "none",
  },
};

const getRevealKind = (value: string | undefined): RevealKind => {
  if (value === "image" || value === "stagger-group") return value;
  return "text";
};

export const setupRevealOnScroll = (
  scope: HTMLElement,
  options?: SetupRevealOptions,
) => {
  const targets = Array.from(scope.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (!targets.length) return () => undefined;

  const rootSelector = options?.rootSelector ?? ".app-scrollbar";
  const root = document.querySelector(rootSelector) as HTMLElement | null;
  const threshold = options?.threshold ?? 0.22;
  const rootMargin = options?.rootMargin ?? "0px 0px -10% 0px";

  const ctx = gsap.context(() => {
    targets.forEach((target) => {
      const kind = getRevealKind(target.dataset.reveal);
      if (kind === "stagger-group") {
        const children = target.querySelectorAll<HTMLElement>("[data-stagger-item]");
        gsap.set(children, { autoAlpha: 0, y: 22, filter: "blur(6px)" });
      } else {
        gsap.set(target, HIDDEN_STATES[kind]);
      }
    });
  }, scope);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const kind = getRevealKind(target.dataset.reveal);
        const delay = Number(target.dataset.delay ?? 0);

        if (kind === "stagger-group") {
          const children = target.querySelectorAll<HTMLElement>("[data-stagger-item]");
          gsap.killTweensOf(children);
          if (entry.isIntersecting) {
            gsap.to(children, {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.72,
              ease: "power2.out",
              stagger: 0.11,
            });
          } else {
            gsap.to(children, {
              autoAlpha: 0,
              y: -14,
              filter: "blur(6px)",
              duration: 0.35,
              ease: "power1.inOut",
              stagger: 0.06,
            });
          }
          return;
        }

        gsap.killTweensOf(target);
        gsap.to(target, {
          ...(entry.isIntersecting ? ENTER_STATES[kind] : EXIT_STATES[kind]),
          delay: entry.isIntersecting ? delay : 0,
          overwrite: "auto",
        });
      });
    },
    {
      root,
      threshold,
      rootMargin,
    },
  );

  targets.forEach((target) => observer.observe(target));

  return () => {
    observer.disconnect();
    ctx.revert();
  };
};
