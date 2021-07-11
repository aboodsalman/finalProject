import React, { useState } from "react";
import { Grid, TextField, Button, FormControlLabel, Radio, RadioGroup, FormControl, FormLabel } from "@material-ui/core";
import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import db from "../firebase";

const useStyles = makeStyles((theme) => ({
  form: {
    margin: theme.spacing(3, 0, 0),
  },
  input: {
    width: "30%",
    'margin-top' : '15px',
    'background-color' : '#252525',
    borderWidth: '0px',
    borderBottom: '1px solid #fcd462',
    color: '#fcd462',
    fontSize : '18px',
    'border-radius' : '10px',
    padding : '20px'
  },
  name: {
    display: 'flex',
    flexDirection : 'row',
    marginLeft: '165px',
    marginTop: '-120px'
  },
  button: {
    margin: theme.spacing(2, 0, 0),
    width: "65%",
  },
  formControl: {
    margin: theme.spacing.unit * 3,
    color: '#b6b6b6',
    marginLeft: '15px',
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    display : 'flex',
    flexDirection: 'row',
  },
  click: {
    display : 'flex',
    flexDirection : 'row',
  },
}));

const SignupForm = () => {
  const classes = useStyles();
  const [firstname, SetFirstname] = useState("");
  const [lastname, SetLastname] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [gender, SetGender] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    db.collection("signUps").doc()
      .set({
        firstname: firstname,
        lastname: lastname,
        password: password,
        email: email,
        gender: gender,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        SetFirstname('');
        SetLastname('');
        SetEmail('');
        SetPassword('');
        SetGender('');
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

      <div className={classes.name}>
      <input type="text"
      placeholder="First Name"
      value={firstname}
      className={classes.input}
      onChange={(event) => {
        SetFirstname(event.target.value);
      }}></input>

    <input type="text"
      placeholder="Last Name"
      value={lastname}
      className={classes.input}
      style={{ marginLeft: '60px', }}
      onChange={(event) => {
        SetLastname(event.target.value);
      }}></input></div>

      <input type="text"
      placeholder="Email or Phone Number"
      value={email}
      className={classes.input}
      onChange={(event) => {
        SetEmail(event.target.value);
      }}></input>

      <input type="password"
      placeholder="Password"
      value={password}
      className={classes.input}
      onChange={(event) => {
        SetPassword(event.target.value);
      }}></input>

      <Grid className={classes.click}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{color: '#fcd462', marginLeft: '-110px'}}>Gender</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={gender}
            onChange={(event) => {
              SetGender(event.target.value);
              }}
          >
            <FormControlLabel value="female" control={<Radio color="primary"/>} label="Female" />
            <FormControlLabel value="male" control={<Radio color="primary"/>} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

      <Button onClick={handleSubmit}
      style={{
        marginLeft : '40px',
        marginTop : '-20px',
       }}>
      <Link to ='/all'
        style={{
          textDecoration: 'none',
          fontSize : '17px',
          padding : '10px',
          border : '1px solid #4e4e4e',
          color : '#fcd462',
          borderRadius : '6px',
         }}>
            <div>
            Confirm</div>
        </Link></Button></Grid>
    </Grid>
  );
};

export default SignupForm;
