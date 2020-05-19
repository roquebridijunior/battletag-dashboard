import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  }
}));

export default function PaperPacote(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography gutterBottom variant="h5" component="h2">
        {props.nome}
      </Typography>
      <Typography component="p">
        {props.battletag_ammo} BatteTag Ammo por {props.valor}
      </Typography>
      <Button variant="contained" component={Link} to="/compra/{props.id}">
        Comprar
      </Button>
    </Paper>
  );
}
