
const TABLE_ROWS = [
  {
    tipo: "Operaciones Totales",
    cant: 60,
  },
  {
    tipo: "Fuerzas Intervenidas",
    cant: 10,
  },
  {
    tipo: "Zonas Afectadas",
    cant: 20,
  },
  {
    tipo: "Sospechosos",
    cant: 25,
  },
];

const GeneralInfo = () => {
  return (
    <div className="h-full w-full">
      <table className="flex h-full w-full items-center justify-center text-left">
        <tbody className="w-full rounded-md border-2 border-base">
          {TABLE_ROWS.map(({ tipo, cant }) => (
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

export default GeneralInfo;
