// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD6y2qmefNOIQ4lRksYCCb5l_aZgO5zAbM",
    authDomain: "labmobile-pertemuan10.firebaseapp.com",
    projectId: "labmobile-pertemuan10",
    storageBucket: "labmobile-pertemuan10.firebasestorage.app",
    messagingSenderId: "867119393848",
    appId: "1:867119393848:web:ad6f61a5be438aec21cacd",
    measurementId: "G-0NL1TFR59C"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };


