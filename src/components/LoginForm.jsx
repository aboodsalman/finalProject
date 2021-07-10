import React, { useState } from "react";
import { Grid, Typography, Button} from "@material-ui/core";
import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import db from "../firebase";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    margin: theme.spacing(3, 0, 0),
  },
  input: {
    width: "30%",
    'margin-top' : '15px',
    'background-color' : '#1c1b19',
    borderWidth: "1px",
    borderColor: "#fcd462",
    color: 'white',
    fontSize : '18px',
    'border-radius' : '10px',
    padding : '20px'
  },
  button: {
    margin: theme.spacing(2, 0, 0),
    width: "65%",
  },
  forget: {
    color : '#e4e4e4',
    fontSize : '13px',
    textDecoration : 'double',
    marginTop : '35px',
    marginLeft : '15px'
  },
  click: {
    display : 'flex',
    flexDirection : 'row',
    textDecoration : 'double'
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    db.collection("users").doc()
      .set({
        username: username,
        password: password,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        setUsername('');
        setPassword('');
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
        <Grid
      item
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.form}
    >
      <input type="text"
      placeholder="Email or Phone Number"
      value={username}
      className={classes.input}
      onChange={(event) => {
        setUsername(event.target.value);
      }}></input>

      <input type="password"
      placeholder="Password"
      value={password}
      className={classes.input}
      onChange={(event) => {
        setPassword(event.target.value);
      }}></input>

      <Grid className={classes.click}>
      <Typography variant="body2" gutterBottom
        className={classes.forget}>
        Forgot Password?</Typography>
        <Button onClick={handleSubmit}
        style={{
          textDecoration: 'none',
          fontSize : '17px',
          padding : '10px',
          border : '1px solid #4e4e4e',
          color : '#fcd462',
          marginLeft : '250px',
          marginTop : '10px',
          borderRadius : '6px',
         }}>
      <Link to ='/all'
      style={{
        textDecoration: 'none',
        color : '#fcd462',
       }}>
            <div>
            Log In</div>
        </Link></Button></Grid>

        
    </Grid>
  );
};

export default LoginForm;
