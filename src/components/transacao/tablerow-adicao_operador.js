import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableRowOperacao from "./tablerow-operacao.js";

export default function TableRowAdicaoOperador(props) {
  return (
    <React.Fragment>
      <TableRowOperacao id={props.operacao.id} nome={props.operacao.nome} />

      <TableRow>
        <TableCell component="th" scope="row">
          Quantidade de Operadores
        </TableCell>
        <TableCell>{props.qt_operador}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}
