import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
//* Routes
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import StepOne from "./routes/StepOne";
import StepTwo from "./routes/StepTwo";
import Login from "./routes/Login";
//* Components
import Index from "./components/templates/Index.jsx";
//* Helpers
import { handleCheckUser } from "./helpers/index";

//! Root seria la navbar, dentro del "Outlet" se renderizan los children.
//! Leer docs de react-router-dom para usar loaders y actions dependiendo el proyecto.
//? https://reactrouter.com/en/main/start/tutorial

const loggedRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <StepOne /> }, //* Elegir tipo de datos
      { path: "/2", element: <StepTwo /> }, //* Elegir tipo de pantalla
    ],
  },
  {
    path: "/presentacion/:idTemplate",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
]);

const notLoggedRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  const userHash = useSelector(
    (state) => state.user || JSON.parse(localStorage.getItem("userHash"))
  );

  return (
    <RouterProvider router={handleCheckUser(userHash) ? loggedRouter : notLoggedRouter} />
  );
};

export default App;
