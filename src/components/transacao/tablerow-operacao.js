import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Link from "@material-ui/core/Link";

export default function TableRowOperacao(props) {
  return (
    <React.Fragment>
      <TableRow>
        <TableCell component="th" scope="row">
          Operação
        </TableCell>
        <TableCell>
          <Link href="/operacao/{props.id}">{props.nome}</Link>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
