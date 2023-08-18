import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <main className="h-screen w-screen bg-base">
      <Outlet />
    </main>
  );
};
