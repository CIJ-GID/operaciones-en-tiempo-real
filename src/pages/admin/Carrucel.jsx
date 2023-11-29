import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { db, collection, addDoc } from "../../database/db";
import { useSelector } from "react-redux";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const Carrucel = () => {
  const navigate = useNavigate();
  const op = useSelector((state) => state.operation);
  const [imageURLs, setImageURLs] = useState([]);

  const handleDrop = async (event) => {
    event.preventDefault();

    const files = event.dataTransfer.files;

    // Iterate over each file
    for (const file of files) {
      // Generate a unique name for the image
      const imageName = Date.now() + "_" + file.name;

      // Reference to the Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `images/${imageName}`);

      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, file);

      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(storageRef);

      // Save the reference and download URL in the state
      setImageURLs((prevURLs) => [...prevURLs, downloadURL]);

      // Save image reference and URL to the database
      //saveImageDataToDatabase(imageName, downloadURL);
    }
  };
/*
  const saveImageDataToDatabase = async (imageName, imageURL) => {
    try {
      // Save image reference and URL to the database
      const imageDocRef = await addDoc(collection(db, "images"), {
        imageName: imageName,
        imageURL: imageURL,
        // ... other fields if needed
      });

      console.log(`Image data saved successfully. Doc ID: ${imageDocRef.id}`);
    } catch (error) {
      console.error("Error saving image data:", error);
    }
  };
*/
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", duration: 0.5 }}
      className="mainContainer toolsBg"
    >
      <section className="flex h-[80%] w-[80%] flex-col items-center rounded-md border-2 border-primary bg-base shadow-2xl">
        <div className="flex w-full items-center justify-between border-b-2 border-primary p-6">
          <h2>Configuración</h2>
          <h1>Fuerzas</h1>
          <h2>Paso 2/4</h2>
        </div>
        <div className="grid h-full w-full grid-cols-2 gap-12 p-4 px-12">
          <section
            onDrop={handleDrop}
            onDragOver={(event) => event.preventDefault()}
            className={`group col-span-2 grid w-full ${
              imageURLs.length > 0 && "border-solid border-success"
            } place-content-center place-items-center rounded-md border-2 border-dashed border-primary/50 bg-containers transition hover:cursor-pointer hover:border-solid hover:bg-primary/10`}
          >
            <h3 className="transition group-hover:text-white/50">Tira las imagenes aqui</h3>
          </section>
        </div>
        <div className="my-4">
          <button
            className={`loginButtons ${
              imageURLs.length > 0 && "pointer-events-auto bg-white"
            } pointer-events-none bg-containers`}
            onClick={() => {
              // Navigate to the dashboard if images have been uploaded
              if (imageURLs.length > 0) {
                navigate("/3");
              } else {
                alert("First upload the images.");
              }
            }}
          >
            Siguiente <strong>4/4</strong>
          </button>
        </div>
      </section>
    </motion.main>
  );
};
