import { MouseEventHandler } from "react";

export interface ButtonProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}