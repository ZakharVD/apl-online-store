import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO9mFvgRIQHPvxUL7R6x8_x-BaO_w8ZKo",
  authDomain: "store-project-8de39.firebaseapp.com",
  projectId: "store-project-8de39",
  storageBucket: "store-project-8de39.appspot.com",
  messagingSenderId: "45357381638",
  appId: "1:45357381638:web:2641338b4b50238520ab87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const authConfig = getAuth();

export const signInWithGoogle = () => {
  try {
    signInWithPopup(authConfig, googleProvider);
  } catch (error) {
    console.log("error signing in with Google, Error code ", error);
  }
};

export const database = getFirestore();

// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//   const collectionRef = collection(database, collectionKey);
//   const batch = writeBatch(database);

//   objectsToAdd.forEach((object) => {
//     const docRef = doc(collectionRef, object.title.toLowerCase());
//     batch.set(docRef, object);
//   })
//   await batch.commit();
//   console.log('batch done')
// }

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(database, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docInfo) => {
    const { title, categories } = docInfo.data();
    acc[title.toLowerCase()] = categories;
    return acc
  }, {})
  return categoryMap;
};

export const createUserDocumentFromAuth = async (user, additionalInfo = {}) => {
  if (!user) return;

  const userDocRef = doc(database, "users", user.uid);
  const userInfo = await getDoc(userDocRef);

  if (!userInfo.exists()) {
    // creating a document for new user
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      alert("error creating a user");
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(authConfig, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(authConfig, email, password);
};

export const signOutUser = async () => await signOut(authConfig);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(authConfig, callback);
};
