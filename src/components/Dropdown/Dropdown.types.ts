import { MouseEventHandler } from "react";
export interface DropdownProps {
  options: string[];
  defaultValue?: string;
  disabled?: boolean;
  color?: string;
  backgroundColor?: string
  onClick?: MouseEventHandler<HTMLOptionElement>;
}
