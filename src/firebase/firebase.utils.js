import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCp96mDnI60mGx803XGTQ85Fso59zSVQTI",
    authDomain: "crwn-db-ff377.firebaseapp.com",
    databaseURL: "https://crwn-db-ff377.firebaseio.com",
    projectId: "crwn-db-ff377",
    storageBucket: "",
    messagingSenderId: "63663200059",
    appId: "1:63663200059:web:45140257418c27c00d091e",
    measurementId: "G-7Q40Z59LQ4"
  }

  export const createUserProfileDocument = async (userAuth, otherProperties) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get() 

    if(!snapShot.exists){
      const {displayName , email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
        ...otherProperties
        })
      } catch (error) {
        console.log('error creating a user:', error.message);
      }
    }
    return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;

