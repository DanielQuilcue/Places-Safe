import { useEffect, useState } from "react";

export const TableRow = ({ items, handleViewDetails }) => {
  const [formattedPlate, setFormattedPlate] = useState("");
  useEffect(() => {
    const plate = items.plate;
    const letters = plate.slice(0, 3);
    const numbers = plate.slice(3);

    // Formar la placa en el formato deseado
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
        <td className="py-2 border-b border-gray-500 bg-white text-sm text-center">
          {/* {items.vehicle === "carro" ? (
            <BiCar /> // Renderiza el ícono de carro
          ) : (
            <BiCar /> // Renderiza el ícono de bicicleta
          )} */}
          <span
            className={` inline-block px-3 py-1 font-semibold ${
              items.vehicle === "carro" ? "text-green-600  " : "text-red-900"
            } leading-tight`}
          >
            <span className=" uppercase">{items.vehicle}</span>
          </span>
        </td>
        <td className="py-2 border-b border-gray-500 bg-white text-sm text-center">
          <span
            className={` inline-block px-3 py-1 font-semibold ${
              items.parked === "si" ? "text-green-600  " : "text-red-900"
            } leading-tight`}
          >
            <span className=" uppercase">{items.parked}</span>
          </span>
        </td>
        <td className="py-2 border-b border-gray-500 bg-white text-sm text-center">
          <p className="text-gray-900 whitespace-no-wrap uppercase">
            Torre: <span>{items.tower}</span>
          </p>
          <p className="text-gray-900 whitespace-no-wrap uppercase">
            Apart: <span>{items.apartment}</span>
          </p>
        </td>
        <td className="py-2 border-b border-gray-500 bg-white text-sm text-center">
          {items.parkedNumber}
        </td>

        <td className="py-2 border-b border-gray-500 bg-white text-sm text-center">
          {"defirnir"}
        </td>
        <td className="py-2 border-b border-gray-500 bg-white text-sm text-center">
          <button
            type="button"
            onClick={handleViewDetails}
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            Ver
          </button>
        </td>
      </tr>
    </>
  );
};
