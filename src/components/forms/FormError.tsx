import React from "react";
import z from "zod";

export default function FormError({
  error,
  className,
}: {
  error: z.ZodError | { message: string } | string | null;
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
