import React, { useState } from "react";
import logoCij from "../../assets/logoCij.png";
import { useDispatch } from "react-redux";
import { validateUser } from "../../redux/reducers/loginSlice";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Login = () => {
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
    setAdminOrInvite(value);
    localStorage.setItem("userType", value);
  };

  return (
    <main id="container" className="flex h-screen w-screen items-center justify-center">
      <img src={logoCij} className="absolute top-0 mt-14" />
      <section
        id="loginModal"
        className="patternBg flex h-[50%] w-[50%] flex-col items-center justify-around rounded-md border-4 border-primary  p-8 shadow-2xl"
      >
        {!adminOrInvite && (
          <section className="flex w-full justify-around">
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
          </section>
        )}

        {adminOrInvite && (
          <section className="flex h-full w-full flex-col">
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
                <label className="self-start font-display text-sm font-[200] text-white">
                  Contraseña
                </label>
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
          </section>
        )}
      </section>
    </main>
  );
};

export default Login;
