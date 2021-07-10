import React from "react";
import './login.css'
import { Grid, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png'
import LoginForm from "./LoginForm.jsx";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop : '-100px',
    fontSize : '20px',
  },
  signUp: {
    fontSize : '18px',
    display : 'flex',
    flexDirection: 'row',
    marginLeft : '540px',
    marginTop : '10px'
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Grid item container>
      <Grid item xs={1} sm={4}></Grid>
      <Grid
        item
        container
        xs={10}
        sm={4}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <div className="login">
        <img src={logo} className="logo"/>
        <Typography variant="body2" gutterBottom
        className={classes.formContainer}>
          Sign in to Elec.Ps or create an account
        </Typography>
        <LoginForm></LoginForm>
        <Typography variant="body2" gutterBottom
        className={classes.signUp}>
        Don't you have an account? <Link to ='/signup'
        style={{
          color : '#b6b6b6',
         }}>
            <div>
             SignUp</div>
        </Link>
        </Typography>
        </div>
        <Divider variant="fullWidth" />
      </Grid>
      <Grid item xs={1} sm={4} />
    </Grid>
  );
};

export default Login;
