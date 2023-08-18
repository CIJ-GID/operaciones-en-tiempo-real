import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex h-[100vh] flex-col items-center justify-evenly p-24 text-center text-white"
    >
      <h1 className="underline">Not Found (aka 404)</h1>
      <p>
        Estás buscando algo que no existe, no ha existido, no existirá, tal vez no exista
        o no deba existir ...
      </p>
      <p>
        ... pero siempre eres bienvenido/a a volver al
        <a href="/" className="ml-2 text-primary underline">
          Home.
        </a>
      </p>
      <strong>-GID ;)</strong>
    </div>
  );
};
