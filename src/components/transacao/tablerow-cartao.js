import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default function TableRowCartao(props) {
  return (
    <React.Fragment>
      <TableRow>
        <TableCell component="th" scope="row">
          Portador
        </TableCell>
        <TableCell>{props.portador}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Bandeira
        </TableCell>
        <TableCell>{props.bandeira}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Número
        </TableCell>
        <TableCell>{props.numero}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}
