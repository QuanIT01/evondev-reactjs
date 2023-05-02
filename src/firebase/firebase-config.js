import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDm9ND2v_Kp8E66K2pWKc7fDX9fCZNn5Ro",
  authDomain: "learn-firebase-a4db4.firebaseapp.com",
  projectId: "learn-firebase-a4db4",
  storageBucket: "learn-firebase-a4db4.appspot.com",
  messagingSenderId: "411130256064",
  appId: "1:411130256064:web:d8cba724a1b7d612b4ab25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Init services
export const db = getFirestore(app);

export const auth = getAuth(app);
