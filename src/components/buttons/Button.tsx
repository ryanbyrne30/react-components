import React from "react";
import { ButtonHTMLAttributes } from "react";

export type DynamicButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
  loadingText?: string
}

export default function Button(props: DynamicButtonProps) {
  const { isLoading, loadingText, ...rest } = props;

  return (
    <button {...rest}>{isLoading ? loadingText : rest.children}</button>
  );
}
