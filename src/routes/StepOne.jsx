//! TIPO DE OPERACION (Armas, drogas, etc...)
import React from "react";
import OptionsCards from "../components/OptionsCards";

const options = [
  { title: "Armas", description: "Operacion de Armas" },
  { title: "Drogas", description: "Operacion de Drogas" },
  { title: "Pedofilia", description: "Operacion de Pedofilia" },
];

const StepOne = () => {
  return (
    <main className="flex h-full  w-full  flex-col">
      <section className=" flex h-20 w-full items-center justify-center border-b-2 border-secondary">
        <span className="!text-2xl text-base font-bold">
          Seleccione tipo de Operacion
        </span>
      </section>
      <section className="flex h-full w-full flex-wrap items-center justify-center">
        {options.map((o) => (
          <OptionsCards title={o.title} description={o.description} icon={o.icon} />
        ))}
      </section>
    </main>
  );
};

export default StepOne;
{
  /* <button className="absolute w-fit outline" onClick={handleToggle}>
        DarkMode
      </button> */
}

//   const handleToggle = () => {
//     const htmlElement = document.getElementsByTagName("html")[0];
//     htmlElement.classList.toggle("dark");
//   };
