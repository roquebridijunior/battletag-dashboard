import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import TemplateMenu from "../templates/template-menu3.js";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import SvgIcon from "@material-ui/core/SvgIcon";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  menu: {
    [theme.breakpoints.down("xs")]: {
      display: onsearch => (onsearch === true ? "none" : "flex")
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },

  titulo: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      display: onsearch => (onsearch === true ? "none" : "flex")
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },

  searchicon: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    [theme.breakpoints.up("sm")]: {
      display: onsearch => (onsearch === true ? "none" : "flex")
    }
  },

  filtericon: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },

  searchinput: {
    display: onsearch => (onsearch === true ? "flex" : "none"),
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },

  moreactions: {
    [theme.breakpoints.down("xs")]: {
      display: onsearch => (onsearch === true ? "none" : "flex")
    },
    display: "none"
  },

  grid: {
    backgroundColor: theme.palette.background.paper
  },

  saldo: {
    padding: theme.spacing(3)
  },
  filtro: {
    padding: theme.spacing(2)
  }
}));

const options = {
  fields: [
    { name: "id", type: "number" },
    { name: "data", type: "date" },
    { name: "conta" },
    { name: "battletag_ammo", type: "number" },
    {
      name: "tipo_transacao",
      type: "options",
      options: ["bonificacao", "compra", "uso"]
    },
    {
      name: "compra",
      type: "struct",
      fields: [
        { name: "adquirente" },
        { name: "autorizacao" },
        { name: "paracelas", type: "number" },
        { name: "moeda" },
        { name: "valor", type: "money" },
        {
          name: "meio_pagamento",
          type: "options",
          options: ["cartao", "boleto"]
        },
        {
          name: "cartao",
          type: "struct",
          fields: [
            { name: "portador" },
            { name: "bandeira" },
            { name: "numero" }
          ]
        },
        {
          name: "boleto",
          type: "struct",
          fields: [
            { name: "portador" },
            { name: "cpf", type: "cpf" },
            { name: "numero" },
            { name: "dt_vencimento", type: "date" },
            { name: "dt_pagamento", type: "date" }
          ]
        }
      ]
    },
    {
      name: "uso",
      type: "struct",
      fields: [
        {
          name: "acao",
          type: "options",
          options: ["adicao_operador", "adicao_patrocinador"]
        },
        {
          name: "adicao_operador",
          type: "struct",
          fields: [
            {
              name: "operacao",
              type: "struct",
              fields: [{ name: "id", type: "number" }]
            },
            { name: "qt_operador", type: "number" }
          ]
        },
        {
          name: "adicao_patrocinador",
          type: "struct",
          fields: [
            {
              name: "operacao",
              type: "struct",
              fields: [{ name: "id", type: "number" }, { name: "nome" }]
            },
            {
              name: "patrocinador",
              type: "struct",
              fields: [{ name: "id", type: "number" }, { name: "nome" }]
            }
          ]
        }
      ]
    }
  ],
  filter: ["tipo_transacao", "data"],
  order: ["data"]
};

const data = [
  {
    id: 731983,
    data: "2020-05-24T10:30",
    conta: "roque@teste.com.br",
    battletag_ammo: 63,
    tipo_transacao: "bonificacao",
    bonificacao: {
      campanha: "Melhor Operação do Ano"
    }
  },
  {
    id: 773861,
    data: "2017-05-24T10:30",
    conta: "roquebridi@bridi.com.br",
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
    conta: "roquebridi@bridi.com.br",
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
    conta: "roquebridi@bridi.com.br",
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
    conta: "roquebridi@bridi.com.br",
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

const filter = data;

const getBattleTagAmmo = batteltag_ammo => {
  if (batteltag_ammo > 0) {
    return (
      <Box color="success.main">
        {new Intl.NumberFormat("pt-BR").format(batteltag_ammo)}
      </Box>
    );
  } else {
    return (
      <Box color="error.main">
        {new Intl.NumberFormat("pt-BR").format(batteltag_ammo)}
      </Box>
    );
  }
};

const getTransacoes = transacoes => {
  transacoes.map((filtered, i) => {
    filtered.data = new Intl.DateTimeFormat("en-EN").format(
      Date.parse(filtered.data)
    );
    return (
      <React.Fragment>
        <ListSubheader>{filtered.data}</ListSubheader>
        <ListItem button>
          <ListItemIcon>icone</ListItemIcon>
          <ListItemText
            primary={filtered.tipo_transacao}
            secondary="Paypal - R$ 100,00"
          />
          <ListItemSecondaryAction>
            {getBattleTagAmmo(filtered.battletag_ammo)}
          </ListItemSecondaryAction>
        </ListItem>
      </React.Fragment>
    );
  });
};

export default function MinhasTransacoes(props) {
  const [onsearch, setOnSearch] = React.useState(false);
  const handleOnSearch = busca => {
    setOnSearch(busca);
  };

  const classes = useStyles(onsearch);

  const openSearch = () => {
    handleOnSearch(true);
    handleClose();
  };
  const closeSearch = () => {
    handleOnSearch(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const [filtroState, setFiltroState] = React.useState(false);
  const toggleFiltro = state => event => {
    handleClose();
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setFiltroState(state);
  };

  return (
    <TemplateMenu setMenuState={props.setMenuState} menuState={props.menuState}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="abrir menu"
            onClick={props.setMenuState(true)}
            className={classes.menu}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.titulo} component="h6" noWrap>
            MINHAS TRANSAÇÕES
          </Typography>
          <Input
            className={classes.searchinput}
            variant="outlined"
            placeholder="Buscar"
            id="busca"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="limpar" onClick={closeSearch}>
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          <IconButton
            aria-label="buscar"
            onClick={openSearch}
            className={classes.searchicon}
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            edge="start"
            aria-label="abrir filtro"
            onClick={toggleFiltro(true)}
            className={classes.filtericon}
          >
            <FilterListIcon />
          </IconButton>


          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            className={classes.moreactions}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)}>
            <MenuItem onClick={openSearch}>
              <SearchIcon /> Buscar
            </MenuItem>
            <MenuItem onClick={toggleFiltro(true)}>
              <FilterListIcon /> Filtar
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer open={filtroState} onClose={toggleFiltro(false)} anchor="right">
        <div role="presentation" onKeyDown={toggleFiltro(false)}>
          <Typography variant="subtitle1" className={classes.filtro}>
            Filtro
          </Typography>
          <Divider />
          <List>
            <ListSubheader>Tipo de Transação</ListSubheader>
            <ListItem role={undefined} dense button>
              <ListItemIcon>
                <Checkbox edge="start" disableRipple checked="true" />
              </ListItemIcon>
              <ListItemText primary={"Bonificação"} />
            </ListItem>
            <ListItem role={undefined} dense button>
              <ListItemIcon>
                <Checkbox edge="start" disableRipple checked="true" />
              </ListItemIcon>
              <ListItemText primary={"Compra"} />
            </ListItem>
            <ListItem role={undefined} dense button>
              <ListItemIcon>
                <Checkbox edge="start" disableRipple checked="true" />
              </ListItemIcon>
              <ListItemText primary={"Uso"} />
            </ListItem>
            <ListSubheader>Data da Transação</ListSubheader>
            <ListItem role={undefined} dense button>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Início"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "alterar data inicial"
                  }}
                />
              </MuiPickersUtilsProvider>
            </ListItem>
            <ListItem role={undefined} dense button>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Fim"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "alterar data final"
                  }}
                />
              </MuiPickersUtilsProvider>
            </ListItem>
            <Divider />
            <ListSubheader>Ordenação</ListSubheader>
            <ListItem role={undefined} dense button>
              <Radio
                value="a"
                name="ordenacao"
                inputProps={{ "aria-label": "A" }}
              />{" "}
              Data decrescente
            </ListItem>
            <ListItem role={undefined} dense button>
              <Radio
                value="a"
                name="ordenacao"
                inputProps={{ "aria-label": "A" }}
              />{" "}
              Data ascendente
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Grid container justify="center">
        <Grid item xs={12} sm={7} md={5} lg={4} className={classes.grid}>
          <Grid item container justify="space-between">
            <Grid item>
              <Typography variant="h6" className={classes.saldo}>
                SALDO
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" className={classes.saldo}>
                385
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <List>
            {getTransacoes(filter)}
            <ListSubheader>03/12/2099</ListSubheader>
            <ListItem button>
              <ListItemIcon>
                <SvgIcon muiname="SvgIcon">
                  <path
                    fill="currentColor"
                    d="M2,15V12H5V10L9,13.5L5,17V15H2M22,8.7V10H10V8.7L16,5L22,8.7M10,17H22V19H10V17M15,11H17V16H15V11M11,11H13V16H11V11M19,11H21V16H19V11Z"
                  />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary="Compra" secondary="Paypal - R$ 100,00" />
              <ListItemSecondaryAction>1.000</ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SvgIcon muiname="SvgIcon">
                  <path
                    fill="currentColor"
                    d="M15,15V12H18V10L22,13.5L18,17V15H15M14,8.7V10H2V8.7L8,5L14,8.7M2,17H14V19H2V17M7,11H9V16H7V11M3,11H5V16H3V11M11,11H13V16H11V11Z"
                  />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary="Uso" secondary="Adição de Operadores" />
              <ListItemSecondaryAction>-152</ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SvgIcon muiname="SvgIcon">
                  <path
                    fill="currentColor"
                    d="M2,15V12H5V10L9,13.5L5,17V15H2M22,8.7V10H10V8.7L16,5L22,8.7M10,17H22V19H10V17M15,11H17V16H15V11M11,11H13V16H11V11M19,11H21V16H19V11Z"
                  />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText
                primary="Bonificação"
                secondary="Melhor evento do ano"
              />
              <ListItemSecondaryAction>100</ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListSubheader>02/12/2019</ListSubheader>
            <ListItem button>
              <ListItemIcon>
                <SvgIcon muiname="SvgIcon">
                  <path
                    fill="currentColor"
                    d="M15,15V12H18V10L22,13.5L18,17V15H15M14,8.7V10H2V8.7L8,5L14,8.7M2,17H14V19H2V17M7,11H9V16H7V11M3,11H5V16H3V11M11,11H13V16H11V11Z"
                  />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary="Uso" secondary="Adição de Operadores" />
              <ListItemSecondaryAction>-50</ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SvgIcon muiname="SvgIcon">
                  <path
                    fill="currentColor"
                    d="M15,15V12H18V10L22,13.5L18,17V15H15M14,8.7V10H2V8.7L8,5L14,8.7M2,17H14V19H2V17M7,11H9V16H7V11M3,11H5V16H3V11M11,11H13V16H11V11Z"
                  />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary="Uso" secondary="Adição de Patrocinador" />
              <ListItemSecondaryAction>-300</ListItemSecondaryAction>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </TemplateMenu>
  );
}
