import React from "react";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import TemplateMenu2 from "../templates/template-menu2.js";
import TableRowBonificacao from "../components/transacao/tablerow-bonificacao.js";
import TableRowCartao from "../components/transacao/tablerow-cartao.js";
import TableRowBoleto from "../components/transacao/tablerow-boleto.js";
import TableRowUso from "../components/transacao/tablerow-uso.js";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

import AddBox from "@material-ui/icons/AddBox";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";
import Edit from "@material-ui/icons/Edit";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";

const useStyles = makeStyles(theme => ({
  grid: {
    padding: theme.spacing(2)
  }
}));

export default function MinhasTransacoes() {
  const classes = useStyles();

  const columns = [
    { title: "ID", field: "id", type: "numeric" },
    { title: "Data", field: "data", type: "date" },
    {
      title: "BattleTag Ammo",
      field: "battletag_ammo",
      type: "numeric"
      //render: rowData => <img src={rowData.imageUrl} />
    },
    { title: "Tipo Transação", field: "tipo_transacao" }
  ];

  const data = [
    {
      id: 731983,
      data: "2020-05-24T10:30",
      battletag_ammo: 63,
      tipo_transacao: "bonificacao",
      bonificacao: {
        campanha: "Melhor Operação do Ano"
      }
    },
    {
      id: 773861,
      data: "2017-05-24T10:30",
      battletag_ammo: 100,
      tipo_transacao: "compra",
      compra: {
        adquirente: "paypal",
        meio_pagamento: "cartao",
        cartao: {
          portador: "JOAQUIM DA SILVA",
          bandeira: "visa",
          numero: "1234 ****** 223"
        },
        autorizacao: 1231231,
        parcelas: "1",
        moeda: "BRL",
        valor: "100,00"
      }
    },
    {
      id: 129387,
      data: "2017-05-24T10:30",
      battletag_ammo: -34,
      tipo_transacao: "uso",
      uso: {
        acao: "adicao_operador",
        adicao_operador: {
          operacao: {
            id: 123221,
            nome: "Operação Círculo de Fogo"
          },
          qt_operador: 17
        }
      }
    },
    {
      id: 129387,
      data: "2017-03-14T10:30",
      battletag_ammo: -100,
      tipo_transacao: "uso",
      uso: {
        acao: "adicao_patrocinio",
        adicao_patrocinio: {
          operacao: {
            id: 525,
            nome: "Operação Círculo de Fogo"
          },
          patrocinador: {
            id: 2312345,
            nome: "Kamikase Store"
          }
        }
      }
    },
    {
      id: 129387,
      data: "2017-05-24T10:30",
      battletag_ammo: 10000,
      tipo_transacao: "compra",
      compra: {
        adquirente: "mercadopago",
        meio_pagamento: "boleto",
        boleto: {
          portador: "JOAQUIM DA SILVA",
          cpf: "000.111.222-44",
          numero: "10322 231231233 123123213 123 231231321",
          dt_vencimento: "2020-05-24",
          dt_pagamento: "2020-05-26"
        },
        parcelas: "1",
        moeda: "BRL",
        valor: "100,00"
      }
    }
  ];

  const localization = {
    pagination: {
      labelDisplayedRows: "{from}-{to} de {count}",
      labelRowsSelect: "linhas",
      firstAriaLabel: "Primeira Página",
      firstTooltip: "Primeira Página",
      previousAriaLabel: "Página Anterior",
      previousTooltip: "Página Anterior",
      nextAriaLabel: "Próxima Página",
      nextTooltip: "Próxima Página",
      lastAriaLabel: "Última Página",
      lastTooltip: "Última Página"
    },
    toolbar: {
      nRowsSelected: "{0} linha(s) selecionadas",
      searchTooltip: "Busca",
      searchPlaceholder: "Busca"
    },
    header: {
      actions: "Ações"
    },
    body: {
      emptyDataSourceMessage: "Nenhum registro encontrado",
      filterRow: {
        filterTooltip: "Filtro"
      }
    }
  };

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const compra = compra => (
    <React.Fragment>
      <TableRow>
        <TableCell component="th" scope="row">
          Adquirente
        </TableCell>
        <TableCell>{compra.adquirente}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Meio de Pagamento
        </TableCell>
        <TableCell>{compra.meio_pagamento}</TableCell>
      </TableRow>
      {getDetalheMeioPagamento(compra)}
      <TableRow>
        <TableCell component="th" scope="row">
          Autorizacao
        </TableCell>
        <TableCell>{compra.autorizacao}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Parcelas
        </TableCell>
        <TableCell>{compra.parcelas}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Moeda
        </TableCell>
        <TableCell>{compra.moeda}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Valor
        </TableCell>
        <TableCell>{compra.valor}</TableCell>
      </TableRow>
    </React.Fragment>
  );

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

  const getDetalheTransacao = transacao => {
    switch (transacao.tipo_transacao) {
      case "bonificacao":
        return (
          <TableRowBonificacao campanha={transacao.bonificacao.campanha} />
        );
      case "uso":
        return <TableRowUso acao={transacao.uso.acao} />;
      case "compra":
        return compra(transacao.compra);
      default:
        return "";
    }
  };

  const detailPanel = [
    {
      tooltip: "Detalhes",
      render: rowData => {
        return (
          <TableContainer className={classes.grid}>
            <Table aria-label="detalhes">
              <TableBody>{getDetalheTransacao(rowData)}</TableBody>
            </Table>
          </TableContainer>
        );
      }
    }
  ];

  return (
    <TemplateMenu2>
      <Grid container className={classes.grid} justify="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <MaterialTable
            title={
              <Typography gutterBottom variant="h6" component="h6">
                <SwapHorizontalCircleIcon />
                Minhas Transações
              </Typography>
            }
            icons={tableIcons}
            columns={columns}
            data={data}
            localization={localization}
            detailPanel={detailPanel}
            onRowClick={(event, rowData, togglePanel) => togglePanel()}
          />
        </Grid>
      </Grid>
    </TemplateMenu2>
  );
}
