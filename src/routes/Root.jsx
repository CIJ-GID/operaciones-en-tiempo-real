import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="w-scree dark:bg-dark flex h-screen items-center justify-center bg-base">
      <div className="h-[90%] w-[95%] rounded-md bg-primary shadow-2xl">
        <Outlet />
      </div>
    </div>
  );
}
