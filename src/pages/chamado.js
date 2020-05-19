import React from "react";
import TemplateMenu2 from "../templates/template-menu2.js";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AndroidOutlinedIcon from "@material-ui/icons/AndroidOutlined";
import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3, 0, 0)
  },
  secondary: {
    margin: theme.spacing(3, 0, 0)
  }
}));

export default function Chamdo() {
  const classes = useStyles();
  const [tipo_transacao, setAge] = React.useState("");

  return (
    <TemplateMenu2>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Chamado
                </Typography>
                <Typography variant="body2" component="p">
                  Faça uma chamado para tirar dúvidas
                </Typography>

                <form autoComplete="off">
                  <FormControl required className={classes.formControl}>
                    <InputLabel id="tipo-transacao">Tipo Transação</InputLabel>
                    <Select
                      labelId="tipo-transacao"
                      id="tipo-transacao"
                      value={tipo_transacao}
                    >
                      <MenuItem value="bonificado">Bonificado</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl required className={classes.formControl}>
                    <TextField id="battletag-ammo" label="BattleTag Ammo" />
                  </FormControl>

                  <Button
                    fullWidth
                    className={classes.button}
                    size="large"
                    variant="contained"
                    startIcon={<AndroidOutlinedIcon />}
                  >
                    Cadastrar
                  </Button>
                </form>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </TemplateMenu2>
  );
}
