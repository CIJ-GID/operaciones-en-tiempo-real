import React from "react";
import logoCij from "../assets/logoCij.png";

const Login = () => {
  return (
    <main
      id="container"
      className="flex h-screen w-screen items-center justify-center bg-secondary/50 dark:bg-secondary"
    >
      <img src={logoCij} className="absolute top-0 mt-14" />
      <section
        id="loginModal"
        className="flex h-[50%] w-[50%] flex-col items-center justify-center rounded-md bg-primary shadow-2xl"
      ></section>
    </main>
  );
};

export default Login;
