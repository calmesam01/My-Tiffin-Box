import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHngrZl_Zk6ARis5jwyuyfIKwQJ_LVYYk",
    authDomain: "getmytiffin-ca.firebaseapp.com",
    databaseURL: "https://getmytiffin-ca.firebaseio.com",
    projectId: "getmytiffin-ca",
    storageBucket: "getmytiffin-ca.appspot.com",
    messagingSenderId: "291120364870",
    appId: "1:291120364870:web:7c82285003d3c6bf2a7947"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();