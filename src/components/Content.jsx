import { useEffect, useState } from "react";
import ParkedItem from "./ParkedItem";
import { getParking } from "../services/admin.js";
import RecordParking from "./RecordParking.jsx";

export default function Content() {
  const [parqueadero, setParqueadero] = useState(null);

  useEffect(() => {
    const obtenerParqueadero = async () => {
      try {
        const response = await getParking();
        const formattedData = response.map(
          ({ _id, createdAt, updatedAt, parqueaderosDisponibles }) => ({
            _id,
            createdAt: new Date(createdAt).toLocaleString(), // Formatea la fecha de creación
            updatedAt: new Date(updatedAt).toLocaleString(), // Formatea la fecha de actualización
            totalParqueadero: parqueaderosDisponibles.totalParqueadero,
            parqueaderoAsingadoPro:
              parqueaderosDisponibles.parqueaderoAsingadoPro,
            parqueaderoAsingadoVis:
              parqueaderosDisponibles.parqueaderoAsingadoVis,
            propietarios: parqueaderosDisponibles.propietarios,
            visitantes: parqueaderosDisponibles.visitantes,
          })
        );
        setParqueadero(formattedData);
      } catch (error) {
        console.error("Error al obtener el parqueadero:", error);
      }
    };

    obtenerParqueadero();
  }, []);

  console.log(parqueadero);
  return (
    <>
      <div className="p-6">
        <ParkedItem />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-blue-900  w-full shadow-lg rounded">
            <div className="rounded-t mb-0 px-0 border-0">
              <div className="flex flex-wrap items-center px-4 py-2">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50 text-center">
                    Capacidad
                  </h3>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 bg-gray-100 dark:bg-blue-900   text-black dark:text-white   align-middle border border-solid border-gray-200 dark:border-white  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Vehiculos
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-blue-900   text-black dark:text-white   align-middle border border-solid border-gray-200 dark:border-white  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        uso
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-blue-900   text-black dark:text-white   align-middle border border-solid border-gray-200 dark:border-white  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Capacidad
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-blue-900   text-black dark:text-white   align-middle border border-solid border-gray-200 dark:border-white  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Grafico
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-gray-700 dark:text-gray-100">
                      <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        Carro
                      </th>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {parqueadero &&
                          parqueadero.map((parking) => (
                            <p key={parking._id}>
                              {parking.propietarios.usoCarros +
                                parking.visitantes.usoCarros}
                            </p>
                          ))}
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {parqueadero &&
                          parqueadero.map((parking) => (
                            <p key={parking._id}>
                              {parking.propietarios.carroDisponible +
                                parking.visitantes.carroDisponible}
                            </p>
                          ))}
                      </td>

                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {parqueadero &&
                          parqueadero.map((parking) => (
                            <div
                              className="flex items-center"
                              key={parking._id}
                            >
                              <span className="mr-2">
                                {((parking.propietarios.usoCarros +
                                  parking.visitantes.usoCarros) /
                                  (parking.propietarios.carroDisponible +
                                    parking.visitantes.carroDisponible)) *
                                  100}
                                %
                              </span>
                              <div className="relative w-full">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                  <div
                                    style={{
                                      width: `${
                                        ((parking.propietarios.usoCarros +
                                          parking.visitantes.usoCarros) /
                                          (parking.propietarios
                                            .carroDisponible +
                                            parking.visitantes
                                              .carroDisponible)) *
                                        100
                                      }%`,
                                    }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </td>
                    </tr>
                    <tr className="text-gray-700 dark:text-gray-100">
                      <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        Motos
                      </th>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {parqueadero &&
                          parqueadero.map((parking) => (
                            <p key={parking._id}>
                              {parking.propietarios.usoMotos +
                                parking.visitantes.usoCarros}
                            </p>
                          ))}
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {parqueadero &&
                          parqueadero.map((parking) => (
                            <p key={parking._id}>
                              {parking.propietarios.motosDisponibles +
                                parking.visitantes.motosDisponibles}
                            </p>
                          ))}
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {parqueadero &&
                          parqueadero.map((parking) => (
                            <div
                              className="flex items-center"
                              key={parking._id}
                            >
                              <span className="mr-2">
                                {(
                                  ((parking.propietarios.usoMotos +
                                    parking.visitantes.usoMotos) /
                                    (parking.propietarios.motosDisponibles +
                                      parking.visitantes.motosDisponibles)) *
                                  100
                                ).toFixed(2)}
                                %
                              </span>

                              <div className="relative w-full">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                  <div
                                    style={{
                                      width: `${
                                        ((parking.propietarios.usoMotos +
                                          parking.visitantes.usoMotos) /
                                          (parking.propietarios
                                            .motosDisponibles +
                                            parking.visitantes
                                              .motosDisponibles)) *
                                        100
                                      }%`,
                                    }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <RecordParking />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
            <div className="flex justify-center mb-4 items-start">
              <div className="font-medium uppercase">
                Dinero ingreado al conjunto
              </div>
              <div className="dropdown">
                <button
                  type="button"
                  className="dropdown-toggle text-gray-400 hover:text-gray-600"
                >
                  <i className="ri-more-fill"></i>
                </button>
                <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div className="rounded-md border border-dashed border-gray-200 p-4">
                <div className="flex items-center mb-0.5">
                  <div className="text-xl font-semibold">10</div>
                  <span className="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1">
                    $80
                  </span>
                </div>
                <span className="text-gray-400 text-sm">pending</span>
              </div>
              <div className="rounded-md border border-dashed border-gray-200 p-4">
                <div className="flex items-center mb-0.5">
                  <div className="text-xl font-semibold">50</div>
                  <span className="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1">
                    +$469
                  </span>
                </div>
                <span className="text-gray-400 text-sm">Completed</span>
              </div>
              <div className="rounded-md border border-dashed border-gray-200 p-4">
                <div className="flex items-center mb-0.5">
                  <div className="text-xl font-semibold">4</div>
                  <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-500 leading-none ml-1">
                    -$130
                  </span>
                </div>
                <span className="text-gray-400 text-sm">Canceled</span>
              </div>
            </div>
            <div>
              <canvas id="order-chart"></canvas>
            </div>
          </div>
          <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
            <div className="flex justify-center  mb-4 items-start">
              <div className="font-medium uppercase">Pagos de parqueadero</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[460px]">
                <thead>
                  <tr>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                      Vehiculo
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                      Valor
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                      Estado
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <img
                          src="https://placehold.co/32x32"
                          alt=""
                          className="w-8 h-8 rounded object-cover block"
                        />
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Plate
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-emerald-500">
                        +$235
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <img
                          src="https://placehold.co/32x32"
                          alt=""
                          className="w-8 h-8 rounded object-cover block"
                        />
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Plate
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-rose-500">
                        -$235
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                        Withdrawn
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <img
                          src="https://placehold.co/32x32"
                          alt=""
                          className="w-8 h-8 rounded object-cover block bg-black"
                        />
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Plate
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-emerald-500">
                        +$235
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <img
                          src="https://placehold.co/32x32"
                          alt=""
                          className="w-8 h-8 rounded object-cover block"
                        />
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Plate
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-rose-500">
                        -$235
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                        Withdrawn
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <img
                          src="https://placehold.co/32x32"
                          alt=""
                          className="w-8 h-8 rounded object-cover block"
                        />
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Plate
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-emerald-500">
                        +$235
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <img
                          src="https://placehold.co/32x32"
                          alt=""
                          className="w-8 h-8 rounded object-cover block"
                        />
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Plate
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-rose-500">
                        -$235
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                        Withdrawn
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <img
                          src="https://placehold.co/32x32"
                          alt=""
                          className="w-8 h-8 rounded object-cover block"
                        />
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Plate
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-emerald-500">
                        +$235
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <img
                          src="https://placehold.co/32x32"
                          alt=""
                          className="w-8 h-8 rounded object-cover block"
                        />
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Plate
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-rose-500">
                        -$235
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                        Withdrawn
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <img
                          src="https://placehold.co/32x32"
                          alt=""
                          className="w-8 h-8 rounded object-cover block"
                        />
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Plate
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-emerald-500">
                        +$235
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <img
                          src="https://placehold.co/32x32"
                          alt=""
                          className="w-8 h-8 rounded object-cover block"
                        />
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Plate
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-rose-500">
                        -$235
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                        Withdrawn
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
