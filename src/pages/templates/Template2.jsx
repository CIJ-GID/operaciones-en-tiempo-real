import React from "react";
import { useDispatch } from "react-redux";
import { updateData } from "../../redux/reducers/dataSlice";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../database/db";
import map from "../../assets/MAPA.mp4";
import logoCij from "../../assets/logoCij.png";
import logoMpf from "../../assets/logoMpf.png";
import {
  CircularProgress,
  GeneralInfo,
  SwiperComponent,
  TableComponent,
} from "../../components/Index";

export const Template2 = () => {
  const dispatch = useDispatch();

  //! Logica para actualizar datos en tiempo real
  onSnapshot(collection(db, import.meta.env.VITE_FIREBASE_DB_NAME), (snap) => {
    const data = [];
    snap.forEach((doc) => {
      data.push(doc.data());
    });
    dispatch(updateData(data));
  });

  return (
    <main className="h-screen">
      <section className="flex items-center justify-between bg-primary p-8">
        <img src={logoMpf} />
        <span className="text-center text-3xl font-[200] text-white">
          OPERATIVO <br />
          <strong className="font-[800]">RED FEDERAL EN ALERTA II</strong>
        </span>
        <img src={logoCij} />
      </section>
      <section className="grid h-full grid-cols-4 grid-rows-3  gap-10 border-2 bg-darkPrimary p-8">
        <section className="col-span-1 row-span-3">
          <TableComponent />
        </section>
        <section className="col-span-2 row-span-2 grid grid-cols-2 gap-4 p-2 outline">
          <section className="col-span-1 outline"></section>
          <section className="col-span-1 outline"></section>
        </section>
        <section className="col-span-1 row-span-3 outline"></section>
        <section className="col-span-2 row-span-1 outline"></section>
      </section>
    </main>
  );
};
