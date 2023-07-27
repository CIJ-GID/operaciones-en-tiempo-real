import React from "react";

const Template1 = () => {
  return (
    <>
      <section className="flex h-[5%] w-full items-center justify-around bg-enfasis shadow-xl">
        Nav
      </section>
      <main className="grid-rows-12 sm:grid-rows-8 grid  h-[95%] gap-2 overflow-y-scroll bg-base p-2 sm:grid-cols-2 sm:gap-2 md:grid-cols-4 md:grid-rows-3 md:gap-6">
        <section className="templateSections enfasisBorders sm:col-span-2 md:col-span-4">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>
        <section className="templateSections enfasisBorders md:row-span-2">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>
        <section className="templateSections enfasisBorders">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>

        <section className="templateSections enfasisBorders">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>
        <section className="templateSections enfasisBorders md:row-span-2">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>
        <section className="templateSections enfasisBorders sm:col-span-2">
          <div className="m-4 h-40 w-full  bg-gray-700"></div>
        </section>
      </main>
    </>
  );
};

export default Template1;
