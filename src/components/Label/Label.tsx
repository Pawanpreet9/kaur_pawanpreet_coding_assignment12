import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.disabled ? 'gray' : props.color)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.disabled ? "#cccccc" : props.backgroundColor)};
  pointer-events: ${(props) => (props.disabled ? "not-allowed" : "auto")};
  &:hover {
    background-color: ${(props) => (props.disabled ? "none" : "#6bedb5")};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${(props) =>
      props.size === "14px"
        ? "5px 23px 6px"
        : props.size === "15px"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
  }
`;

const Label: React.FC<LabelProps> = ({ size,text, disabled, backgroundColor, color}) => {
  return <StyledLabel disabled={disabled} size={size}  color={color} backgroundColor={backgroundColor} >{text}</StyledLabel>;
};

export default Label;
