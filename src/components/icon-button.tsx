import React from "react";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={`icon-button${className ? ` ${className}` : ""}`}
      {...props}
    />
  ),
);
IconButton.displayName = "IconButton";
