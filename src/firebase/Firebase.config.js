// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// firebase config file
const firebaseConfig = {
  apiKey: "AIzaSyBERyx8M6H0T9OHEnbPzXHNS0f6S9CCvHg",
  authDomain: "movie-next-88385.firebaseapp.com",
  projectId: "movie-next-88385",
  storageBucket: "movie-next-88385.firebasestorage.app",
  messagingSenderId: "915246351708",
  appId: "1:915246351708:web:f0e3b0f71c921b75e7ed99"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);