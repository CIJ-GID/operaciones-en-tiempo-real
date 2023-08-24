import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../redux/reducers/dataSlice";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../database/db";
import map from "../../assets/MAPA.mp4";
import logoCij from "../../assets/logoCij.png";
import logoMpf from "../../assets/logoMpf.png";
import {
  CircularProgress,
  SwiperComponent,
  TableWithBorderNoEven,
  TableWithEvenNoBorder,
  TableSimple,
} from "../../components/Index";
import { formatDataToTableData } from "../../helpers";

export const Template2 = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Op_RFA_III"), (snap) => {
      const data = [];
      for (const doc of snap.docs) {
        const docData = doc.data();
        if (docData.GUID) {
          data.push(docData);
        }
      }
      dispatch(updateData(data));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const memoizedData = useMemo(() => data, [data]);

  return (
    <main className="grid h-screen grid-rows-5">
      <section className="row-span-1 flex items-center justify-between bg-primary p-8">
        <img src={logoMpf} />
        <span className="text-center text-3xl font-[200] text-white">
          OPERATIVO <br />
          <strong className="font-[800]">RED FEDERAL EN ALERTA II</strong>
        </span>
        <img src={logoCij} />
      </section>
      <section className="row-span-4 grid h-full grid-cols-4 grid-rows-3  gap-10 bg-darkPrimary p-8">
        <section className="col-span-1 row-span-3 border-r-2 border-primary p-4">
          <TableWithEvenNoBorder
            tableData={[
              {
                tipo: "PROVINCIA",
                cant: "OBJETIVOS",
                cant2: "DETENIDOS",
                color: "text-principalTextColor font-bold",
              },
              {
                tipo: "Prov. Buenos Aires",
                cant: "02",
                cant2: "-",
              },
            ]}
          />
        </section>
        <section className="col-span-2 row-span-2 grid grid-cols-2 gap-4 p-2">
          <section className="col-span-1 ">
            <TableWithBorderNoEven tableData={formatDataToTableData(data)} />
          </section>
          <section className="col-span-1 flex flex-col items-center justify-between">
            <h3 className="text-center text-2xl uppercase text-principalTextColor">
              allanamientos en proceso
            </h3>
            <div className="w-[60%]">
              <CircularProgress
                porcentajeObjetivosCompletos={data.porcentajeObjetivosCompletos}
              />
            </div>
            <div className="w-[50%] border-l-8 border-primary pl-2">
              <TableSimple
                textSize={"text-xs"}
                tableData={[
                  { tipo: "REGISTROS", cant: 11500 },
                  { tipo: "DIRECCIONES IP", cant: 11500 },
                  { tipo: "ARCHIVOS CSAM", cant: 11500 },
                ]}
              />
            </div>
          </section>
        </section>
        <section className="col-span-1 row-span-3 border-l-2 border-primary p-4">
          <div className="h-full w-full">
            <video loop autoPlay className="h-full w-full rounded-md object-cover">
              <source src={map} type="video/mp4" />
            </video>
          </div>
        </section>
        <section className="col-span-2 row-span-1">
          <SwiperComponent />
        </section>
      </section>
    </main>
  );
};
