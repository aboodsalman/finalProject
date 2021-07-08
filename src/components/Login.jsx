import React from "react";
import { Grid, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LoginForm from "./LoginForm.jsx";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    paddingTop: theme.spacing(5),
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
        className={classes.formContainer}
      >
        <Typography variant="h3">Hello</Typography>
        <Typography variant="body2" gutterBottom>
          Sign in to eBay or create an account.
        </Typography>
        <LoginForm></LoginForm>
        <Divider variant="fullWidth" />
      </Grid>
      <Grid item xs={1} sm={4} />
    </Grid>
  );
};

export default Login;
