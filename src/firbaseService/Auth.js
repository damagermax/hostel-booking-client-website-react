import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { app } from "./config";

export const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleAuthProvider);
  } catch (err) {}
};

export const signOutAccount = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }
};
