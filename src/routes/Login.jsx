import React, { useState } from "react";
import logoCij from "../assets/logoCij.png";
import { useDispatch } from "react-redux";
import { validateUser } from "../redux/reducers/loginSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(validateUser(password));
  };

  return (
    <main
      id="container"
      className="bg-secondary/50 dark:bg-secondary flex h-screen w-screen items-center justify-center"
    >
      <img src={logoCij} className="absolute top-0 mt-14" />
      <section
        id="loginModal"
        className="flex h-[50%] w-[50%] flex-col items-center justify-center rounded-md bg-primary shadow-2xl"
      >
        <form
          onSubmit={handleSubmit}
          className="flex h-full w-[40%] flex-col items-center justify-center"
        >
          <label className="text-md self-start text-white">Contraseña</label>
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
