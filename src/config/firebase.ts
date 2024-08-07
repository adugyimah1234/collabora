import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBUfl9EyQgTS_S-nAHU_GK3N9T9Am_LZFs",
  authDomain: "collabralearn.firebaseapp.com",
  projectId: "collabralearn",
  storageBucket: "collabralearn.appspot.com",
  messagingSenderId: "267821139003",
  appId: "1:267821139003:web:36670d157adccaffb7081e",
  measurementId: "G-V3QKFE846C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber, signOut };