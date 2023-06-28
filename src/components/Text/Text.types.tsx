import { MouseEventHandler } from "react";

export interface TextProps {
  size?: string;
  color?: string;
  bold?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;


  backgroundColor?: string;

  onClick?: MouseEventHandler<HTMLElement>;
}