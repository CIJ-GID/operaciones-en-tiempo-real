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
      <section className="flex h-[8%] w-full items-center bg-enfasis p-2 px-8 font-anton text-3xl text-white shadow-xl sm:justify-center md:justify-between">
        <img src={logoCij} className="hidden h-full md:flex 2xl:h-[80%]" />
        <span className="2xl:text-8xl">Operacion X</span>
        <img src={logoMpf} className="hidden h-full md:flex 2xl:h-[80%]" />
      </section>
      <section id="blank" className="h-[2%]"></section>
      <main className="grid  gap-2 overflow-x-hidden overflow-y-scroll bg-base p-2 sm:grid-cols-2  md:grid-cols-3 md:gap-4 xl:h-[90%] xl:grid-cols-4 2xl:grid-cols-6 2xl:gap-8 2xl:p-8">
        <section className="templateSections enfasisBorders hidden md:row-start-3 md:flex xl:hidden ">
          <PieChartComponent />
        </section>
        <section className="templateSections enfasisBorders sm:hidden md:row-start-3 md:flex xl:row-span-1 2xl:row-span-1">
          <RadarChartComponent />
        </section>
        <section className="templateSections enfasisBorders sm:col-span-2 md:col-span-3 xl:col-span-2 2xl:col-span-4 2xl:row-span-1">
          <BarChartComponent />
        </section>
        <section className="templateSections enfasisBorders sm:hidden xl:flex 2xl:col-span-1 2xl:row-span-1">
          <PieChartComponent />
        </section>
        <section className="templateSections enfasisBorders col-span-2 md:col-span-1 xl:row-span-2 2xl:col-span-2 2xl:row-span-4">
          <TableComponent />
        </section>
        <section className="templateSections enfasisBorders sm:col-span-1 sm:row-start-2 md:col-start-2 xl:row-span-1 2xl:col-span-2 2xl:col-start-3 2xl:row-span-2">
          <CircularProgress />
        </section>
        <section className="templateSections enfasisBorders sm:col-start-2 sm:row-start-2 md:col-start-3 xl:row-span-1 2xl:col-span-2 2xl:col-start-3 2xl:row-span-2">
          <GeneralInfo />
        </section>
        <section className="templateSections enfasisBorders p-0 sm:hidden xl:row-span-2 xl:flex 2xl:col-span-2 2xl:col-start-5 2xl:row-span-4 2xl:row-start-2">
          <div className="h-full w-full">
            <video loop autoPlay className="h-full w-full rounded-md object-cover">
              <source src={map} type="video/mp4" />
            </video>
          </div>
        </section>
        <section className="templateSections enfasisBorders sm:col-span-2 sm:row-span-1 md:col-span-3 xl:col-span-2 xl:row-span-1  2xl:col-span-6 2xl:row-span-1 2xl:!min-h-[50px] ">
          <SwiperComponent />
        </section>
        <section className="templateSections enfasisBorders hidden  md:row-start-3 md:flex xl:hidden">
          <PieChartComponent />
        </section>
      </main>
    </>
  );
};

export default Template1;
