import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TemplateMenu2 from "../templates/template-menu2.js";
import PaperPacote from "../components/pacote/paper-pacote.js";

const useStyles = makeStyles(theme => ({
  grid: {
    padding: theme.spacing(2)
  }
}));

export default function Painel() {
  const classes = useStyles();

  return (
    <TemplateMenu2>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PaperPacote
            id="123098"
            nome="Pacote Soldado"
            battletag_ammo="100"
            valor="1,00"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PaperPacote
            id="230984"
            nome="Pacote Sargento"
            battletag_ammo="1.000"
            valor="10,00"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PaperPacote
            id="23094"
            nome="Pacote Tenente"
            battletag_ammo="10.000"
            valor="100,00"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PaperPacote
            id="12353"
            nome="Pacote Capitão"
            battletag_ammo="100.000"
            valor="1.000,00"
          />
        </Grid>
      </Grid>
    </TemplateMenu2>
  );
}
