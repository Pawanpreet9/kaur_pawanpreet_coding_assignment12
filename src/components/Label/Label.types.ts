import { MouseEventHandler } from "react";
export interface LabelProps {
  text?: string;
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
  size?: string;
  OnClick?: MouseEventHandler<HTMLLabelElement>;
}
