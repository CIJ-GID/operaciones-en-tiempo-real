import { motion } from "framer-motion";

export const Objetivos = () => {
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
          <section className="w-full"></section>
        </div>
        <div className="my-4">
          <button className="loginButtons">
            SIGUENTE <strong>2/3</strong>
          </button>
        </div>
      </section>
    </motion.main>
  );
};
