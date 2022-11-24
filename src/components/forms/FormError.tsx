import React from "react";
import z from "zod";

export type FormError =
  | z.ZodError
  | { message: string }
  | { path: (string | number)[]; message: string }[]
  | string
  | null;

export default function DisplayFormError({
  error,
  className,
  itemClassName,
}: {
  error: FormError;
  className?: string;
  itemClassName?: string;
}) {
  if (!error) return <span></span>;

  if (typeof error === "string")
    return <span className={className}>{error}</span>;

  if ("message" in error) {
    try {
      const errors: { path: string[]; message: string }[] = JSON.parse(
        error.message
      );
      return (
        <ul className={className}>
          {errors.map((e, idx) => (
            <li key={idx} className={itemClassName}>
              {e.path.join(", ")} - {e.message}
            </li>
          ))}
        </ul>
      );
    } catch {
      return <span className={className}>{error.message}</span>;
    }
  }

  if (error instanceof z.ZodError || Array.isArray(error))
    return (
      <ul className={className}>
        {error.map((e, idx) => (
          <li key={idx} className={itemClassName}>
            {e.path.join(", ")} - {e.message}
          </li>
        ))}
      </ul>
    );

  return <span className={className}>{error}</span>;
}
