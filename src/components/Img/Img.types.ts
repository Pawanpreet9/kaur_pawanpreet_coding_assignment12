import { HTMLAttributes } from 'react';

export interface ImgProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  disabled?: boolean;
  backgroundColor?:string;
}
