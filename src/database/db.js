import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

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
const storage = getStorage(app);
const storageRef = ref(storage, "images");


const uploadImage = async (file) => {
  // Implementa la lógica para subir imágenes si es necesario
};

const getImages = async () => {
  try {
    const res = await listAll(storageRef);
    const promises = res.items.map(async (item) => {
      try {
        return await getDownloadURL(item);
      } catch (error) {
        console.error("Error al obtener URL de la imagen:", item.name, error.code, error.message);
        return null; // o maneja el error de la manera que desees
      }
    });
    return Promise.all(promises).then(urls => urls.filter(url => url !== null));
  } catch (error) {
    console.error("Error al obtener URLs de imágenes:", error.code, error.message);
    return [];
  }
};


export { db, setDoc, doc, collection, addDoc, uploadImage, getImages };
