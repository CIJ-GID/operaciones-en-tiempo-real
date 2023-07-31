import React from "react";

const TABLE_ROWS = [
  {
    tipo: "Grupo 1",
    cant: 15,
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

const TableComponent = () => {
  return (
    <div className="h-full w-full">
      <table className="flex h-full w-full items-center justify-center text-left">
        <tbody className="w-full rounded-md border-2 border-base">
          {TABLE_ROWS.map(({ tipo, cant }) => (
            <tr key={tipo} className="even:bg-white/10 ">
              <td className="w-full p-2">
                <span className="font-bold text-gray-300">{tipo}</span>
              </td>
              <td className="w-full p-2">
                <span className="font-bold text-gray-300 ">{cant}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
