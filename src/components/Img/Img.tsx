import React from 'react';
import { ImgProps } from './Img.types';
import styled from 'styled-components';

export const StyledImg = styled.img<{ disabled?: boolean; backgroundColor?:string; }>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.disabled ? "#cccccc" : props.backgroundColor)};

`;
const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  disabled,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    />
  );
};

export default Img;
