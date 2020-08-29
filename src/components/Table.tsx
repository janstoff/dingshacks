import React from "react";
import { styled } from "../utils/theme";

interface TableProps {
  readonly headerText: string;
}

const StyledTable = styled.table``;

const StyledTableHeader = styled.thead``;

const StyledTableRow = styled.tr``;

export const TableRow: React.SFC = () => (
  <StyledTableRow>
    <td></td>
  </StyledTableRow>
);

export const Table: React.SFC<TableProps> = ({ headerText, children }) => (
  <StyledTable>
    <StyledTableHeader>
      <tr>
        <th>{headerText}</th>
      </tr>
    </StyledTableHeader>
    <tbody>{children}</tbody>
  </StyledTable>
);
