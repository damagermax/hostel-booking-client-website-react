import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXCxWFW_M0psrNLXqgxWLNHWC7H5F09XQ",
  authDomain: "mbho-79536.firebaseapp.com",
  projectId: "mbho-79536",
  storageBucket: "mbho-79536.appspot.com",
  messagingSenderId: "306196573197",
  appId: "1:306196573197:web:8b1231548cd9cb40b8b944",
  measurementId: "G-TS1PQR94QB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
