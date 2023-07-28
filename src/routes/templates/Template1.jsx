import React from "react";

const Template1 = () => {
  return (
    <>
      <section className="flex h-[5%] w-full items-center justify-around bg-enfasis shadow-xl">
        Nav
      </section>
      <main className="grid  h-[95%] gap-2 overflow-y-scroll bg-base p-2 sm:grid-cols-2  md:grid-cols-3 md:gap-4 xl:grid-cols-4 2xl:grid-cols-6">
        <section className="templateSections enfasisBorders sm:hidden xl:row-span-1 xl:flex 2xl:col-span-1">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>
        <section className="templateSections enfasisBorders sm:col-span-2 md:col-span-3 xl:col-span-2 2xl:col-span-2 ">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>
        <section className="templateSections enfasisBorders hidden 2xl:col-span-2 2xl:flex ">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>
        <section className="templateSections enfasisBorders sm:hidden xl:flex 2xl:col-span-1">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>
        <section className="templateSections enfasisBorders md:row-span-2 xl:row-span-4 2xl:col-span-1 2xl:row-span-6">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>
        <section className="templateSections enfasisBorders md:row-span-2 2xl:col-span-4 2xl:row-span-3">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>

        <section className="templateSections enfasisBorders hidden 2xl:col-span-4 2xl:col-start-2 2xl:row-span-3 2xl:row-start-5 2xl:flex">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>
        <section className="templateSections enfasisBorders md:hidden xl:row-span-2 xl:flex 2xl:hidden">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>
        <section className="templateSections enfasisBorders md:row-span-2 xl:row-span-4 2xl:hidden">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>
        <section className="templateSections enfasisBorders sm:col-span-2 md:col-span-3 xl:col-span-2 xl:row-span-2 2xl:col-span-1 2xl:row-span-6">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>
        <section className="templateSections enfasisBorders hidden 2xl:col-span-6 2xl:row-span-1 2xl:flex">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>
      </main>
    </>
  );
};

export default Template1;
