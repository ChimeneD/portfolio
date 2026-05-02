export const contact_classes = () => ({
  contact_container:
    "grid grid-cols-[0.78fr_1.22fr] gap-8 max-lg:grid-cols-1 [&_form]:flex [&_form]:flex-col [&_form]:gap-5 [&_form]:rounded-[1.5rem] [&_form]:border [&_form]:border-border [&_form]:bg-card/75 [&_form]:p-6 [&_form]:shadow-[var(--shadow-soft)] [&_form]:backdrop-blur-xl",
  contact_icon:
    "mb-2 flex size-12 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground",
  contact_option:
    "flex flex-col items-start gap-4 rounded-[1.5rem] border border-border bg-card/75 p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary",
  contact_options: "flex flex-col gap-5",
});
