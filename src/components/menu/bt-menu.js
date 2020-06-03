import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";

import ReceiptIcon from "@material-ui/icons/Receipt";
import StoreIcon from "@material-ui/icons/Store";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import BarChartIcon from "@material-ui/icons/BarChart";

import BtItemNenu from "./bt-item-menu.js";

const useStyles = makeStyles(theme => ({
  brandName: {
    padding: theme.spacing(2)
  }
}));

export default function BtMenu() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" component="h2" className={classes.brandName}>
        BATTLETAG
      </Typography>
      <Divider />
      <List component="nav">
        <BtItemNenu nome="Loja" caminho="/pacotes">
          <StoreIcon />
        </BtItemNenu>
        <BtItemNenu nome="Suporte" caminho="/meus-chamados">
          <ReceiptOutlinedIcon />
        </BtItemNenu>
        <BtItemNenu nome="Minhas Transações" caminho="/minhas-transacoes">
          <SwapHorizIcon />
        </BtItemNenu>
        <Divider />
        <ListSubheader component="div">Admin</ListSubheader>
        <BtItemNenu nome="Saldos" caminho="/saldos">
          <BarChartIcon />
        </BtItemNenu>
        <BtItemNenu nome="Transações" caminho="/transacoes">
          <SwapHorizontalCircleIcon />
        </BtItemNenu>
        <BtItemNenu nome="Chamados" caminho="/chamados">
          <ReceiptIcon />
        </BtItemNenu>
      </List>
    </div>
  );
}
