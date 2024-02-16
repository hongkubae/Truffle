// Import the functions you need from the SDKs you need
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBZq36G0AMz4dh_hlVS7X9xY2aXGCZLmVo",
  authDomain: "youth-truffle.firebaseapp.com",
  projectId: "youth-truffle",
  storageBucket: "youth-truffle.appspot.com",
  messagingSenderId: "295038915158",
  appId: "1:295038915158:android:0f78a90b8721647520e1f7",
  databaseURL: "https://firestore.googleapis.com/v1/projects/youth-truffle/databases/(default)/documents",
};

const db = app.firestore();

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const authService = getAuth(app);
export { authService, db};