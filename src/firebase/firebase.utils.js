import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDcdcbE5T4DpyUMR857Ra0POANL0vi-wI0",
    authDomain: "react-ecom-db-c2b37.firebaseapp.com",
    databaseURL: "https://react-ecom-db-c2b37.firebaseio.com",
    projectId: "react-ecom-db-c2b37",
    storageBucket: "react-ecom-db-c2b37.appspot.com",
    messagingSenderId: "242385192855",
    appId: "1:242385192855:web:0c3bebb46014f0750126d2",
    measurementId: "G-XSGDLGWLRD"
  }
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;