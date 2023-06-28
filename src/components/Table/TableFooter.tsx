import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledTableFooter = styled.tfoot`
  background-color: #f2f2f2;
`;

interface TableFooterProps {
  children: ReactNode;
}

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <StyledTableFooter>{children}</StyledTableFooter>;
};

export default TableFooter;
