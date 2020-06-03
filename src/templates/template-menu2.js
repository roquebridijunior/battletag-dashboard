import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import AccountCircletIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";

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

export default function TemplateMenu2(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState();

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <div>
      <CssBaseline />
      <React.Fragment>
        <Drawer open={state} onClose={toggleDrawer(false)}>
          <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <BtMenu />
          </div>
        </Drawer>
      </React.Fragment>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Painel
          </Typography>
          <IconButton color="inherit">
            <Badge>
              <AccountCircletIcon
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to="/login">
                  Login
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/logout">
                  Logout
                </MenuItem>
              </Menu>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.body}>{props.children}</div>
    </div>
  );
}
