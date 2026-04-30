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
    const fieldClass = `text-field__control${error ? " text-field__control--error" : ""}`;

    return (
      <label
        className={`text-field${fullWidth ? " text-field--full" : ""}${
          className ? ` ${className}` : ""
        }`}
        htmlFor={fieldId}
      >
        <span className="text-field__label">{label}</span>
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
          <span className="text-field__helper" role={error ? "alert" : undefined}>
            {helperText}
          </span>
        ) : null}
      </label>
    );
  },
);
TextField.displayName = "TextField";
