import Nav from './nav.js'
import React, { useState, useEffect } from "react";
import db from "../../firebase";
import logo2 from "../../assets/logo2.png"
import location from "../../assets/location.png"
import phone from "../../assets/phone-call.png"
import ReactCircleModal from 'react-circle-modal'
import './all.css'
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from "@material-ui/core/styles";

const Shop = () => {

  const useStyles = makeStyles(theme => ({
    favorite: {
      float: 'right',
      backgroundColor: '#1b1c19',
      color: '#fcd462',
      fontSize: '15px',
      border: '1px solid #fcd462',
      padding: '5px',
      borderRadius: '8px'
    },
    productPage: {
      backgroundColor: '#1b1c19',
      padding: '70px',
      paddingTop: '120px',
      paddingBottom: '115px',
      marginTop: '50px',
      marginLeft: '10px',
      marginRight: '10px',
      borderRadius: '15px',
      color: 'white',
      fontSize: '20px'
    },
    prPage: {
      display: 'flex',
      flexDirection: 'row',
    },
    priceRow: {
      display: 'flex',
      flexDirection: 'row',
    },
    price: {
      color: '#fcd462',
      fontSize: '25px',
      fontWeight: '700',
      marginTop: '30px',
      marginLeft: '300px'
    },
    imgPage:{
      width: '380px',
      height: '305px',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    postPage:{
      marginLeft: '50px',
      marginTop: '-20px'
    },
    click: {
      position: 'absolute',
      marginTop: '-360px',
      marginLeft: '755px',
      border: '0px',
      backgroundColor: '#1b1c19',
      color: '#fcd462',
      fontSize: '40px'
    }
  }));

  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    let getPostsFromFirebase = [];
    const subscriber = db.collection("camera").onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        getPostsFromFirebase.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      console.log("get posts from database")
      console.log(getPostsFromFirebase)
      setPosts(getPostsFromFirebase);
      setLoading(false);
    });
    return () => subscriber();
  }, []);
  if (loading) {
    return <div className="loading"><img src={logo2} className="animation"/></div>;
  }
  return (
    <div className="posts">
      <Nav/>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.key}
          className="product">
            <img
              src={post.url || "https://via.placeholder.com/400x300"}
              alt="Uploaded Images"
              height="300"
              width="400"
              className="productImg"
            />
            <h2>{post.productname}</h2>
            {/* <p>{post.description}</p> */}
            <div className="priceRow">
            <div className="address">
              <img src={location} className="location"/>
              <p>{post.address}</p>
              </div>
              <h3> $ {post.price}</h3>
              </div>
            {/* <p>{post.phone}</p> */}
            <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" 
        style={{ color: "#fcd462", marginLeft: "3px", marginTop: "-10px" }}/>}
      />
            <ReactCircleModal
      backgroundColor="#fcd36296"
      toogleComponent={onClick => (
        <button onClick={onClick}
        className={classes.favorite}>
          Show More
        </button>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div className={classes.productPage}>
          <div className={classes.prPage}>
          <img
              src={post.url || "https://via.placeholder.com/400x300"}
              alt="Uploaded Images"
              height="300"
              width="400"
              className= {classes.imgPage}
            />

            <div className={classes.postPage}>

            <div className={classes.priceRow}>
            <h2>{post.productname}</h2>
            <h3 className= {classes.price}> $ {post.price}</h3>
            </div>

          <p>{post.description}</p>

            <div className="address">
              <img src={location} className="location"/>
              <p>{post.address}</p>
              </div>

              <div className="address">
              <img src={phone} className="phone"/>
              <p>{post.phone}</p>
              </div>

          <button onClick={onClick} className={classes.click}>
            ×
          </button></div>
        </div></div>
      )}
    </ReactCircleModal>
          </div>
        ))
      ) : (
        <h1>No posts yet:(</h1>
      )
      }
    </div>
  );
};
export default Shop;