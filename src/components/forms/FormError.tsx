import React from "react";
import z from "zod";

export type FormError = z.ZodError | { message: string } | string | null;

export default function DisplayFormError({
  error,
  className,
}: {
  error: FormError;
  className?: string;
}) {
  if (!error) return <span></span>;
  if (error instanceof z.ZodError)
    return (
      <ul className={className}>
        {error.errors.map((e, idx) => (
          <li key={idx}>
            {e.message} {e.path.join(", ")}
          </li>
        ))}
      </ul>
    );
  return (
    <span className={className}>
      {typeof error === "string" ? error : error.message}
    </span>
  );
}
