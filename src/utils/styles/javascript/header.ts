export const header_classes = () => ({
  cta: "mt-10 flex flex-wrap items-center gap-4",
  header_container:
    "relative grid min-h-[calc(100vh-2rem)] grid-cols-[1.08fr_0.92fr] items-center gap-12 pt-24 pb-20 max-lg:grid-cols-1 max-lg:gap-10 max-lg:pt-28 max-sm:pt-24",
  header_socials:
    "mt-8 flex items-center gap-3 max-sm:justify-center [&_a]:flex [&_a]:size-11 [&_a]:items-center [&_a]:justify-center [&_a]:rounded-full [&_a]:border [&_a]:border-border [&_a]:bg-card/70 [&_a]:text-xl [&_a]:text-text [&_a]:backdrop-blur-xl [&_a]:transition-all [&_a]:duration-300 [&_a:hover]:-translate-y-1 [&_a:hover]:border-primary [&_a:hover]:bg-primary [&_a:hover]:text-primary-foreground",
  name: "max-w-[11ch] font-albert-sans text-[clamp(3.6rem,9vw,7.6rem)] font-black leading-[0.88] tracking-normal text-text",
  scroll_down:
    "absolute bottom-16 right-6 hidden rotate-90 text-xs font-bold uppercase tracking-[0.25em] text-text-alt transition-colors hover:text-primary xl:block",
});
