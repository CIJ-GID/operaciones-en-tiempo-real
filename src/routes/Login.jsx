import React, { useState } from "react";
import logoCij from "../assets/logoCij.png";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions";

const Login = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(password));
  };

  return (
    <main
      id="container"
      className="flex h-screen w-screen items-center justify-center bg-secondary/50 dark:bg-secondary"
    >
      <img src={logoCij} className="absolute top-0 mt-14" />
      <section
        id="loginModal"
        className="flex h-[50%] w-[50%] flex-col items-center justify-center rounded-md bg-primary shadow-2xl"
      >
        <form
          onSubmit={handleSubmit}
          className="flex h-full w-[40%] flex-col items-center justify-center "
        >
          <label className="text-md self-start text-base">Contraseña</label>
          <input
            className="focus: h-12 w-full rounded-sm border-none pl-4 outline-none"
            type="password"
            value={password}
            placeholder="123456"
            maxLength={8}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </section>
    </main>
  );
};

export default Login;
