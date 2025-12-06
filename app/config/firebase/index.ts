// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY_5PQ8BppsTf_I2vqMoDRyq3CMZKUE7U",
  authDomain: "minsapoint.firebaseapp.com",
  projectId: "minsapoint",
  storageBucket: "minsapoint.firebasestorage.app",
  messagingSenderId: "456076951299",
  appId: "1:456076951299:web:a90fe5221c7382294c3336",
  measurementId: "G-PQJE194E39",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export { firebaseApp, firebaseAuth };
