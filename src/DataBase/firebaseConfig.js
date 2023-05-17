// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";  
import { createContext } from 'react';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQDNj-ErcBzNzhWMa6uPMgC8t79YuXtnw",
  authDomain: "arab-language-learning-app.firebaseapp.com",
  databaseURL: "https://arab-language-learning-app-default-rtdb.firebaseio.com",
  projectId: "arab-language-learning-app",
  storageBucket: "arab-language-learning-app.appspot.com",
  messagingSenderId: "701289201657",
  appId: "1:701289201657:web:cd390f0d88ababb7a2c728",
  measurementId: "G-R608VB81F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Mengakses fitur autentikasi
const auth = getAuth(app);

// Mengakses fitur database
const db = getDatabase(app);

export { auth, db };
