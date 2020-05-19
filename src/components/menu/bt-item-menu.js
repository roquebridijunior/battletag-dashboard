import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default function BtItemMenu(props) {
  return (
    <ListItem button component={Link} to={props.caminho}>
      <ListItemIcon>{props.children}</ListItemIcon>
      <ListItemText primary={props.nome} />
    </ListItem>
  );
}
