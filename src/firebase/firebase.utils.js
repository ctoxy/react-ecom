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

export  const createUserProfileDocument = async(userAuth, additonalData) => {
  if (!userAuth) {
    return;  
  }
  const userRef =firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);
  
  if (!snapShot.exists) {
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      })
      
    } catch (error) {
      console.log('error creating user', error.message);
      
    }

    return userRef;
    
  }
  
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;