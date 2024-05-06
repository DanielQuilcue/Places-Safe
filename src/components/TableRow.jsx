import { useEffect, useState } from "react";

export const TableRow = ({ items, handleViewDetails }) => {
  const [formattedPlate, setFormattedPlate] = useState("");
  useEffect(() => {
    const plate = items.plate;
    const letters = plate.slice(0, 3);
    const numbers = plate.slice(3);

    setFormattedPlate(`${letters}-${numbers}`);
  }, [items]);

  return (
    <>
      <tr key={items._id}>
        <td className="py-2 border-b border-gray-500 bg-white text-sm text-center">
          <p className="text-gray-900 whitespace-no-wrap">{items.id}</p>
        </td>
        <td className="py-2  border-b border-gray-500 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap uppercase">
            {formattedPlate}
          </p>
        </td>
        <td className=" py-2 border-b border-gray-500 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap uppercase">
            {items.names}
          </p>
        </td>
        <td className=" py-2 border-b border-gray-500 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap uppercase">
            {items.typeEntry}
          </p>
        </td>
        <td className="py-2 border-b border-gray-500 bg-white text-sm text-center">
          <span
            className={` inline-block px-3 py-1 font-semibold ${
              items.vehicle === "carro"
                ? " text-emerald-500  "
                : "text-rose-500"
            } leading-tight`}
          >
            <span className=" uppercase">{items.vehicle}</span>
          </span>
        </td>
        <td className="py-2 border-b border-gray-500 bg-white text-sm text-center">
          <span
            className={` inline-block px-3 py-1 font-semibold ${
              items.parked === "si" ? "text-emerald-500 " : "text-rose-500"
            } leading-tight`}
          >
            <span className=" uppercase">{items.parked}</span>
          </span>
        </td>
        <td className="py-2 border-b border-gray-500 bg-white text-sm text-center">
          <p className="text-gray-900 whitespace-no-wrap uppercase">
            <span>{items.tower}</span>
          </p>
        </td>
        <td className="py-2 border-b border-gray-500 bg-white text-sm text-center">
          <p className="text-gray-900 whitespace-no-wrap uppercase">
            <span>{items.apartment}</span>
          </p>
        </td>

        <td className="py-2 border-b border-gray-500 bg-white text-sm text-center">
          {items.parkedNumber}
        </td>

        <td className="py-2 border-b border-gray-500 bg-white text-sm text-center">
          {items.typeEntry === "propietario" ? "No Aplica" : items.pay}
        </td>
        <td className="py-2 border-b border-gray-500 bg-white text-sm text-center">
          <button
            type="button"
            onClick={handleViewDetails}
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Ver
          </button>
        </td>
      </tr>
    </>
  );
};
