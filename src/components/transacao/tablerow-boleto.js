import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default function TableRowBoleto(props) {
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
          CPF
        </TableCell>
        <TableCell>{props.cpf}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Número
        </TableCell>
        <TableCell>{props.numero}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Data Vencimento
        </TableCell>
        <TableCell>
          {new Intl.DateTimeFormat("pt-BR").format(
            Date.parse(props.dt_vencimento)
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Data Pagamento
        </TableCell>
        <TableCell>
          {new Intl.DateTimeFormat("pt-BR").format(
            Date.parse(props.dt_pagamento)
          )}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
