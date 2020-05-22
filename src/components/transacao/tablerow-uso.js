import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableRowAdicaoPatrocinador from "./tablerow-adicao_patrocinador.js";
import TableRowAdicaoOperador from "./tablerow-adicao_operador.js";

const getDetalheAcao = uso => {
  switch (uso.acao) {
    case "adicao_patrocinador":
      return (
        <TableRowAdicaoPatrocinador
          operacao={uso.adicao_patrocinador.operacao}
          patrocinador={uso.adicao_patrocinador.patrocinador}
        />
      );
    case "adicao_operador":
      return (
        <TableRowAdicaoOperador
          operacao={uso.adicao_operador.operacao}
          qt_operador={uso.adicao_operador.qt_operador}
        />
      );
    default:
      return "";
  }
};

const getAcao = acao => {
  switch (acao) {
    case "adicao_patrocinador":
      return "Adição de Patrocinador em Operação";
    case "adicao_operador":
      return "Incremento do limite de Operadores em Operação";
    default:
      return acao;
  }
};

export default function TableRowUso(props) {
  return (
    <React.Fragment>
      <TableRow>
        <TableCell component="th" scope="row">
          Ação
        </TableCell>
        <TableCell>{getAcao(props.acao)}</TableCell>
      </TableRow>
      {getDetalheAcao(props)}
    </React.Fragment>
  );
}
