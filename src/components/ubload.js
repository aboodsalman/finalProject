import React, { useState, Component } from "react";
import { TextField, Button, Grid , MenuItem , InputLabel} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Select from '@material-ui/core/Select';
import db from "../firebase";
import Nav from './sections/nav'
// import DisplayImage from './img'

const useStyles = makeStyles(theme => ({
  form: {
    width: "50%",
  },
  container: {
    marginTop: '80px'
  },
  input: {
    width: "100%",
  },
  button: {
    margin: theme.spacing(2, 0, 0),
    width: "50%",
  },
}));

const Upload = () => {
  const classes = useStyles();
  const [type, setType] = useState([]);
  const [url, setUrl] = useState([]);
  const [productname, setProductname] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);
  const [address, setAddress] = useState([]);
  const [phone, setPhone] = useState([]);
  
  const handleSubmit = e => {
    e.preventDefault();
    db.collection("posts").doc()
      .set({
        url: url,
        productname: productname,
        price: price,
        description: description,
        type: type,
        address: address,
        phone: phone,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        setUrl('');
        setProductname('');
        setPrice('');
        setDescription('');
        setType('');
        setAddress('');
        setPhone('');
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    alert("Thanks for posting on Ebay!");
    db.collection("posts").doc().delete().then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
  };
  
  return (
    <Grid
      item
      container
      xs={12}
      sm={12}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.container}
    >
      <Nav/>
      <h2>Make a post on Elec.Ps!</h2>
      <table className={classes.form}>
        <tbody>
          <tr>
            <td>
              <label> Product Name</label>
            </td>
            <td>
            <InputLabel id="label">Type</InputLabel>
            <Select labelId="label" id="select" value={type}
            onChange={event => {
                setType(event.target.value);
              }}>
                <MenuItem value="mobile">Cell Phones</MenuItem>
                <MenuItem value="tv">Television & Videos</MenuItem>
                <MenuItem value="computer">Computers</MenuItem>
                <MenuItem value="camera">Cameras</MenuItem>
                <MenuItem value="game">Video Game Consoles</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
            </Select>
              <TextField
                id="productname"
                label="productname"
                value={productname}
                onChange={event => {
                  setProductname(event.target.value);
                }}
                className={classes.input}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> Description</label>
            </td>
            <td>
              <TextField
                id="description"
                label="Description"
                value={description}
                onChange={event => {
                  setDescription(event.target.value);
                }}
                className={classes.input}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> Price ($) </label>
            </td>
            <td>
              <TextField
                id="standard-number"
                label="Price"
                value={price}
                onChange={event => {
                  setPrice(event.target.value);
                }}
                className={classes.input}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> Image file</label>
            </td>
            <td>
              <TextField
                id="image-url"
                label="Image Url"
                value={url}
                onChange={event => {
                  setUrl(event.target.value);
                }}
                className={classes.input}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> Address</label>
              </td>
              <td>
              <TextField
                id="address"
                label="Address"
                value={address}
                onChange={event => {
                  setAddress(event.target.value);
                }}
                className={classes.input}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> Phone Number</label>
              </td>
              <td>
              <TextField
                id="phone"
                label="Phone"
                value={phone}
                onChange={event => {
                  setPhone(event.target.value);
                }}
                className={classes.input}
              />
            </td>
          </tr>
          {/* <tr><td><DisplayImage/></td></tr> */}
        </tbody>
      </table>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className={classes.button}
      >
        Submit
      </Button>
    </Grid>
  );
};

export default Upload;