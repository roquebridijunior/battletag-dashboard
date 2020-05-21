import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCcMasterCard } from "@fortawesome/free-brands-svg-icons";
import { faCcAmex } from "@fortawesome/free-brands-svg-icons";

const getBandeira = bandeira => {
  switch (bandeira) {
    case "visa":
      return (
        <React.Fragment>
          <FontAwesomeIcon icon={faCcVisa} /> Visa
        </React.Fragment>
      );
    case "master":
      return (
        <React.Fragment>
          <FontAwesomeIcon icon={faCcMasterCard} /> MasterCard
        </React.Fragment>
      );
    case "amex":
      return (
        <React.Fragment>
          <FontAwesomeIcon icon={faCcAmex} /> Amex
        </React.Fragment>
      );
    default:
      return bandeira;
  }
};

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
        <TableCell>{getBandeira(props.bandeira)}</TableCell>
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
