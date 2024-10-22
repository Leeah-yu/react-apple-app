// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjpx6Vt6jWvvjaLG9VEuLJojK3gC7hDcI",
  authDomain: "react-apple-tv-ab27b.firebaseapp.com",
  projectId: "react-apple-tv-ab27b",
  storageBucket: "react-apple-tv-ab27b.appspot.com",
  messagingSenderId: "1096867580040",
  appId: "1:1096867580040:web:1f2ac2fc9f52c696f1f73d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };  // named export
