import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TemplateMenu2 from "../templates/template-menu2.js";
import { Link } from "react-router-dom";

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

  return (
    <TemplateMenu2>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h5" component="h2">
              Pacote Soldado
            </Typography>
            <Typography component="p">100 BatteTag Ammo por R$ 1,00</Typography>
            <Button variant="contained" component={Link} to="/compra/1">
              Comprar
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>
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
    </TemplateMenu2>
  );
}
