import { auth } from '../config/firebase'; // Ensure the path is correct
import {
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';

export const loginWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUpWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithPhone = (phone: string, recaptchaContainerId: string) => {
  const recaptchaVerifier = new RecaptchaVerifier(recaptchaContainerId, {}, auth);
  return signInWithPhoneNumber(auth, phone, recaptchaVerifier);
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  return signInWithPopup(auth, provider);
};