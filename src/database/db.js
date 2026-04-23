import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore";

/*
const firebaseConfig = {
  apiKey: "AIzaSyCctbuOWWbJJCh-WYTzw6axdnPzBPL3lx0",
  authDomain: "mpf-allanamientos-realtime.firebaseapp.com",
  databaseURL: "https://mpf-allanamientos-realtime-default-rtdb.firebaseio.com",
  projectId: "mpf-allanamientos-realtime",
  storageBucket: "mpf-allanamientos-realtime.appspot.com",
  messagingSenderId: "888223514837",
  appId: "1:888223514837:web:ded2c4a3f174f51e26225c",
};
*/

/*** TODO: sacar este hardcodeo ***/
const firebaseConfig = {
  apiKey: "AIzaSyCM6PvDBCJFWr7VqafTclmbWFrr5LYivcU",
  authDomain: "mpf-allanamientos-realti-22faa.firebaseapp.com",
  databaseURL: "https://mpf-allanamientos-realti-22faa-default-rtdb.firebaseio.com",
  projectId: "mpf-allanamientos-realti-22faa",
  storageBucket: "mpf-allanamientos-realti-22faa.firebasestorage.app",
  messagingSenderId: "960601277900",
  appId: "1:960601277900:web:02aa23b883a39ad286c969",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, setDoc, doc, collection, addDoc };
