import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import TemplateMenu from "../templates/template-menu.js";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  }
}));

export default function Painel() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper);

  return (
    <div>
      <TemplateMenu>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>123</Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>12321</Paper>
          </Grid>
        </Grid>
      </TemplateMenu>
    </div>
  );
}
