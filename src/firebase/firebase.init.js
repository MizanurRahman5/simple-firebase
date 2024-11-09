// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMNW96sTdj4jkVr6-cUcusW7Tcckzkmok",
  authDomain: "simple-firebase-557c0.firebaseapp.com",
  projectId: "simple-firebase-557c0",
  storageBucket: "simple-firebase-557c0.firebasestorage.app",
  messagingSenderId: "598802188565",
  appId: "1:598802188565:web:f8ee8442544a1b286fc11c",
  measurementId: "G-RVMV0CFJYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;