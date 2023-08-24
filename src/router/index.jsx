import React, { useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Template1,
  Template2,
  Template3,
  ErrorPage,
  Login,
  Root,
  DatosGenerales,
  Objetivos,
} from "../pages/Index.js";
import { handleCheckUser } from "../helpers/index";

const Router = () => {
  const user = useSelector((state) => state.user);

  const { hash, type } = useMemo(
    () => JSON.parse(localStorage.getItem("user")) || user,
    [user]
  );

  const isAdmin = type === "admin";
  const isAuthenticated = handleCheckUser(hash, type);

  const adminRoutes = [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <DatosGenerales />,
          index: true,
        },
        {
          path: "/2",
          element: <Objetivos />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/dashboard", element: <Template1 />, index: true },
        { path: "/dashboard/2", element: <Template2 /> },
        { path: "/dashboard/3", element: <Template3 /> },
      ],
    },
  ];

  const guestRoutes = [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        // { path: "/", element: <Template1 />, index: true },
        { path: "/", element: <Template2 />, index: true },
        { path: "/3", element: <Template3 /> },
      ],
    },
  ];

  const notLoggedRoutes = [
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
  ];

  let routerConfig;

  if (!isAuthenticated) {
    routerConfig = notLoggedRoutes;
  } else if (isAdmin) {
    routerConfig = adminRoutes;
  } else {
    routerConfig = guestRoutes;
  }

  const router = createBrowserRouter(routerConfig);

  return <RouterProvider router={router} />;
};

export default Router;
