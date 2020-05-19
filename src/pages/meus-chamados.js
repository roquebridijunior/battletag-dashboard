import React from "react";
import { Link } from "react-router-dom";
import TemplateMenu2 from "../templates/template-menu2.js";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

export default function MeusChamados() {
  const classes = useStyles();

  return (
    <TemplateMenu2>
      Meus Chamados
      <Fab className={classes.fab} component={Link} to="/chamado">
        <AddIcon />
      </Fab>
    </TemplateMenu2>
  );
}
