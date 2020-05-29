import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

if (process.env.GATSBY_ACTIVE_ENV === "production") {
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
} else if (process.env.GATSBY_ACTIVE_ENV === "staging" || process.env.GATSBY_ACTIVE_ENV === "development") {
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
} else {
  return null;
}

export default firebase