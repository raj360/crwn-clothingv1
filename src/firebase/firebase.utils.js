import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCLpsGo9d46SSt7uf2y5Z982jChxR9abzg",
  authDomain: "clothings-9c05f.firebaseapp.com",
  databaseURL: "https://clothings-9c05f.firebaseio.com",
  projectId: "clothings-9c05f",
  storageBucket: "clothings-9c05f.appspot.com",
  messagingSenderId: "398661183186",
  appId: "1:398661183186:web:3d1a70da02f08b7940af0b",
  measurementId: "G-2R2J7390DP"
};

export const createUserProfileDocument = async (userAuth, otherProperties) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherProperties
      });
    } catch (error) {
      console.log("error creating a user:", error.message);
    }
  }
  return userRef;
};

export const addCollectionsAndDoccuments = async (
  collectionKey,
  objectToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollectios = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedCollectios.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
