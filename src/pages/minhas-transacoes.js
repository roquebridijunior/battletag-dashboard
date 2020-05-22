import React from "react";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import TemplateMenu2 from "../templates/template-menu2.js";
import TableRowBonificacao from "../components/transacao/tablerow-bonificacao.js";
import TableRowUso from "../components/transacao/tablerow-uso.js";
import TableRowCompra from "../components/transacao/tablerow-compra.js";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

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

const getTipoTransacao = tipo_transacao => {
  switch (tipo_transacao) {
    case "compra":
      return "Compra";
    case "uso":
      return "Uso";
    case "bonificacao":
      return "Bonificação";
    default:
      return tipo_transacao;
  }
};

const getBattleTagAmmo = battletag_ammo => {
  if (battletag_ammo > 0) {
    return <span color="success.main">{battletag_ammo}</span>;
  } else {
    return <span color="error.main"> (menos) {battletag_ammo}</span>;
  }
};

export default function MinhasTransacoes() {
  const classes = useStyles();

  const columns = [
    { title: "ID", field: "id", type: "numeric" },
    { title: "Data", field: "data", type: "date" },
    {
      title: "BattleTag Ammo",
      field: "battletag_ammo",
      type: "numeric",
      render: rowData => getBattleTagAmmo(rowData.battletag_ammo)
    },
    {
      title: "Tipo Transação",
      field: "tipo_transacao",
      render: rowData => getTipoTransacao(rowData.tipo_transacao)
    }
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
      id: 42134,
      data: "2017-03-14T10:30",
      battletag_ammo: -100,
      tipo_transacao: "uso",
      uso: {
        acao: "adicao_patrocinador",
        adicao_patrocinador: {
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
      id: 67334,
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

  const getDetalheTransacao = transacao => {
    switch (transacao.tipo_transacao) {
      case "bonificacao":
        return (
          <TableRowBonificacao campanha={transacao.bonificacao.campanha} />
        );
      case "uso":
        return (
          <TableRowUso
            acao={transacao.uso.acao}
            adicao_operador={transacao.uso.adicao_operador}
            adicao_patrocinador={transacao.uso.adicao_patrocinador}
          />
        );
      case "compra":
        return (
          <TableRowCompra
            adquirente={transacao.compra.adquirente}
            meio_pagamento={transacao.compra.meio_pagamento}
            boleto={transacao.compra.boleto}
            cartao={transacao.compra.cartao}
            autorizacao={transacao.compra.autorizacao}
            parcelas={transacao.compra.parcelas}
            moeda={transacao.compra.moeda}
            valor={transacao.compra.valor}
          />
        );
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
