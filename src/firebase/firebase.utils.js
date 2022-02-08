import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBB2jkHKw7B5a52VIjMNGVmQGv-Rxej2cg",
    authDomain: "crwn-db-774.firebaseapp.com",
    projectId: "crwn-db-774",
    storageBucket: "crwn-db-774.appspot.com",
    messagingSenderId: "646983948500",
    appId: "1:646983948500:web:554a4fda6b149bfa3ac341",
    measurementId: "G-WT4JG08X7C"
  };

export const createUserProfileDocument = async(userAuth, additionalData) => {
   if(!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();

   if(!snapShot.exists) {
     const { displayName, email } = userAuth;
     const createdAt = new Date();

     try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
     } catch (error) {
          console.log('error creating user', error.message);
     }
  }
  return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
