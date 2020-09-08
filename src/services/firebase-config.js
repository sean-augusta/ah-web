import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

if (process.env.GATSBY_ACTIVE_ENV === "production") {
  const firebaseConfig = {
    apiKey: "AIzaSyDCyqXPyscBjSVP1IlP5vCSP4foQbxBtRI",
    authDomain: "augusta-hitech-website.firebaseapp.com",
    databaseURL: "https://augusta-hitech-website.firebaseio.com",
    projectId: "augusta-hitech-website",
    storageBucket: "augusta-hitech-website.appspot.com",
    messagingSenderId: "227509615969",
    appId: "1:227509615969:web:4896f74543a45db60b1920",
    measurementId: "G-RVESJNWYJB",
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
} else {
  const firebaseConfig = {
    apiKey: "AIzaSyB4_dCRABqokQoG-vBt5jOA4ZEAATervaQ",
    authDomain: "ah-website-staging.firebaseapp.com",
    databaseURL: "https://ah-website-staging.firebaseio.com",
    projectId: "ah-website-staging",
    storageBucket: "ah-website-staging.appspot.com",
    messagingSenderId: "119991158489",
    appId: "1:119991158489:web:fb31187e89f384a928e0c8",
    measurementId: "G-2F53BZYYT4",
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

export default firebase