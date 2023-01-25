// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlx4whOxs0dKsBWWsT9pkThpixBaFv1Aw",
  authDomain: "sky-hunt.firebaseapp.com",
  projectId: "sky-hunt",
  storageBucket: "sky-hunt.appspot.com",
  messagingSenderId: "607523939276",
  appId: "1:607523939276:web:8eed2b0b99ca824683b369",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth };
