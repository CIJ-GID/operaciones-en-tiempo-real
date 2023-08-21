import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const GeneralInfo = () => {
  // Obtén el valor de "operation" desde Redux
  const operation = useSelector((state) => state.operation);

  const rows = [
    {
      tipo: "Operaciones Totales",
      cant: operation.operacionesTotales,
    },
    {
      tipo: "Fuerzas Intervenidas",
      cant: operation.fuerzasIntervenidas,
    },
    {
      tipo: "Zonas Afectadas",
      cant: operation.zonasAfectadas,
    },
    {
      tipo: "Sospechosos",
      cant: operation.sospechosos,
    },
  ];

  // No es necesario utilizar useState y useEffect para actualizar "operation"

  return (
    <div className="h-full w-full">
      <table className="flex h-full w-full items-center justify-center text-left">
        <tbody className="w-full rounded-md border-2 border-base">
          {rows.map(({ tipo, cant }) => (
            <tr key={tipo} className="2xl:h-18 even:bg-white/10">
              <td className="w-full p-2 2xl:p-4">
                <span className="font-bold text-gray-300 sm:text-sm 2xl:text-3xl">
                  {tipo}
                </span>
              </td>
              <td className="w-full p-2">
                <span className="font-bold text-gray-300 sm:text-sm 2xl:text-3xl">
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
