import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default function TableRowOperacao(props) {
  return (
    <React.Fragment>
      <TableRow>
        <TableCell component="th" scope="row">
          Operação
        </TableCell>
        <TableCell>
          {props.id} - {props.nome}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
