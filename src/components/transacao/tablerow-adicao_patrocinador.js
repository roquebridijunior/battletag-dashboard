import React from "react";
import TableRowOperacao from "./tablerow-operacao.js";
import TableRowPatrocinador from "./tablerow-patrocinador.js";

export default function TableRowAdicaoPatrocinador(props) {
  return (
    <React.Fragment>
      <TableRowOperacao id={props.operacao.id} nome={props.operacao.nome} />

      <TableRowPatrocinador
        id={props.patrocinador.id}
        nome={props.patrocinador.nome}
      />
    </React.Fragment>
  );
}
