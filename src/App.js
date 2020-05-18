import React from "react";
import "./styles.css";
import Painel from "./pages/painel.js";
import MinhasTransacoes from "./pages/minhas-transacoes.js";
import Transacoes from "./pages/transacoes.js";
import Login from "./pages/login.js";
import Chamados from "./pages/chamados.js";
import MeusChamados from "./pages/meus-chamados.js";
import Saldos from "./pages/saldos.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const palette = {
  primary: { main: "#212121", contrastText: "#ffffff" },
  secondary: { main: "#263238", contrastText: "#ffffff" },
  type: "dark"
};
const themeName = "BattleTag Theme";

const theme = createMuiTheme({ palette, themeName });

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Painel} />
            <Route path="/painel" exact component={Painel} />
            <Route path="/meus-chamados" exact component={MeusChamados} />
            <Route
              path="/minhas-transacoes"
              exact
              component={MinhasTransacoes}
            />
            <Route path="/saldos" exact component={Saldos} />
            <Route path="/transacoes" exact component={Transacoes} />
            <Route path="/chamados" exact component={Chamados} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
