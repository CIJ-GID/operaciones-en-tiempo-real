import React from "react";
import PieChartComponent from "../../components/PieChartComponent";
import CircularProgress from "../../components/CircularProgress";
import BarChartComponent from "../../components/BarChartComponent";
import TableComponent from "../../components/TableComponent";
import RadarChartComponent from "../../components/RadarChartComponent";
import GeneralInfo from "../../components/GeneralInfo";
import map from "../../assets/MAPA.mp4";
import logoCij from "../../assets/logoCij.png";
import logoMpf from "../../assets/logoMpf.png";
import SwiperComponent from "../../components/Swiper";

const Template1 = () => {
  return (
    <>
      <section className="flex h-[8%] w-full items-center justify-between bg-enfasis p-2 font-anton text-3xl text-white shadow-xl sm:justify-center">
        <img src={logoCij} className="h-full sm:hidden" />
        <span>Operacion X</span>
        <img src={logoMpf} className="h-full sm:hidden" />
      </section>
      <section id="blank" className="h-[2%]"></section>
      <main className="grid  gap-2 overflow-y-scroll bg-base p-2 sm:grid-cols-2  md:grid-cols-3 md:gap-4 xl:grid-cols-4 2xl:grid-cols-6">
        <section className="templateSections enfasisBorders sm:hidden xl:row-span-1 xl:flex 2xl:col-span-1">
          <RadarChartComponent />
        </section>
        <section className="templateSections enfasisBorders sm:col-span-2 md:col-span-3 xl:col-span-2 2xl:col-span-2 ">
          <BarChartComponent />
        </section>
        <section className="templateSections enfasisBorders hidden 2xl:col-span-2 2xl:flex ">
          <PieChartComponent />
        </section>
        <section className="templateSections enfasisBorders sm:hidden xl:flex 2xl:col-span-1">
          <PieChartComponent />
        </section>
        <section className="templateSections enfasisBorders col-span-2  xl:row-span-4 2xl:col-span-1 2xl:row-span-6">
          <TableComponent />
        </section>
        <section className="templateSections enfasisBorders sm:col-span-1 sm:row-start-2 md:row-span-2 2xl:col-span-4 2xl:row-span-3">
          <CircularProgress />
        </section>

        <section className="templateSections enfasisBorders hidden 2xl:col-span-4 2xl:col-start-2  2xl:row-span-3 2xl:row-start-5 2xl:flex">
          <PieChartComponent />
        </section>
        <section className="templateSections enfasisBorders sm:col-start-2 sm:row-start-2 md:hidden xl:row-span-2 xl:flex 2xl:hidden">
          <GeneralInfo />
        </section>
        <section className="templateSections enfasisBorders p-0 sm:hidden md:row-span-2 xl:row-span-4 2xl:hidden">
          <div className="h-full w-full">
            <video
              controls
              loop
              autoPlay
              className="h-full w-full rounded-md object-cover"
            >
              <source src={map} type="video/mp4" />
            </video>
          </div>
        </section>
        <section className="templateSections enfasisBorders sm:col-span-2 sm:row-span-1 md:col-span-3 xl:col-span-2 xl:row-span-2 2xl:col-span-1 2xl:row-span-6">
          <SwiperComponent />
        </section>
        <section className="templateSections enfasisBorders hidden 2xl:col-span-6 2xl:row-span-1 2xl:flex">
          <PieChartComponent />
        </section>
      </main>
    </>
  );
};

export default Template1;
