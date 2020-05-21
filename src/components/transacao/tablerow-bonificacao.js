import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default function TableRowBonificacao(props) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        Campanha
      </TableCell>
      <TableCell>{props.campanha}</TableCell>
    </TableRow>
  );
}
