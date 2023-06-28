import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

interface TableRowProps {
  children: ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};

export default TableRow;
