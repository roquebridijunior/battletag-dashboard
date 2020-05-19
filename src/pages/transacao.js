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
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3, 0, 0)
  },
  secondary: {
    margin: theme.spacing(3, 0, 0)
  }
}));

export default function Transacao() {
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
                  <SwapHorizIcon />
                  Transação
                </Typography>
                <Typography variant="body2" component="p">
                  Nova transação
                </Typography>

                <form autoComplete="off">
                  <FormControl
                    fullWidth
                    required
                    className={classes.formControl}
                  >
                    <InputLabel id="tipo-transacao">
                      Tipo da Transação
                    </InputLabel>
                    <Select
                      labelId="tipo-transacao"
                      id="tipo-transacao"
                      value={tipo_transacao}
                    >
                      <MenuItem value="bonificado">Bonificação</MenuItem>
                    </Select>
                  </FormControl>
                  <br />
                  <FormControl
                    fullWidth
                    required
                    className={classes.formControl}
                  >
                    <TextField
                      id="battletag-ammo"
                      label="BattleTag Ammo"
                      helperText="Quantidade de BattleTag Ammo que será transacionado"
                    />
                  </FormControl>

                  <Button
                    fullWidth
                    className={classes.button}
                    size="large"
                    variant="contained"
                  >
                    Transacionar
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
