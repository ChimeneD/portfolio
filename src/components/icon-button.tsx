import React from "react";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={`inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-primary shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-px hover:border-primary hover:bg-primary hover:text-primary-foreground ${className ?? ""}`}
      {...props}
    />
  ),
);
IconButton.displayName = "IconButton";
