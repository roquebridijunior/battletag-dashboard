import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TemplateMenu2 from "../templates/template-menu2.js";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  }
}));

export default function Painel() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper);

  return (
    <TemplateMenu2>
      <Grid container spacing={3}>
        <Grid item  xs={12} sm={6} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Typography gutterBottom variant="h5" component="h2">
              Saldo
            </Typography>
            <Typography component="p">BattleTag Ammo: 2.212</Typography>
            <Button variant="contained" component={Link} to="/pacotes">
              Mais Pacotes
            </Button>
          </Paper>
        </Grid>
        <Grid item  xs={12} sm={6} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Typography gutterBottom variant="h5" component="h2">
              Pacote Final de Semana
            </Typography>
            <Typography component="p">100 BatteTag Ammo por R$ 1,00</Typography>
            <Button variant="contained" component={Link} to="/compra/1">
              Comprar
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </TemplateMenu2>
  );
}
