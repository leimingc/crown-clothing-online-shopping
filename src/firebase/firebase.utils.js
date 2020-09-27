import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAroSZ5LLPrLwi2OMlTZECUSbVJkjSHlK0",
  authDomain: "crwn-db-6f4fe.firebaseapp.com",
  databaseURL: "https://crwn-db-6f4fe.firebaseio.com",
  projectId: "crwn-db-6f4fe",
  storageBucket: "crwn-db-6f4fe.appspot.com",
  messagingSenderId: "620669013760",
  appId: "1:620669013760:web:d829627274f57a2fd66de5",
  measurementId: "G-893YG225XM"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;