import React from "react";

const TABLE_ROWS = [
  {
    tipo: "ALLANAMIENTOS",
    cant: 62,
    color: "text-[#6BBED0] font-bold",
  },
  {
    tipo: "grupo 2",
    cant: 15,
  },
  {
    tipo: "Grupo 3",
    cant: 15,
  },
  {
    tipo: "Grupo 4",
    cant: 15,
  },
  {
    tipo: "Grupo 5",
    cant: 15,
  },
  {
    tipo: "Grupo 6",
    cant: 15,
  },
  {
    tipo: "Grupo 7",
    cant: 15,
  },
  {
    tipo: "Grupo 8",
    cant: 15,
  },
  {
    tipo: "Grupo 9",
    cant: 15,
  },
  {
    tipo: "Grupo 10",
    cant: 15,
  },
];

export const TableComponent = () => {
  return (
    <div className="h-full w-full">
      <table className="flex h-full w-full items-center justify-center text-left">
        <tbody className="w-full rounded-md">
          {TABLE_ROWS.map(({ tipo, cant, color }) => (
            <tr key={tipo} className="2xl:h-18 border-b-2 border-primary">
              <td className="w-full p-2 2xl:p-4 ">
                <span className={`text-gray-300 sm:text-sm 2xl:text-3xl ${color}`}>
                  {tipo}
                </span>
              </td>
              <td className="w-full p-2">
                <span className={`text-gray-300 sm:text-sm 2xl:text-3xl ${color}`}>
                  {cant}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
