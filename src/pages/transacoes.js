import React from "react";
import MaterialTable from "material-table";
import TemplateMenu from "../templates/template-menu.js";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

import { forwardRef } from "react";

import AddIcon from "@material-ui/icons/Add";
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

export default function Transacoes() {
  const [state, setState] = React.useState({
    columns: [
      { title: "ID", field: "id", type: "numeric" },
      { title: "Conta", field: "conta" },
      { title: "Data", field: "data", type: "date" },
      {
        title: "BattleTag Ammo",
        field: "battletag_ammo",
        type: "numeric"
      },
      { title: "Tipo Transação", field: "tipo_transacao" }
    ],
    data: [
      {
        id: 731983,
        conta: "joaquim@joca.com.br",
        data: 31231,
        battletag_ammo: 63,
        tipo_transacao: "Bonificação"
      },
      {
        id: 773861,
        conta: "manuel@santos.com.br",
        data: 3123,
        battletag_ammo: 34,
        tipo_transacao: "Compra"
      },
      {
        id: 129387,
        conta: "manuel@santos.com.br",
        data: 3123,
        battletag_ammo: -34,
        tipo_transacao: "Uso"
      }
    ]
  });

  const localization = {
    pagination: {
      labelDisplayedRows: "{from}-{to} de {count}",
      labelRowsSelect: "linhas"
    },
    toolbar: {
      nRowsSelected: "{0} linha(s) selecionadas",
      searchTooltip: "Busca",
      searchPlaceholder: "Busca",
      firstAriaLabel: "Primeira Página",
      firstTooltip: "Primeira Página",
      previousAriaLabel: "Página Anterior",
      previousTooltip: "Página Anterior",
      nextAriaLabel: "Próxima Página",
      nextTooltip: "Próxima Página",
      lastAriaLabel: "Última Página",
      lastTooltip: "Última Página"
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

  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      position: "relative",
      minHeight: 200
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <TemplateMenu className={classes.root}>
      <MaterialTable
        title={<AddIcon>Transacoes</AddIcon>}
        icons={tableIcons}
        columns={state.columns}
        data={state.data}
        localization={localization}
        detailPanel={[
          {
            tooltip: "Show Name",
            render: rowData => {
              return (
                <div
                  style={{
                    fontSize: 100,
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "#43A047"
                  }}
                >
                  TESTE - {rowData.name}
                </div>
              );
            }
          }
        ]}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
      />
      <Fab className={classes.fab}>
        <AddIcon />
      </Fab>
    </TemplateMenu>
  );
}
