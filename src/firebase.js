import firebase from 'firebase/app';
// Required for side-effects
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCxlZaSBiJGRaogm_v3MXcUYLAKjbJL58s",
    authDomain: "elec-ps.firebaseapp.com",
    projectId: "elec-ps",
    storageBucket: "elec-ps.appspot.com",
    messagingSenderId: "491402583131",
    appId: "1:491402583131:web:8aba63b192a7696dc0737e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export { firebase, db as default };