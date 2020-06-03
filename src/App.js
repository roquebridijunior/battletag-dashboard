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
    secondary: { main: grey[400] },
    error: { main: red[400] },
    success: { main: green[400] },
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
  const [menuState, setMenuState] = React.useState(false);

  const toggleMenu = state => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuState(state);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Painel menuState={menuState} setMenuState={toggleMenu} />
          </Route>
          <Route exact path="/pacotes">
            <Pacotes menuState={menuState} setMenuState={toggleMenu} />
          </Route>
          <Route exact path="/painel">
            <Painel menuState={menuState} setMenuState={toggleMenu} />
          </Route>
          <Route exact path="/meus-chamados">
            <MeusChamados menuState={menuState} setMenuState={toggleMenu} />
          </Route>
          <Route path="/minhas-transacoes" exact>
            <MinhasTransacoes menuState={menuState} setMenuState={toggleMenu} />
          </Route>
          <Route path="/saldos" exact>
            <Saldos menuState={menuState} setMenuState={toggleMenu} />
          </Route>
          <Route path="/transacao" exact>
            <Transacao menuState={menuState} setMenuState={toggleMenu} />
          </Route>
          <Route path="/transacoes" exact>
            <Transacoes menuState={menuState} setMenuState={toggleMenu} />
          </Route>
          <Route path="/chamado" exact>
            <Chamado menuState={menuState} setMenuState={toggleMenu} />
          </Route>
          <Route path="/chamados" exact>
            <Chamados menuState={menuState} setMenuState={toggleMenu} />
          </Route>
          <Route path="/login" exact>
            <Login menuState={menuState} setMenuState={toggleMenu} />
          </Route>
          <Route path="/compra/:compraId" exact>
            <Compra menuState={menuState} setMenuState={toggleMenu} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
