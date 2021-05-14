import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAkcTEPibkirARu7KNWrHRpMvK0JSsmeSQ",
    authDomain: "clever-to-do-list-4f711.firebaseapp.com",
    projectId: "clever-to-do-list-4f711",
    storageBucket: "clever-to-do-list-4f711.appspot.com",
    messagingSenderId: "411406150874",
    appId: "1:411406150874:web:d52cebd9aadbcf929cc9e3",
    measurementId: "G-MYWEF45RZ0"
  };
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();