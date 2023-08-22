import React, { useState } from "react";
import logoCij from "../../assets/logoCij.png";
import { useDispatch } from "react-redux";
import { validateUser } from "../../redux/reducers/loginSlice";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export const Login = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [adminOrInvite, setAdminOrInvite] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword("");
    dispatch(validateUser({ password, adminOrInvite }));
  };

  const handleClick = (value) => {
    setPassword("");
    setAdminOrInvite(value);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", duration: 0.5 }}
      className={`mainContainer ${adminOrInvite === "admin" ? "toolsBg" : "hexagonsBg"}`}
    >
      <img src={logoCij} className="absolute top-0 mt-14" />
      <section
        id="loginModal"
        className={`flex
 h-[50%] w-[50%] flex-col items-center justify-around overflow-hidden rounded-md border-4 border-primary  bg-base p-8 shadow-2xl`}
      >
        {!adminOrInvite && (
          <motion.section
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            className="flex w-full justify-around"
          >
            <button
              className="loginButtons w-52 py-4 text-xl"
              onClick={(e) => handleClick(e.target.value)}
              value="admin"
            >
              ENTRAR COMO <strong>ADMIN</strong>
            </button>
            <button
              className="loginButtons w-52 py-4 text-xl"
              onClick={(e) => handleClick(e.target.value)}
              value="invitado"
            >
              ENTRAR COMO <strong>INVITADO</strong>
            </button>
          </motion.section>
        )}

        {adminOrInvite && (
          <motion.section
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            className="flex h-full w-full flex-col"
          >
            <button
              className="loginButtons w-24 font-bold"
              onClick={() => setAdminOrInvite(false)}
            >
              VOLVER
            </button>
            <form
              onSubmit={handleSubmit}
              className="flex h-full w-full flex-col items-center justify-center"
            >
              <div className="flex flex-col">
                <label>Contraseña</label>
                <div className="flex">
                  <input
                    type={show ? "text" : "password"}
                    value={password}
                    placeholder={
                      adminOrInvite === "admin"
                        ? "Contraseña de Admin"
                        : "Contraseña de Invitado"
                    }
                    maxLength={8}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <EyeIcon
                    className={`ml-2 w-8 text-primary ${
                      show && "hidden"
                    } transition hover:cursor-pointer hover:text-white/50`}
                    onClick={() => setShow(!show)}
                  />
                  <EyeSlashIcon
                    className={`ml-2 w-8 text-primary ${
                      !show && "hidden"
                    } transition hover:cursor-pointer hover:text-white/50`}
                    onClick={() => setShow(!show)}
                  />
                </div>
              </div>
            </form>
          </motion.section>
        )}
      </section>
    </motion.main>
  );
};
