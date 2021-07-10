import Nav from './nav.js'
import React, { useState, useEffect } from "react";
import db from "../../firebase";
import logo2 from "../../assets/logo2.png"
import './all.css'

const Shop = () => {
  /* loading data in Arabic: تحميل البيانات */
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    let getPostsFromFirebase = [];
    /* 
        "subscriber" is for fetching APIs. we name it this so we know to unsubscribe later 
          to avoid what's called "memory leaks." this is when your application keeps getting 
          data it does not need. for example, you might use up all your free firebase reads 
          for the day.
      */
    const subscriber = db.collection("posts").onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        getPostsFromFirebase.push({
          ...doc.data(), // spread operator to add all the data from the database
          key: doc.id, // we need keys for lists in React to prevent console warning
        });
      });
      console.log("get posts from database")
      console.log(getPostsFromFirebase)
      setPosts(getPostsFromFirebase);
      setLoading(false);
    });
        /*
      "When you are no longer interested in listening 
        to your data, you must detach your listener so that your event callbacks stop 
        getting called. This allows the client to stop using bandwidth to receive updates."
        see https://firebase.google.com/docs/firestore/query-data/listen#detach_a_listener
        It is called a "cleanup function."
      */
    return () => subscriber();
  }, []); // pass an empty array so useEffect is only called once. notice we do not depend on any outside variables in this hook
  // to prevent errors during render if we don't have our data yet
  if (loading) {
    return <div className="loading"><img src={logo2} className="animation"/></div>;
  }
  return (
    <div className="posts">
      <Nav/>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.key}>
            <h2>{post.productname}</h2>
            <h3> $ {post.price}</h3>
            <p>{post.description}</p>
            <p>{post.address}</p>
            <p>{post.phone}</p>
            <img
              src={post.url || "https://via.placeholder.com/400x300"}
              alt="Uploaded Images"
              height="300"
              width="400"
            />
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