import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";

import BtMenu from "../components/menu/bt-menu.js";

const useStyles = makeStyles(theme => ({
  toolbarTitle: {
    flexGrow: 1
  },
  brandName: {
    padding: theme.spacing(2)
  },
  body: {
    paddingTop: theme.spacing(8)
  }
}));

export default function TemplateMenu3(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Drawer open={props.menuState} onClose={props.setMenuState(false)}>
        <div
          role="presentation"
          onClick={props.setMenuState(false)}
          onKeyDown={props.setMenuState(false)}
        >
          <BtMenu />
        </div>
      </Drawer>
      <div className={classes.body}>{props.children}</div>
    </React.Fragment>
  );
}
