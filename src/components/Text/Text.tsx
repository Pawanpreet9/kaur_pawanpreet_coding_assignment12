import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.span<TextProps>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  color: ${(props) => (props.disabled ? "darkgrey" : props.color)};
  background-color: ${(props) => (props.disabled ? "#cccccc" : props.backgroundColor)};
  font-weight: ${(props) => props.bold ? "bold" : "normal"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "not-allowed" : "auto")};
  &:hover {
    background-color: ${(props) => (props.disabled ? "#cccccc" : "#6bedb5")};
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


const Text: React.FC<TextProps> = ({
  size,
  color,
  bold,
  children,

  backgroundColor,

  ...props
}) => {
  return (
    <StyledText size={size} color={color} bold={bold}  backgroundColor={backgroundColor}  {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
