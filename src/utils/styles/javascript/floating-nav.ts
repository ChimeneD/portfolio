const navItem =
  "flex size-10 items-center justify-center rounded-full bg-transparent text-lg text-text-alt transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground max-sm:size-9 max-sm:text-base";

export const nav_classes = () => ({
  active: "bg-primary text-primary-foreground",
  nav_container:
    "fixed bottom-6 left-1/2 z-40 flex w-max -translate-x-1/2 gap-2 rounded-full border border-border bg-card/80 px-3 py-2 shadow-[var(--shadow-soft)] backdrop-blur-2xl max-sm:bottom-4 max-sm:gap-1 max-sm:px-2",
  nav_item: navItem,
});
