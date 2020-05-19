import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import TemplateMenu2 from "../templates/template-menu2.js";
import PaperPacote from "../components/pacote/paper-pacote.js";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  },
  grid: {
    padding: theme.spacing(2)
  }
}));

export default function Painel() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper);

  return (
    <TemplateMenu2>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PaperPacote
            id="123098"
            nome="Pacote Soldado"
            battletag_ammo="100"
            valor="1,00"
          />
        </Grid>
      </Grid>
    </TemplateMenu2>
  );
}
