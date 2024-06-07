import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

import UndrawEnergizer from "../assets/undraw_energizer.svg";

const SignUp = () => {
  const { register, handleSubmit, control } = useForm();
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = ["1", "2", "3"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = (data) => console.log(data);

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <img
            src={UndrawEnergizer}
            alt="Illustration of a man and woman drinking water"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <form onSubmit={handleSubmit(onSubmit)}>
            {activeStep === 0 && (
              <>
                <Typography variant="h4" gutterBottom>
                  Boas-vindas! Para iniciarmos seu cadastro, informe os{" "}
                  <strong>dados da conta</strong>
                </Typography>
                <TextField
                  label="CPF/CNPJ"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  {...register("cpf", { required: true })}
                />
                <TextField
                  label="Data de Nascimento"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  type="date"
                  {...register("birthDate", { required: true })}
                />
                <TextField
                  label="Senha"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  type="password"
                  {...register("password", { required: true })}
                />
                <TextField
                  label="Confirmação de Senha"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  type="password"
                  {...register("confirmPassword", { required: true })}
                />
              </>
            )}
            {activeStep === 1 && (
              <>
                <Typography variant="h4" gutterBottom>
                  Agora, por favor preencha as seguintes{" "}
                  <strong>informações pessoais</strong>
                </Typography>
                <TextField
                  label="Nome Completo"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  {...register("fullName", { required: true })}
                />
                <TextField
                  label="Nome social"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  {...register("socialName", { required: false })}
                />
                <FormControl variant="outlined" fullWidth margin="normal">
                  <InputLabel id="gender-label">Gênero</InputLabel>
                  <Controller
                    name="gender"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select labelId="gender-label" label="Gênero" {...field}>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="male">Masculino</MenuItem>
                        <MenuItem value="female">Feminino</MenuItem>
                        <MenuItem value="transFemale">Trans Feminino</MenuItem>
                        <MenuItem value="transMale">Trans Masculino</MenuItem>
                        <MenuItem value="nonBinary">Não Binário</MenuItem>
                        <MenuItem value="preferNoToSay">
                          Prefiro não dizer
                        </MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  {...register("email", { required: true })}
                />
              </>
            )}
            {activeStep === 2 && (
              <>
                <Typography variant="h4" gutterBottom>
                  Para encerrar, precisamos de algumas{" "}
                  <strong>informações para contato</strong>
                </Typography>
                <TextField
                  label="CEP"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  {...register("cep", { required: true })}
                />
                <FormControl variant="outlined" fullWidth margin="normal">
                  <InputLabel id="estado-label">Estado</InputLabel>
                  <Controller
                    name="estado"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select labelId="estado-label" label="Estado" {...field}>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="SP">SP</MenuItem>
                        <MenuItem value="RJ">RJ</MenuItem>
                        <MenuItem value="MG">MG</MenuItem>
                        <MenuItem value="RS">RS</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
                <TextField
                  label="Cidade"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  {...register("cidade", { required: true })}
                />
                <TextField
                  label="Logradouro"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  {...register("logradouro", { required: true })}
                />
                <TextField
                  label="Bairro"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  {...register("bairro", { required: true })}
                />
                <TextField
                  label="Número"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  {...register("numero", { required: true })}
                />
                <TextField
                  label="Complemento"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  {...register("complemento")}
                />
                <TextField
                  sx={{
                    borderRadius: "10px",
                  }}
                  label="Celular"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  {...register("celular", { required: true })}
                />
              </>
            )}
            <Grid container justifyContent="space-between" mt={3}>
              <Grid item>
                {activeStep > 0 && (
                  <Button variant="contained" onClick={handleBack}>
                    Voltar
                  </Button>
                )}
              </Grid>
              <Grid item>
                {activeStep < steps.length - 1 ? (
                  <Button variant="contained" onClick={handleNext}>
                    Continuar
                  </Button>
                ) : (
                  <Button variant="contained" type="submit">
                    Finalizar
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
