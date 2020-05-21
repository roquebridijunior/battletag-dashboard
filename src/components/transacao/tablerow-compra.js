import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableRowCartao from "./tablerow-cartao.js";
import TableRowBoleto from "./tablerow-boleto.js";

const getDetalheMeioPagamento = compra => {
  switch (compra.meio_pagamento) {
    case "cartao":
      return (
        <TableRowCartao
          portador={compra.cartao.portador}
          bandeira={compra.cartao.bandeira}
          numero={compra.cartao.numero}
        />
      );
    case "boleto":
      return (
        <TableRowBoleto
          portador={compra.boleto.portador}
          cpf={compra.boleto.cpf}
          numero={compra.boleto.numero}
          dt_vencimento={compra.boleto.dt_vencimento}
          dt_pagamento={compra.boleto.dt_pagamento}
        />
      );
    default:
      return "";
  }
};

export default function TableRowCompra(props) {
  return (
    <React.Fragment>
      <TableRow>
        <TableCell component="th" scope="row">
          Adquirente
        </TableCell>
        <TableCell>{props.adquirente}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Meio de Pagamento
        </TableCell>
        <TableCell>{props.meio_pagamento}</TableCell>
      </TableRow>
      {getDetalheMeioPagamento(props)}
      <TableRow>
        <TableCell component="th" scope="row">
          Autorizacao
        </TableCell>
        <TableCell>{props.autorizacao}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Parcelas
        </TableCell>
        <TableCell>{props.parcelas}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Moeda
        </TableCell>
        <TableCell>{props.moeda}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Valor
        </TableCell>
        <TableCell>{props.valor}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}
