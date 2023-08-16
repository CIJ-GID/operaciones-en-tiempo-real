import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { handleCheckUser } from "../helpers/index";
import Login from "../pages/session/Login.jsx";
import Root from "../pages/Root";
import ErrorPage from "../pages/error/ErrorPage";
import StepOne from "../pages/steps/StepOne";
import StepTwo from "../pages/steps/StepTwo";
import Index from "../pages/templates/Index";
import Template1 from "../pages/templates/Template1";
import Template2 from "../pages/templates/Template2";
import Template3 from "../pages/templates/Template3";
import { useSelector } from "react-redux";

const Router = () => {
  const userHash = useSelector(
    (state) => state.user || JSON.parse(localStorage.getItem("userHash"))
  );
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

  const router = handleCheckUser(userHash) ? loggedRouter : notLoggedRouter;

  return <RouterProvider router={router} />;
};

export default Router;
