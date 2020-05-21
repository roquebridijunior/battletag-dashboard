import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableRowCartao from "./tablerow-cartao.js";
import TableRowBoleto from "./tablerow-boleto.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";

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

const getAdquirente = adquirente => {
  switch (adquirente) {
    case "paypal":
      return (
        <React.Fragment>
          <FontAwesomeIcon icon={faPaypal} /> Paypal
        </React.Fragment>
      );
    case "mercadopago":
      return <React.Fragment>Mercado Pago</React.Fragment>;
    default:
      return adquirente;
  }
};

const getMeioPagamento = meio_pagamento => {
  switch (meio_pagamento) {
    case "cartao":
      return (
        <React.Fragment>
          <FontAwesomeIcon icon={faCreditCard} /> Cartão
        </React.Fragment>
      );
    case "boleto":
      return (
        <React.Fragment>
          <FontAwesomeIcon icon={faBarcode} /> Boleto
        </React.Fragment>
      );
    default:
      return meio_pagamento;
  }
};

export default function TableRowCompra(props) {
  return (
    <React.Fragment>
      <TableRow>
        <TableCell component="th" scope="row">
          Adquirente
        </TableCell>
        <TableCell>{getAdquirente(props.adquirente)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Meio de Pagamento
        </TableCell>
        <TableCell>{getMeioPagamento(props.meio_pagamento)}</TableCell>
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
        <TableCell>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: props.moeda
          }).format(parseFloat(props.valor))}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
