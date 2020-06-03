import React from "react";
import MaterialTable from "material-table";
import TemplateMenu2 from "../templates/template-menu2.js";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";

import { forwardRef } from "react";

import ReceiptIcon from "@material-ui/icons/Receipt";
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

const useStyles = makeStyles(theme => ({
  grid: {
    padding: theme.spacing(2)
  }
}));

const getDetalheChamado = transacao => {
  switch (transacao.topico) {
    case "conta":
    case "aplicativo":
    case "pagamento":
    case "creditos":
    case "informacao":
    case "reclamacao":
      return "Reclamação";
    //<TableRowBonificacao campanha={transacao.bonificacao.campanha} />
    default:
      return "opa";
  }
};

export default function Chamados() {
  const classes = useStyles();

  const columns = [
    { title: "ID", field: "id", type: "numeric" },
    { title: "Conta", field: "conta" },
    { title: "Data", field: "data", type: "date" },
    { title: "Tópico", field: "topico" },
    { title: "Status", field: "status" }
  ];

  const data = [
    {
      id: 2351,
      conta: "joaquim@joca.com.br",
      data: "2020-05-24T10:30",
      topico: "compras",
      status: "aberto"
    },
    {
      id: 4614,
      conta: "manuel@santos.com.br",
      data: "2020-05-24T10:30",
      topico: "duvida",
      status: "aberto"
    },
    {
      id: 6345,
      conta: "manuel@santos.com.br",
      data: "2020-05-24T10:30",
      topico: "reclamacao",
      status: "fechado"
    },
    {
      id: 102938,
      conta: "joaquim@manoel.com.br",
      data: "2020-05-24T10:30",
      topico: "duvida",
      status: "fechado"
    },
    {
      id: 14893,
      conta: "manoel@joaquim.com.br",
      data: "2020-05-24T10:30",
      topico: "duvida",
      status: "fechado"
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

  const detailPanel = [
    {
      tooltip: "Detalhes",
      render: rowData => {
        return (
          <TableContainer className={classes.grid}>
            <Table aria-label="detalhes">
              <TableBody>{getDetalheChamado(rowData)}</TableBody>
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
                <ReceiptIcon />
                Chamados
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
