import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import AccountCircletIcon from "@material-ui/icons/AccountCircle";
import ReceiptIcon from "@material-ui/icons/Receipt";
import StoreIcon from "@material-ui/icons/Store";
import MenuIcon from "@material-ui/icons/Menu";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import BarChartIcon from "@material-ui/icons/BarChart";

const useStyles = makeStyles(theme => ({
  toolbarTitle: {
    flexGrow: 1
  },
  brandName: {
    padding: theme.spacing(2),
  },
  body: {
    paddingTop: theme.spacing(7),
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
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  return (
    <div>
      <React.Fragment>
        <Drawer open={state} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
          <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Typography variant="h5" component="h2"
             className={classes.brandName}>
              BATTLETAG
            </Typography>
            <Divider />
            <List component="nav">
              <ListSubheader component="div">Loja</ListSubheader>
              <ListItem button component={Link} to="/pacotes">
                <ListItemIcon>
                  <StoreIcon />
                </ListItemIcon>
                <ListItemText primary="Pacotes" />
              </ListItem>
              <ListSubheader component="div">Suporte</ListSubheader>
              <ListItem button component={Link} to="/meus-chamados">
                <ListItemIcon>
                  <ReceiptOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Meus Chamados" />
              </ListItem>
              <ListSubheader component="div">Conta</ListSubheader>
              <ListItem button component={Link} to="/minhas-transacoes">
                <ListItemIcon>
                  <SwapHorizIcon />
                </ListItemIcon>
                <ListItemText primary="Minhas Transações" />
              </ListItem>
              <Divider />
              <ListSubheader component="div">Admin</ListSubheader>
              <ListItem button component={Link} to="/saldos">
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Saldos" />
              </ListItem>
              <ListItem button component={Link} to="/transacoes">
                <ListItemIcon>
                  <SwapHorizontalCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Transações" />
              </ListItem>
              <ListItem button component={Link} to="/chamados">
                <ListItemIcon>
                  <ReceiptIcon />
                </ListItemIcon>
                <ListItemText primary="Chamados" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </React.Fragment>
      <AppBar>
        <Toolbar >
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
      <div className={classes.body}>
        {props.children}
      </div>
    </div>
  );
}