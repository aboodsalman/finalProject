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
    marginTop: '-50px',
    marginLeft: '350px'
  },
  container: {
    marginTop: '70px',
    backgroundColor: '#1b1c19'
  },
  input: {
    width: "80%",
    'margin-top' : '10px',
    'background-color' : '#252525',
    borderWidth: "0px",
    borderColor: "#fcd462",
    color: '#fcd462',
    fontSize : '18px',
    borderBottom: '1px solid',
    'border-radius' : '10px',
    padding : '15px'
  },
  inputImg: {
    width: "16%",
    paddingBottom: '10px',
    marginLeft: '-730px',
    marginTop : '100px',
    'background-color' : '#252525',
    borderWidth: "0px",
    borderColor: "#fcd462",
    borderBottom: '1px solid',
    color: '#fcd462',
    fontSize : '18px',
    'border-radius' : '10px',
    padding : '15px',
  },
  img: {
    position: 'absolute',
    width: "19%",
    marginLeft: '-370px',
    'border-radius' : '10px',
    borderColor: 'black'
  },
  button: {
    margin: theme.spacing(2, 0, 0),
    width: "12%",
    marginBottom: '50px',
    backgroundColor: '#fcd462', 
    color: 'black',
    fontSize: '17px',
    fontWeight: 'bold',
    marginLeft: '670px'
  },
  option:{
    backgroundColor: '#1c1b19',
    color: 'white',
    fontSize : '18px',
  },
  select:{
    backgroundColor: '#252525',
    border: '0px',
    padding: '15px',
    borderRadius: '10px',
    color: '#fcd462',
    fontSize : '18px',
    borderBottom: '1px solid #fcd462',
  },
  label:{
    color: 'white',
    fontSize: '16px'
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
    db.collection("all").doc()
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

        db.collection(type).doc()
      .set({
        url: url,
        productname: productname,
        price: price,
        description: description,
        type: type,
        address: address,
        phone: phone,
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    alert("Thanks for posting on ELEC.PS!");
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
      <input type="text"
                placeholder="Image Url"
                value={url}
                className={classes.inputImg}
                onChange={(event) => {
                  setUrl(event.target.value);
                }}></input>

                <img src={url} className={classes.img}/>
      <table className={classes.form}>
        <tbody>

        <tr>
            <td>
            <InputLabel id="label" className={classes.label}>Type</InputLabel></td>
            <td>
            <select id="select" name="cars"  value={type} className={classes.select}
            onChange={event => {
                setType(event.target.value);
              }}>
              <option value="mobile" className={classes.option}>Cell Phones</option>
              <option value="tv" className={classes.option}>Television & Videos</option>
              <option value="computer" className={classes.option}>Computers</option>
              <option value="camera" className={classes.option}>Cameras</option>
              <option value="game" className={classes.option}>Video Game Consoles</option>
              <option value="accessories" className={classes.option}>Accessories</option>
            </select></td>
          </tr>
        <tr>
            </tr>

          <tr>
            <td>
              <label className={classes.label}> Product Name</label>
            </td>
            <td>
              <input type="text"
                placeholder="productname"
                value={productname}
                className={classes.input}
                onChange={(event) => {
                  setProductname(event.target.value);
                }}></input>
            </td>
          </tr>
          
          <tr>
            <td>
              <label className={classes.label}> Description</label>
            </td>
            <td>
              <input type="text"
                placeholder="Description"
                value={description}
                className={classes.input}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}></input>
            </td>
          </tr>
          <tr>
            <td>
              <label className={classes.label}> Price ($) </label>
            </td>
            <td>
              <input type="text"
                placeholder="Price"
                value={price}
                className={classes.input}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}></input>
            </td>
          </tr>
          <tr>
            <td>
              <label className={classes.label}> Address</label>
              </td>
              <td>
              <input type="text"
                placeholder="Address"
                value={address}
                className={classes.input}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}></input>
            </td>
          </tr>
          <tr>
            <td>
              <label className={classes.label}> Phone Number</label>
              </td>
              <td>
              <input type="text"
                placeholder="Phone"
                value={phone}
                className={classes.input}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}></input>
            </td>
          </tr>
          {/* <tr><td><DisplayImage/></td></tr> */}
        </tbody>
      </table>
      <Button
        variant="contained"
        onClick={handleSubmit}
        className={classes.button}
      >
        Submit
      </Button>
    </Grid>
  );
};

export default Upload;