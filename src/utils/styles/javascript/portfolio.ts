export const portfolio_classes = () => ({
  portfolio_container: "grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1",
  portfolio_cta: "mt-6 flex flex-wrap gap-3",
  portfolio_heading: "mt-6 mb-3",
  portfolio_image:
    "aspect-[1.35] overflow-hidden rounded-[1.2rem] border border-border bg-background/60 [&_img]:h-full [&_img]:object-cover",
  portfolio_item:
    "rounded-[1.5rem] border border-border bg-card/75 p-5 shadow-[var(--shadow-soft)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary max-sm:m-auto",
});
