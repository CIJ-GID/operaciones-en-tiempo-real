import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCctbuOWWbJJCh-WYTzw6axdnPzBPL3lx0",
  authDomain: "mpf-allanamientos-realtime.firebaseapp.com",
  databaseURL: "https://mpf-allanamientos-realtime-default-rtdb.firebaseio.com",
  projectId: "mpf-allanamientos-realtime",
  storageBucket: "mpf-allanamientos-realtime.appspot.com",
  messagingSenderId: "888223514837",
  appId: "1:888223514837:web:ded2c4a3f174f51e26225c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, setDoc, doc };
