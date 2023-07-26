import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
//* Routes
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import StepOne from "./routes/steps/StepOne";
import StepTwo from "./routes/steps/StepTwo";
import Login from "./routes/Login";
//* Templates
import Index from "./routes/templates/Index.jsx";
import Template1 from "./routes/templates/Template1.jsx";
import Template2 from "./routes/templates/Template2.jsx";
import Template3 from "./routes/templates/Template3.jsx";

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
      { path: "/", element: <StepOne /> },
      { path: "/2", element: <StepTwo /> },
    ],
  },
  {
    path: "/presentacion",
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/presentacion/1", element: <Template1 /> },
      { path: "/presentacion/2", element: <Template2 /> },
      { path: "/presentacion/3", element: <Template3 /> },
    ],
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
