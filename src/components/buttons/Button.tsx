import React from "react";
import { ButtonHTMLAttributes } from "react";

export type DynamicButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  loadingText?: string;
};

export default function Button(props: DynamicButtonProps) {
  const { isLoading, loadingText, className, ...rest } = props;

  return (
    <button
      {...rest}
      className={`${className} ${isLoading ? "animate-pulse" : ""}`}
    >
      {isLoading ? loadingText : rest.children}
    </button>
  );
}
