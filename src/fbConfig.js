
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyA2fQLUqk2TJUqaq-Q7plETGnlvX2codsE",
  authDomain: "react-project-c2e5d.firebaseapp.com",
  projectId: "react-project-c2e5d",
  storageBucket: "react-project-c2e5d.firebasestorage.app",
  messagingSenderId: "360205276118",
  appId: "1:360205276118:web:b697c28a7da0a8683cca77"
};


const app = initializeApp(firebaseConfig);
export const author=getAuth(app)
export const db=getDatabase(app)