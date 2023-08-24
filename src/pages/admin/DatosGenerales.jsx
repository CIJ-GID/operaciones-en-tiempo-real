import { useEffect, useState } from "react";
import { updateOperation } from "../../redux/reducers/operationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logoCij from "../../assets/logoCij.png";
import logoMpf from "../../assets/logoMpf.png";
import { GeneralInfo } from "../../components/Index";
import { db, setDoc, doc, collection, addDoc } from "../../database/db";
import { provincias } from "../../helpers";

export const DatosGenerales = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [localOperation, setLocalOperation] = useState({
    nombre: "",
    collectionName: "",
    operacionesTotales: "",
    fuerzasIntervenidas: "",
    sospechosos: "",
    zonasAfectadas: "",
  });

  useEffect(() => {
    dispatch(updateOperation(localOperation));
  }, [localOperation]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLocalOperation({
      ...localOperation,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rootRef = doc(db, localOperation.collectionName, "GeneralInfo");
    await setDoc(rootRef, localOperation);
    for (const prov of provincias) {
      const provRef = collection(rootRef, prov.name);
      await addDoc(provRef, { ...prov });
    }
    navigate("/2");
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
          <h1>DATOS GENERALES</h1>
          <h2>Paso 1/3</h2>
        </div>
        <div className="grid h-full w-full grid-cols-2 gap-12 p-4 px-12">
          <form className="flex w-full flex-col justify-around">
            <div className="flex flex-col">
              <label>Nombre de Operación (Se muestra como titulo)</label>
              <input
                type="text"
                placeholder="LUZ DE INFANCIA III (Ejemplo)"
                value={localOperation.nombre}
                onChange={handleOnChange}
                name="nombre"
              />
            </div>
            <div className="flex flex-col">
              <label>Abreviatura (Para guardar registro)</label>
              <input
                type="text"
                placeholder="Op_LDI_III (Ejemplo)"
                value={localOperation.collectionName}
                onChange={handleOnChange}
                name="collectionName"
              />
            </div>
            <div className="flex flex-col">
              <label>Operaciones Totales (Número)</label>
              <input
                type="number"
                placeholder="¿Cuantos objetivos habrá?"
                value={localOperation.operacionesTotales}
                onChange={handleOnChange}
                name="operacionesTotales"
              />
            </div>
            <div className="flex flex-col">
              <label>Fuerzas Intervenidas (Número)</label>
              <input
                type="number"
                placeholder="¿Cuantas fuerzas van a intervenir?"
                value={localOperation.fuerzasIntervenidas}
                onChange={handleOnChange}
                name="fuerzasIntervenidas"
              />
            </div>
            <div className="flex flex-col">
              <label>Zonas Afectadas (Número)</label>
              <input
                type="number"
                placeholder="¿Cuantas zonas afectadas habrá?"
                value={localOperation.zonasAfectadas}
                onChange={handleOnChange}
                name="zonasAfectadas"
              />
            </div>
            <div className="flex flex-col">
              <label>Sospechosos (Número)</label>
              <input
                type="number"
                placeholder="¿Cuantos sospechosos habrá?"
                value={localOperation.sospechosos}
                onChange={handleOnChange}
                name="sospechosos"
              />
            </div>
          </form>
          <section className="w-full">
            <div className="flex h-[8%] w-full items-center justify-between rounded-tl-md rounded-tr-md bg-primary px-4">
              <img src={logoCij} className="w-40" />
              <h3 className="text-center uppercase">{localOperation.nombre}</h3>
              <img src={logoMpf} className="w-40" />
            </div>
            <main className="mt-2 grid h-[92%] grid-cols-6 gap-2">
              <section className="enfasisBorders col-span-1 row-span-1 rounded-md bg-containers"></section>
              <section className="enfasisBorders col-span-4 row-span-1 rounded-md bg-containers"></section>
              <section className="enfasisBorders col-span-1 row-span-1 rounded-md bg-containers"></section>
              <section className="enfasisBorders col-span-1 row-span-2 rounded-md bg-containers"></section>
              <section className="enfasisBorders col-span-2 row-span-1 rounded-md bg-containers"></section>
              <section className="enfasisBorders col-span-2 row-span-1 rounded-md bg-containers">
                <GeneralInfo />
              </section>
              <section className="enfasisBorders col-span-1 row-span-2 rounded-md bg-containers"></section>
              <section className="enfasisBorders col-span-4 row-span-1 rounded-md bg-containers"></section>
            </main>
          </section>
        </div>
        <div className="my-4">
          <button className="loginButtons" onClick={handleSubmit}>
            SIGUENTE <strong>2/3</strong>
          </button>
        </div>
      </section>
    </motion.main>
  );
};
