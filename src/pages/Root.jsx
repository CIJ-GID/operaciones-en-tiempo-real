import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <main className="h-full w-full bg-base">
      <Outlet />
    </main>
  );
};
