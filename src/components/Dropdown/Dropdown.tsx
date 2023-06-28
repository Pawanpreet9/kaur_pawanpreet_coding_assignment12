import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledDropdown = styled.select<{ disabled?: boolean; backgroundColor?: string, color?: string}>`
  border: 1px solid #ccc;
  padding: 8px;
  background-color: ${(props) => (props.disabled ? "#cccccc" : props.backgroundColor)};
  color: ${(props) => (props.disabled ? "#darkgrey" : props.color)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue,
  disabled,
  color,
  backgroundColor,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultValue
  );

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedValue(event.target.value);
  };

  return (
    <StyledDropdown
    data-testid = "dropdown"
      value={selectedValue}
      onChange={handleSelectChange}
      disabled={disabled}
      color={color}
      backgroundColor={backgroundColor}

    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;
