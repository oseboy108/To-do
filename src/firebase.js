import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOCLQY-FX91qA9UodaKy605-eVjq5Psf8",
  authDomain: "todo-list-89d8b.firebaseapp.com",
  databaseURL: "https://todo-list-89d8b-default-rtdb.firebaseio.com",
  projectId: "todo-list-89d8b",
  storageBucket: "todo-list-89d8b.appspot.com",
  messagingSenderId: "705490324475",
  appId: "1:705490324475:web:6859cf7903471414a9595e"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
