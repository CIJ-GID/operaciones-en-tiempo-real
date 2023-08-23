import React from "react";

export const TableWithBorderNoEven = ({ tableData }) => {
  return (
    <table className="flex h-full w-full items-center justify-center text-left">
      <tbody className="w-full rounded-md">
        {tableData.map(({ tipo, cant, color }, index) => (
          <tr key={index} className="border-b-2 border-primary">
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
  );
};

export const TableWithEvenNoBorder = ({ tableData }) => {
  return (
    <table className="flex h-full w-full items-center justify-center text-left">
      <tbody className="w-full rounded-md">
        {tableData.map(({ tipo, cant, cant2, color }, index) => (
          <tr key={index} className="even:bg-primary/50">
            <td className="w-full p-2">
              <span className={`text-gray-300 sm:text-sm 2xl:text-3xl ${color}`}>
                {tipo}
              </span>
            </td>
            <td className="w-full p-2">
              <span className={`text-gray-300 sm:text-sm 2xl:text-3xl ${color}`}>
                {cant}
              </span>
            </td>
            <td className="w-full p-2">
              <span className={`text-gray-300 sm:text-sm 2xl:text-3xl ${color}`}>
                {cant2}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const TableSimple = ({ tableData, textSize }) => {
  return (
    <table className="flex h-full w-full items-center justify-center text-left">
      <tbody className="w-full rounded-md">
        {tableData.map(({ tipo, cant }, index) => (
          <tr key={index} className={textSize}>
            <td className="w-full">
              <span className={`text-gray-300`}>{tipo}</span>
            </td>
            <td className="w-full p-1">
              <span className={`text-gray-300`}>{cant}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
