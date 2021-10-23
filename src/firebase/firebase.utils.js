import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDmrNBtrYJ8GEVYtd0lnsbeHNgSjGDsHKk",
  authDomain: "crwn-db-c354b.firebaseapp.com",
  projectId: "crwn-db-c354b",
  storageBucket: "crwn-db-c354b.appspot.com",
  messagingSenderId: "588100871260",
  appId: "1:588100871260:web:c27c137b36bf7d98983299",
  measurementId: "G-96JJGM84DE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
