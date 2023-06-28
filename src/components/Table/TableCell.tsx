import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledTableCell = styled.td`
  padding: 8px;
`;

interface TableCellProps {
  children: ReactNode;
}

const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <StyledTableCell>{children}</StyledTableCell>;
};

export default TableCell;
