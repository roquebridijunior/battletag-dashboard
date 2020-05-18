import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TemplateMenu from "../templates/template-menu.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  }
}));

export default function Painel() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper);

  return (
    <div>
      <TemplateMenu>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className={fixedHeightPaper}>
              <Typography gutterBottom variant="h5" component="h2">
                Pacote Soldado
              </Typography>
              <Typography component="p">
                100 BatteTag Ammo por R$ 1,00
              </Typography>
              <Button variant="contained" component={Link} to="/compra/1">
                Comprar
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className={fixedHeightPaper}>
              <Typography gutterBottom variant="h5" component="h2">
                Pacote Sargento
              </Typography>
              <Typography component="p">
                1.000 BatteTag Ammo por R$ 9,90
              </Typography>
              <Button variant="contained" component={Link} to="/compra/2">
                Comprar
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className={fixedHeightPaper}>
              <Typography gutterBottom variant="h5" component="h2">
                Pacote Tenente
              </Typography>
              <Typography component="p">
                10.000 BatteTag Ammo por R$ 95,00
              </Typography>
              <Button variant="contained" component={Link} to="/compra/3">
                Comprar
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className={fixedHeightPaper}>
              <Typography gutterBottom variant="h5" component="h2">
                Pacote Capitão
              </Typography>
              <Typography component="p">
                100.000 BatteTag Ammo por R$ 900,00
              </Typography>
              <Button variant="contained" component={Link} to="/compra/4">
                Comprar
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </TemplateMenu>
    </div>
  );
}
