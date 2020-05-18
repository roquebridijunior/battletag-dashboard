import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TemplateMenu from "../templates/template-menu.js";

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(3, 2)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  root: {
    padding: theme.spacing(2)
  }
}));

function getSteps() {
  return ["Confira o pacote", "Indetifique-se", "Pagamento", "Conclusão"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Pacote";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}

export default function Compra() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  return (
    <TemplateMenu>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.root}>
            <Stepper activeStep={activeStep}>
              <Step key="pacote">
                <StepLabel>Confira o Pacote</StepLabel>
                <Typography variant="caption">Pacote 2</Typography>
              </Step>
              <Step key="identificacao">
                <StepLabel>Identifique-se</StepLabel>
                <Typography variant="caption">
                  roquebridi@hotmail.com
                </Typography>
              </Step>
              <Step key="pagamento">
                <StepLabel>Pagamento</StepLabel>
              </Step>
              <Step key="conclusao">
                <StepLabel>Conclusão</StepLabel>
              </Step>
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    Obrigado por realizar a compra. Seus 10.000 BattelTag Ammo
                    estão disponíveis na sua conta
                  </Typography>
                </div>
              ) : (
                <div>
                  <Typography className={classes.instructions}>
                    {getStepContent(activeStep)}
                  </Typography>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Voltar
                    </Button>
                    {isStepOptional(activeStep) && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSkip}
                        className={classes.button}
                      >
                        Pular
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1
                        ? "Finalizar"
                        : "Próximo"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </TemplateMenu>
  );
}
