import React from "react";
import "./styles.css";
import Painel from "./pages/painel.js";
import MinhasTransacoes from "./pages/minhas-transacoes.js";
import Transacao from "./pages/transacao.js";
import Transacoes from "./pages/transacoes.js";
import Login from "./pages/login.js";
import Chamado from "./pages/chamado.js";
import Chamados from "./pages/chamados.js";
import MeusChamados from "./pages/meus-chamados.js";
import Saldos from "./pages/saldos.js";
import Pacotes from "./pages/pacotes.js";
import Compra from "./pages/compra.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import deepOrange from "@material-ui/core/colors/deepOrange";
import grey from "@material-ui/core/colors/grey";

import GunPlayWoff2 from "./assets/fonts/gunplay_rg-webfont.woff2";
import GunPlayWoff from "./assets/fonts/gunplay_rg-webfont.woff";

const theme = createMuiTheme({
  palette: {
    primary: { main: grey[900] },
    secondary: { main: grey[500] },
    error: { main: red[500] },
    success: { main: green[500] },
    warning: { main: deepOrange[500] },
    type: "dark"
  },
  typography: {
    fontFamily: "gunplayregular"
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": {
          fontFamily: "gunplayregular",
          fontStyle: "normal",
          fontDisplay: "swap",
          fontWeight: "normal",
          src: `
            local('GunPlay'),
            local('GunPlay Regular'),
            url(${GunPlayWoff2}) format('woff2'),
            url(${GunPlayWoff}) format('woff2')
          `
        }
      }
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route component={Painel} exact path="/" />
          <Route component={Pacotes} exact path="/pacotes" />
          <Route component={Painel} exact path="/painel" />
          <Route component={MeusChamados} exact path="/meus-chamados" />
          <Route path="/minhas-transacoes" exact component={MinhasTransacoes} />
          <Route path="/saldos" exact component={Saldos} />
          <Route path="/transacao" exact component={Transacao} />
          <Route path="/transacoes" exact component={Transacoes} />
          <Route path="/chamado" exact component={Chamado} />
          <Route path="/chamados" exact component={Chamados} />
          <Route path="/login" exact component={Login} />
          <Route path="/compra/:compraId" exact component={Compra} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
