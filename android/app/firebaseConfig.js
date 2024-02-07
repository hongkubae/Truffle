// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIPnJxRXXFjP3obdArnnVBG3dn_0-5zUU",
  authDomain: "youth-truffle.firebaseapp.com",
  projectId: "youth-truffle",
  storageBucket: "youth-truffle.appspot.com",
  messagingSenderId: "295038915158",
  appId: "1:295038915158:web:51896dbb4fab698720e1f7",
  measurementId: "G-9Z19JS6YK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const authService = getAuth(app);

export { authService };