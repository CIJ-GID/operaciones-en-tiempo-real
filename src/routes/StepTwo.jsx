//! PLANTILLA
import React from "react";
import OptionsCards from "../components/OptionsCards";
import { useNavigate } from "react-router-dom";

const options = [
  {
    id: 1,
    title: "Plantilla 1",
    description: "descripcion sobre la plantilla",
  },
  {
    id: 2,
    title: "Plantilla 2",
    description: "descripcion sobre la plantilla",
  },
  {
    id: 3,
    title: "Plantilla 3",
    description: "descripcion sobre la plantilla",
  },
];

const StepTwo = () => {
  const navigate = useNavigate();

  const handleClick = (title, id) => {
    localStorage.setItem("plantilla", title.toLowerCase());
    navigate(`/presentacion/${id}`);
  };

  return (
    <main className="flex h-full  w-full  flex-col">
      <section className=" flex h-20 w-full items-center justify-center border-b-2 border-secondary">
        <span className="!text-2xl text-base font-bold">Plantillas</span>
      </section>
      <section className="flex h-full w-full flex-wrap items-center justify-center">
        {options.map((o) => (
          <OptionsCards
            key={o.id}
            id={o.id}
            title={o.title}
            description={o.description}
            handleClick={handleClick}
          />
        ))}
      </section>
    </main>
  );
};

export default StepTwo;
