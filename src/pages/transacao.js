import React from "react";
import TemplateMenu2 from "../templates/template-menu2.js";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";

import DialogActions from "@material-ui/core/DialogActions";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

export default function Transacao() {
  const [tipo_transacao, setAge] = React.useState("");

  const validate = values => {
    const errors = {};
    if (!values.conta_destino) {
      errors.conta_destino = "Campo obrigatório";
    } else if (values.conta_destino.length > 15) {
      errors.conta_destino = "Must be 15 characters or less";
    }

    if (!values.battletag_ammo) {
      errors.battletag_ammo = "Campo obrigatório";
    } else if (values.battletag_ammo.value > 0) {
      errors.battletag_ammo =
        "A quantidade de BattleTag Ammo precisa ser maior que 0";
    }

    if (!values.email) {
      errors.email = "Campo obrigatório";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      battletag_ammo: "0",
      tipo_transacao: "bonificado",
      conta_destino: ""
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <TemplateMenu2>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <SwapHorizIcon />
                  Transações
                </Typography>
                <Typography variant="body2" component="p">
                  Nova transação
                </Typography>

                <form onSubmit={formik.handleSubmit}>
                  <FormControl fullWidth required>
                    <TextField
                      required
                      id="conta_destino"
                      label="Conta de destino"
                      helperText="Conta de destino que será efetuada a transação"
                      onChange={formik.handleChange}
                      value={formik.values.conta}
                    />
                  </FormControl>
                  <FormControl fullWidth required>
                    <InputLabel id="tipo_transacao">
                      Tipo da Transação
                    </InputLabel>
                    <Select
                      labelId="tipo_transacao"
                      id="tipo_transacao"
                      value={tipo_transacao}
                    >
                      <MenuItem value="bonificado">Bonificação</MenuItem>
                    </Select>
                  </FormControl>
                  <br />
                  <FormControl fullWidth>
                    <TextField
                      required
                      id="battletag_ammo"
                      label="BattleTag Ammo"
                      helperText="Quantidade de BattleTag Ammo que será transacionado"
                      onChange={formik.handleChange}
                      value={formik.values.battletag_ammo}
                    />
                  </FormControl>

                  <DialogActions>
                    <Button
                      type="button"
                      className="outline"
                      //onClick={handleReset}
                      //disabled={!dirty || isSubmitting}
                    >
                      Limpar
                    </Button>
                    <Button variant="contained" type="submit">
                      Transacionar
                    </Button>
                  </DialogActions>
                </form>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </TemplateMenu2>
  );
}
