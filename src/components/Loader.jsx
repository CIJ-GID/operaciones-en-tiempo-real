import { RingLoader } from "react-spinners";

export function Loader() {
  return (
    <main className="absolute flex h-screen w-screen items-center justify-center bg-base/60">
      <RingLoader color={"#006473"} className="z-20 aspect-square w-20" />
    </main>
  );
}
