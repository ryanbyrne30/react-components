import React from "react";
import z from "zod";

export type FormError =
  | z.ZodError
  | { message: string }
  | { errors: { path: (string | number)[]; message: string }[] }
  | string
  | null;

export default function DisplayFormError({
  error,
  className,
}: {
  error: FormError;
  className?: string;
}) {
  if (!error) return <span></span>;

  if (typeof error === "string")
    return <span className={className}>{error}</span>;

  if ("message" in error)
    return <span className={className}>{error.message}</span>;

  if (error instanceof z.ZodError || "errors" in error)
    return (
      <ul className={className}>
        <li>Is Zod Error</li>
        {error.errors.map((e, idx) => (
          <li key={idx}>
            {e.path.join(", ")} - {e.message}
          </li>
        ))}
      </ul>
    );

  return <span className={className}>{error}</span>;
}
