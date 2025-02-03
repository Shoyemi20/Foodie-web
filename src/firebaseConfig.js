// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaMXl521hA_xauRpidGYdeHVyZPvmB91I",
  authDomain: "foodieweb-e67d3.firebaseapp.com",
  projectId: "foodieweb-e67d3",
  storageBucket: "foodieweb-e67d3.firebasestorage.app",
  messagingSenderId: "991985149022",
  appId: "1:991985149022:web:791d8fd318662fff8c80cf",
  measurementId: "G-GN4DVSF02C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);




