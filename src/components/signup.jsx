import React from "react";
import { Grid, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SignupForm from "./signupForm.jsx";
import logo from '../assets/logo.png'
import './login.css'
const useStyles = makeStyles((theme) => ({
  formContainer: {
    paddingTop: theme.spacing(5),
    color: 'red'
  },
  formContainer: {
    marginTop : '-90px',
    fontSize : '20px',
  },
}));

const SignUp = () => {
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
        className={classes.formContainer}
      >

        <div className="signup">
        <img src={logo} style={{marginTop: '40px'}}/>
  
        <SignupForm ></SignupForm>
        </div>
        <Divider variant="fullWidth" />
      </Grid>
      <Grid item xs={1} sm={4} />
    </Grid>
  );
};

export default SignUp;
