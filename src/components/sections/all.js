import Nav from './nav.js'
import React, { useState, useEffect } from "react";
import db from "../../firebase";
import logo2 from "../../assets/logo2.png"
import location from "../../assets/location.png"
import ReactCircleModal from 'react-circle-modal'
import './all.css'
import { Button } from '@material-ui/core';


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
      borderRadius: '15px'
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
      fontSize: '20px',
      fontWeight: '500',
      marginTop: '0px',
    },
    imgPage:{
      width: '380px',
      height: '305px',
      objectFit: 'cover',
      borderRadius: '8px',
    }
  }));

  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    let getPostsFromFirebase = [];
    const subscriber = db.collection("all").onSnapshot(querySnapshot => {
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