import React from "react";
import { Card } from "@material-tailwind/react";

const TABLE_HEAD = ["Tipo", "Cantidad"];

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
];

const TableComponent = () => {
  return (
    <div className="h-full w-full">
      <Card className="h-full w-full  overflow-y-scroll rounded-md bg-base">
        <table className="w-full text-left ">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="bg-enfasis p-4 text-white">
                  <span className="text-sm font-bold">{head}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ tipo, cant }) => (
              <tr key={tipo} className="even:bg-white/10 ">
                <td className="p-4">
                  <span className="font-bold text-enfasis">{tipo}</span>
                </td>
                <td className="p-4">
                  <span className="font-bold text-enfasis ">{cant}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default TableComponent;
