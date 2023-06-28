import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledTableHeader = styled.th<{ disabled?: boolean }>`
  /* Styling for table header */
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

interface TableHeaderProps {
  children: ReactNode;
  disabled?: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled }) => {
  return <StyledTableHeader disabled={disabled}>{children}</StyledTableHeader>;
};

export default TableHeader;
