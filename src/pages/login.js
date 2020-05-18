import React from "react";
import TemplateMenu from "../templates/template-menu.js";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidOutlinedIcon from "@material-ui/icons/AndroidOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3, 0, 0)
  },
  secondary: {
    margin: theme.spacing(3, 0, 0)
  }
}));

export default function Login() {
  const classes = useStyles();
  return (
    <TemplateMenu>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Login
                </Typography>
                <Typography variant="body2" component="p">
                  Faça seu login
                </Typography>

                <Button
                  fullWidth
                  className={classes.button}
                  size="large"
                  variant="contained"
                  startIcon={<AndroidOutlinedIcon />}
                >
                  Login com o Google
                </Button>

                <Button
                  fullWidth
                  className={classes.button}
                  size="large"
                  variant="contained"
                  startIcon={<AppleIcon />}
                >
                  Login com a Apple
                </Button>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.button}
                >
                  Ainda não tem uma conta? Baixe o aplicativo e cadastre-se
                </Typography>

                <Button
                  fullWidth
                  className={classes.button}
                  size="large"
                  variant="outlined"
                  startIcon={<AndroidOutlinedIcon />}
                >
                  Baixe no Google Play
                </Button>

                <Button
                  fullWidth
                  className={classes.button}
                  size="large"
                  variant="outlined"
                  startIcon={<AppleIcon />}
                >
                  Baixe na Apple Store
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </TemplateMenu>
  );
}
