// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUvU7sEj3Y8PgzcteBAHul7_YS6rRYZpY",
  authDomain: "web-3-3702f.firebaseapp.com",
  projectId: "web-3-3702f",
  storageBucket: "web-3-3702f.appspot.com",
  messagingSenderId: "983787576240",
  appId: "1:983787576240:web:70236e6d5656f3c94b1475",
  measurementId: "G-8Q0FTXPMN9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export { auth, firestore };
