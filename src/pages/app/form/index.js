import React, { useState } from 'react';
import { Button, Card, 
  CardContent, CardHeader, 
  Divider, Grid, TextField} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttons: {
    padding: 10,
    textAlign: 'center',
  },
}));

const states = [
  {
    value: 'masc',
    label: 'Masculino'
  },
  {
    value: 'fem',
    label: 'Feminino'
  },
  {
    value: 'other',
    label: 'Outro'
  }
];

const marital = [
  {
    value: 'sing',
    label: 'Solteiro(a)'
  },
  {
    value: 'married',
    label: 'Casado(a)'
  },
  {
    value: 'other',
    label: 'Outro'
  }
]

const Form = (props) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: 'Katarina',
    nickname: 'Katarina',
    occupation: 'Desenvolvedor',
    obs: 'Obs'
  });

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleChangeBox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader title="Cadastro"/>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nome"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Sexo"
                name="sexo"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined">
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Apelido"
                name="lastName"
                onChange={handleChange}
                required
                value={values.nickname}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Estado Civil"
                name="sexo"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined">
                {marital.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Profissão"
                name="country"
                onChange={handleChange}
                required
                value={values.occupation}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Observações"
                name="country"
                onChange={handleChange}
                value={values.obs}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox checked={state.checkedA}
                    onChange={handleChangeBox}
                    name="checkedA"
                    color="primary"
                  />
                }
                label="Básica"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChangeBox}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Moderna"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedC}
                    onChange={handleChangeBox}
                    name="checkedC"
                    color="primary"
                  />
                }
                label="Top"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedD}
                    onChange={handleChangeBox}
                    name="checkedD"
                    color="primary"
                  />
                }
                label="Premium"
              />
            </Grid>
          </Grid>          
        </CardContent>
        <Divider />
        <Grid container spacing={3} className={classes.buttons}>
          <Grid item xs={6}>
            <Button color="primary" variant="outlined">
              Cancelar
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button color="primary" variant="contained">
              Salvar
            </Button>
          </Grid>
        </Grid>
      </Card>
    </form>
  );
};

export default Form;