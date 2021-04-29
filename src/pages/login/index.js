import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { auth } from '../../service/auth';
import { showProgress, hideProgress } from '../../service/message';
import MessageDialog from '../../components/dialog';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 300,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    flexGrow: 1,
  },
  error: {
    color: 'red',
    fontSize: 12
  },
  link: {
    textAlign: 'end'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [disableSubmit] = useState(false);

  useEffect(()=>{
    props.hideProgress();
  },[])

  const formik = useFormik ({
    initialValues: { email: '', password: ''},
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email inválido')
        .required('Email obrigatório!'),
      password: Yup.string()
        .required('Senha obrigatória!')
        .max(40, 'Senha muito longa'),
      }),
      onSubmit: values => {
        props.auth(values);
        props.showProgress()
      },
  });

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Sunne
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.container} component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography> 
          <form onSubmit={formik.handleSubmit}>
            <TextField 
              variant="outlined" 
              type="email" 
              name="email"
              margin="normal"
              fullWidth
              label="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              inputProps={{ maxLength: 70 }}
            />
            <div>
              {formik.touched.email && formik.errors.email ? (
                <Typography className={classes.error}>{formik.errors.email}</Typography>
              ) : null}
            </div>
            <TextField 
              variant="outlined" 
              type="password" 
              name="password"
              margin="normal"
              fullWidth
              label="Senha"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              inputProps={{ maxLength: 40 }}
            />
            <div>
              {formik.touched.password && formik.errors.password ? (
                <Typography className={classes.error}>{formik.errors.password}</Typography>
              ) : null}
            </div>
            <Button type="submit" 
              disabled={disableSubmit} 
              fullWidth variant="contained" 
              color="primary" 
              className={classes.submit} 
              onBlur={formik.handleBlur}>
              Entrar
            </Button>
          </form>
          <div hidden={props.progress}>
            <CircularProgress/>
          </div>
          <MessageDialog/>
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  message: state.message.message,
  progress: state.message.progress
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({auth, showProgress, hideProgress}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);