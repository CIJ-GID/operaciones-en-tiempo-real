import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="w-scree flex h-screen items-center justify-center bg-secondary/50 dark:bg-secondary">
      <div className="h-[90%] w-[95%] rounded-md bg-primary shadow-2xl">
        <Outlet />
      </div>
    </div>
  );
}
