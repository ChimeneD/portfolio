import React from "react";

type TextFieldProps = {
  error?: boolean;
  fullWidth?: boolean;
  helperText?: React.ReactNode;
  label: string;
  multiline?: boolean;
  minRows?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextField = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(
  (
    {
      className,
      error = false,
      fullWidth = false,
      helperText,
      id,
      label,
      multiline = false,
      minRows,
      name,
      ...props
    },
    ref,
  ) => {
    const fieldId = id ?? name;
    const fieldClass = `min-h-12 w-full rounded-2xl border bg-background/50 px-4 py-3 font-[inherit] text-text transition-all duration-200 placeholder:text-text-alt/70 focus:border-primary focus:ring-3 focus:ring-ring/25 ${
      error ? "border-destructive" : "border-border"
    }`;

    return (
      <label
        className={`flex flex-col gap-2${fullWidth ? " w-full" : ""}${
          className ? ` ${className}` : ""
        }`}
        htmlFor={fieldId}
      >
        <span className="text-sm font-semibold text-text">{label}</span>
        {multiline ? (
          <textarea
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
            id={fieldId}
            name={name}
            rows={minRows}
            className={fieldClass}
            aria-invalid={error}
            {...props}
          />
        ) : (
          <input
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            id={fieldId}
            name={name}
            className={fieldClass}
            aria-invalid={error}
            {...props}
          />
        )}
        {helperText ? (
          <span className="text-xs text-destructive" role={error ? "alert" : undefined}>
            {helperText}
          </span>
        ) : null}
      </label>
    );
  },
);
TextField.displayName = "TextField";
