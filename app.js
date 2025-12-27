// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxXOGSfoGeL0mFtXbhRVJt4BGvwbs5gvA",
  authDomain: "guard-patrol-system-9b4c0.firebaseapp.com",
  projectId: "guard-patrol-system-9b4c0",
  storageBucket: "guard-patrol-system-9b4c0.firebasestorage.app",
  messagingSenderId: "579929835288",
  appId: "1:579929835288:web:80dcf09e4d811c7f35c06d",
  measurementId: "G-LCWH8X42ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
