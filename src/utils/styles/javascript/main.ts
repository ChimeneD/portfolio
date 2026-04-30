export const main_class = () => ({
  animTypewriter:
    "inline-block overflow-hidden whitespace-nowrap animate-[typewriter_1.8s_steps(16)_both]",
  blink: "animate-[blink_1s_step-end_infinite]",
  btn: "inline-flex w-max cursor-pointer items-center justify-center gap-2 rounded-full border border-primary px-5 py-3 font-poppins text-sm font-bold text-text shadow-[0_14px_32px_rgba(0,39,44,0.08)] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 max-sm:px-4 max-sm:py-2.5",
  btn_contained:
    "bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground dark:hover:bg-primary/90 dark:hover:text-primary-foreground",
  btn_outlined:
    "bg-card/60 text-text backdrop-blur-xl hover:bg-primary hover:text-primary-foreground",
  cardContainer:
    "flex min-h-screen flex-col items-center justify-center gap-4 p-8",
  container: "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
  navLink: "font-poppins font-semibold text-primary hover:text-text",
  projectCard: "max-w-[320px]",
});
