export interface RadioButtonProps {
  id: string;
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  color?:string;
  backgroundColor?:string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
