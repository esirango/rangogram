import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCmJF7Um0acI0lpkDZNg1sDnrSy9xnkrpg",
    authDomain: "rangogram.firebaseapp.com",
    projectId: "rangogram",
    storageBucket: "rangogram.appspot.com",
    messagingSenderId: "731391963768",
    appId: "1:731391963768:web:f09070f762c9fa15db738d",
  })
  .auth();
