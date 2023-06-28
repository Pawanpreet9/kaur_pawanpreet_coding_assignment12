import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";


export const CardContainer = styled.div<{ disabled?: boolean; color?: string; backgroundColor?: string }>`

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "not-allowed" : "auto")};
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.disabled ? "#ccccc" : props.backgroundColor)};
  color: ${(props) => (props.disabled ? "darkgrey" : props.color)};

  h2 {
    margin-bottom: 8px;
  }

  p {
    margin: 0;
  }
  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccccc" : "#6bedb5")};
  }

`;

const Card: React.FC<CardProps> = ({ title, content, backgroundColor, color, disabled, ...props }) => {
  return (
    <CardContainer data-testid = "card" disabled={disabled} backgroundColor={backgroundColor} color={color}>
      {title && <h2>{title}</h2>}
      {content && <p>{content}</p>}
    </CardContainer>
  );
};

export default Card;
