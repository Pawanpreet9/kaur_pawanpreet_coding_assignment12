import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {TableProps} from './Table.types';

const StyledTable = styled.table<{ disabled?: boolean; color?: string; backgroundColor?: string ,header1?:string, header2?:string, header3?:string , td1?:string, td2?:string, td3?:string, td4?:string, td5?:string, td6?:string ,footer1?: string,footer2?: string,footer3?: string}>`
  border-collapse: collapse;
  width: 100%;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  background-color: ${(props) => (props.disabled ? "#cccccc" : props.backgroundColor)};
  color: ${(props) => (props.disabled ? "#3e3b3b" : props.color)};
`;


const Table: React.FC<TableProps> = ({
  children,
   disabled,
   color = "black",
   backgroundColor,
   header1,
   header2,
   header3,
   td1,
   td2,
   td3,
   td4,
   td5,
   td6,
   footer1,
   footer2,
   footer3,


   ...props }) => {
  return (<StyledTable data-testid="table" header1 = {header1} header2= {header2}  header3= {header3} td1 = {td1} td2= {td2} td3= {td3} td4= {td4} td5= {td5} td6= {td6} disabled={disabled} color={color} backgroundColor={backgroundColor} footer1={footer1} footer2={footer2} footer3={footer3}>
    {header1 && <thead>
      <th>{header1}</th>
      <th>{header2}</th>
      <th>{header3}</th>
    </thead>}
    {td1 && <tr>
      <td>{td1}</td>
      <td>{td2}</td>
      <td>{td3}</td>
    </tr>}
    {td1 && <tr>
      <td>{td4}</td>
      <td>{td5}</td>
      <td>{td6}</td>
    </tr>}
    {footer1 && <tfoot>
      <td>{footer1}</td>
      <td>{footer2}</td>
      <td>{footer3}</td>
    </tfoot>}
    </StyledTable>);
};

export default Table;
