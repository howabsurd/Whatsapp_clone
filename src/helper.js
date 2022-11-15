// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsW_WSK9pB3qSUUeR94P4qzIVFxCV-wGk",
  authDomain: "social-media-4bfd4.firebaseapp.com",
  projectId: "social-media-4bfd4",
  storageBucket: "social-media-4bfd4.appspot.com",
  messagingSenderId: "770072437010",
  appId: "1:770072437010:web:3f6535cdd555be1891d3cb",
  measurementId: "G-FK46XTKM05",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
