import React from "react";
import TemplateMenu from "../templates/template-menu.js";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

export default function MeusChamados() {
  const useStyles = makeStyles(theme => ({
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <TemplateMenu>
      Meus Chamados
      <Fab className={classes.fab}>
        <AddIcon />
      </Fab>
    </TemplateMenu>
  );
}
