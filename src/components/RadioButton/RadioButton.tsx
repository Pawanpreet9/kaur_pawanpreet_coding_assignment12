import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.label<{ disabled?: boolean ; color?:string; backgroundColor?:string;}>`

  display: inline-flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.disabled ? "darkgrey" : props.color)};
  background-color: ${(props) => (props.disabled ? "#cccccc" : props.backgroundColor)};
`;

const RadioInput = styled.input`

  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({

  id,
  value,
  label,
  checked,
  disabled,
  color,
  backgroundColor,
  onChange,
}) => {
  return (
    <StyledRadioButton  data-testid = "radio" htmlFor={id} backgroundColor={backgroundColor} color={color} disabled={disabled}>
      <RadioInput

        type="radio"
        id={id}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}

      />
      {label}
    </StyledRadioButton>
  );
};

export default RadioButton;
