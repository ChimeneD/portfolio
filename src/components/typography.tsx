import React from "react";

const withBaseClass = (baseClass: string, className?: string) =>
  className ? `${baseClass} ${className}` : baseClass;

export const Heading1 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={withBaseClass(
      "text-[clamp(2rem,5vw,3.75rem)] leading-[1.08] font-semibold",
      className,
    )}
    {...props}
  />
));
Heading1.displayName = "Heading1";

export const Heading2 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h2">
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={withBaseClass(
      "text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] font-semibold",
      className,
    )}
    {...props}
  />
));
Heading2.displayName = "Heading2";

export const Heading3 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h3">
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={withBaseClass(
      "text-[clamp(1.5rem,3.2vw,2.25rem)] leading-[1.14] font-semibold",
      className,
    )}
    {...props}
  />
));
Heading3.displayName = "Heading3";

export const Heading4 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h4">
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={withBaseClass(
      "text-[clamp(1.25rem,2.4vw,1.875rem)] leading-[1.18] font-semibold",
      className,
    )}
    {...props}
  />
));
Heading4.displayName = "Heading4";

export const Heading5 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h5">
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={withBaseClass(
      "text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.2] font-semibold",
      className,
    )}
    {...props}
  />
));
Heading5.displayName = "Heading5";

export const Heading6 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h6">
>(({ className, ...props }, ref) => (
  <h6
    ref={ref}
    className={withBaseClass(
      "text-[clamp(1rem,1.5vw,1.25rem)] leading-tight font-semibold",
      className,
    )}
    {...props}
  />
));
Heading6.displayName = "Heading6";

export const Heading7 = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={withBaseClass(
      "text-[clamp(0.875rem,1.2vw,1rem)] leading-[1.35] font-medium",
      className,
    )}
    {...props}
  />
));
Heading7.displayName = "Heading7";

export const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={withBaseClass(
      "text-[clamp(0.95rem,1.05vw,1.0625rem)] leading-[1.6]",
      className,
    )}
    {...props}
  />
));
Paragraph.displayName = "Paragraph";

export const Small = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={withBaseClass(
      "text-[clamp(0.8125rem,0.95vw,0.9375rem)] leading-normal",
      className,
    )}
    {...props}
  />
));
Small.displayName = "Small";

export const Tiny = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={withBaseClass(
      "text-[clamp(0.75rem,0.8vw,0.8125rem)] leading-[1.45]",
      className,
    )}
    {...props}
  />
));
Tiny.displayName = "Tiny";

type TypographyVariant =
  | "body1"
  | "body2"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant?: TypographyVariant;
};

const variantClass: Record<TypographyVariant, string> = {
  h1: "text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] font-bold text-text",
  h2: "text-[clamp(2rem,5vw,3.2rem)] leading-[1.05] font-bold text-text",
  h3: "text-[clamp(1.25rem,3vw,2rem)] leading-[1.15] font-semibold text-text",
  h4: "text-[clamp(1rem,2.2vw,1.35rem)] leading-[1.2] font-semibold text-text",
  h5: "text-[clamp(0.8rem,1.6vw,0.95rem)] leading-[1.3] font-bold uppercase tracking-[0.18em] text-primary",
  h6: "text-[clamp(0.75rem,1.2vw,0.9rem)] leading-[1.3] font-semibold text-text-alt",
  body1: "text-base leading-[1.6] text-text",
  body2: "text-sm leading-[1.55] text-text-alt",
  caption: "text-xs leading-normal text-primary",
};

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

const variantElement: Record<TypographyVariant, TypographyElement> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "body1", ...props }, ref) => {
    const Component = variantElement[variant];

    return React.createElement(Component, {
      ...props,
      ref,
      className: withBaseClass(variantClass[variant], className),
    });
  },
);
Typography.displayName = "Typography";
