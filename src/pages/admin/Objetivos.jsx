import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { db, setDoc, doc } from "../../database/db";
import { useSelector } from "react-redux";

export const Objetivos = () => {
  const navigate = useNavigate();
  const op = useSelector((state) => state.operation);
  const [jsonData, setJsonData] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const raw_data = XLSX.utils.sheet_to_json(worksheet);
      setJsonData(raw_data);
      loadDb(raw_data);
    };
    reader.readAsArrayBuffer(file);
  };

  const loadDb = async (data) => {
    try {
      for (const obj of data) {
        await setDoc(doc(db, op.collectionName, obj.OBJ), {
          ...obj,
          objetivo_allanado: "NO",
          cantidad_detenidos: 0,
          notebooks_secuestradas: 0,
          pcs_secuestradas: 0,
          tablets_secuestradas: 0,
          celulares_secuestrados: 0,
          dispositivos_electronicos: 0,
          dispositivos_de_almacenamiento: 0,
          elementos_no_digitales: 0,
          menores_de_edad: 0,
          triage: "NO",
          otras_actividades_ilegales: "NO",
        });
      }
      console.log("Documentos guardados exitosamente");
    } catch (error) {
      console.error("Error al guardar los documentos:", error);
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", duration: 0.5 }}
      className="mainContainer toolsBg"
    >
      <section className=" flex h-[80%] w-[80%] flex-col items-center rounded-md border-2 border-primary bg-base shadow-2xl">
        <div className="flex w-full items-center justify-between border-b-2 border-primary p-6">
          <h2>Configuración</h2>
          <h1>OBJETIVOS</h1>
          <h2>Paso 2/2</h2>
        </div>
        <div className="grid h-full w-full grid-cols-2 gap-12 p-4 px-12">
          {/* <section className="w-full outline"></section> */}
          <section
            onDrop={handleDrop}
            onDragOver={(event) => event.preventDefault()}
            className={`group col-span-2 grid w-full ${
              jsonData && "border-solid border-success"
            } place-content-center place-items-center rounded-md border-2 border-dashed border-primary/50 bg-containers transition hover:cursor-pointer hover:border-solid hover:bg-primary/10`}
          >
            <h3 className="transition group-hover:text-white/50">DROP EXCEL HERE</h3>
          </section>
        </div>
        <div className="my-4">
          <button
            className="loginButtons"
            onClick={() => {
              // Aquí puedes navegar al dashboard si el JSON se ha cargado y convertido
              // y guardado en la base de datos
              if (jsonData) {
                navigate("/dashboard");
              } else {
                alert("Primero carga y convierte el archivo Excel.");
              }
            }}
          >
            IR AL <strong>DASHBOARD</strong>
          </button>
        </div>
      </section>
    </motion.main>
  );
};
