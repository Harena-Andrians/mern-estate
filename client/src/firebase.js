// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6ab9a.firebaseapp.com",
  projectId: "mern-estate-6ab9a",
  storageBucket: "mern-estate-6ab9a.appspot.com",
  messagingSenderId: "37379099825",
  appId: "1:37379099825:web:00b9c4744b4da873696690"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);