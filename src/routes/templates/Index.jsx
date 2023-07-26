import React from "react";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <main className="h-screen w-screen bg-base dark:bg-dark ">
      <Outlet />
    </main>
  );
};

export default Index;
