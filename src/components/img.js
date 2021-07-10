// import React, { useState, Component } from "react";
// import db from "../firebase";

// const imgSubmit = (e) => {
//   const [img, setImg] = useState([]);
//   e.preventDefault();
//   db.collection("imgs").doc()
//     .set({
//       img: img,
//     })
//     .then(function (docRef) {
//       console.log("Document written with ID: ", docRef.id);
//       setImg('');
//     })
//     .catch(function (error) {
//       console.error("Error adding document: ", error);
//     });
//   alert("Thanks for posting on Ebay!");
//   db.collection("imgs").doc().delete().then(() => {
//     console.log("Document successfully deleted!");
// }).catch((error) => {
//     console.error("Error removing document: ", error);
// });
// };

// class DisplayImage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: null
//     };

//     this.onImageChange = this.onImageChange.bind(this);
//   }

//   onImageChange = event => {
//     if (event.target.files && event.target.files[0]) {
//       let img = event.target.files[0];
//       this.setState({
//         image: URL.createObjectURL(img)
//       });
//     }
//   };
  
//   render() {
//     return (
//       <div>
//         <div>
//           <div>
//             <img src={this.state.image} />
//             <h1>Select Image</h1>
//             <input type="file" name="myImage" value={img} onChange={event => {
//                   setImg(event.target.value);
//                 }}
                
//                 onChange={imgSubmit}/>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default DisplayImage;