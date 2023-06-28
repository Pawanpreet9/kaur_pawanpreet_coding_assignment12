import { ReactNode } from 'react';

export interface TableProps {
  children: ReactNode |  ReactNode[];
  disabled?: boolean;
  color?: string;
  backgroundColor?: string;
  header1?:string;
  header2?:string;
  header3?:string;
  td1?: string;
  td2?: string;
  td3?: string;
  td4?: string;
  td5?: string;
  td6?: string;
  footer1?: string;
  footer2?: string;
  footer3?: string;




}

export interface TableHeaderProps {
  children: ReactNode |  ReactNode[];
  disabled?: boolean;
  color?: string;
  backgroundColor?: string;
  header1?:string;

}

export interface TableRowProps {
  children: ReactNode |  ReactNode[];
  disabled?: boolean;
  color?: string;
  backgroundColor?: string;
  header1?:string;

}

export interface TableCellProps {
  children: ReactNode |  ReactNode[];
  disabled?: boolean;
  color?: string;
  backgroundColor?: string;
  header1?:string;

}

export interface TableFooterProps {
  children: ReactNode |  ReactNode[];
  disabled?: boolean;
  color?: string;
  backgroundColor?: string;
  text:string;
  header1?:string;
}
