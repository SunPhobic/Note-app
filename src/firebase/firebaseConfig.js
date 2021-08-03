import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_CONFIG_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_CONFIG_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_CONFIG_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_CONFIG_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_CONFIG_APPID
  };




  firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();
    const auth = firebase.auth()


  export {db,auth}