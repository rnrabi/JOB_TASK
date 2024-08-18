// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.Vite_apiKey,
  authDomain: process.env.Vite_authDomain,
  projectId: process.env.Vite_projectId,
  storageBucket: process.env.Vite_storageBucket,
  messagingSenderId: process.env.Vite_messagingSenderId,
  appId: process.env.Vite_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);