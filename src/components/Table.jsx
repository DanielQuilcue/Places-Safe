import Buttons from "./Buttons";
import dashboard from "../data/dashboard.json";
// import Graft from "./Graph";

const Table = () => {
  return (
    <>
      <body className="antialiased font-sans bg-white w-full">
        {/* <Graft /> */}
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div>
              <h2 className="text-2xl font-semibold leading-tight uppercase">
                Dashboard
              </h2>
            </div>
            <div className="my-2 flex sm:flex-row flex-col">
              <div className="flex flex-row mb-1 sm:mb-0">
                <div className="relative">
                  <select className="h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option>5</option>
                    <option>10</option>
                    <option>20</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <select className="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                    <option>Todos</option>
                    <option>Si</option>
                    <option>No</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="block relative">
                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current text-gray-500"
                  >
                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                  </svg>
                </span>
                <input
                  placeholder="Buscar"
                  className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
              </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-300 text-left leading-4 text-black tracking-wider uppercase">
                        ID
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-300 text-left leading-4 text-black tracking-wider uppercase">
                        PLACA
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-300 text-left leading-4 text-black tracking-wider uppercase">
                        Nombres
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-300 text-center leading-4 text-black tracking-wider uppercase">
                        Vehiculo
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-300  leading-4 text-black tracking-wider uppercase text-center">
                        parqueado
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-300 leading-4 text-black tracking-wider uppercase text-center">
                        Ver mas
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboard.map((items) => (
                      <tr key={items.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            #{items.id}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {items.placa}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {items.nombre}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {items.vehiculo}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                          <span
                            className={`relative inline-block px-3 py-1 font-semibold ${
                              items.parqueado === "Si"
                                ? "text-green-900"
                                : "text-red-900"
                            } leading-tight`}
                          >
                            <span
                              aria-hidden
                              className={`absolute inset-0 ${
                                items.parqueado === "Si"
                                  ? "bg-green-200"
                                  : "bg-red-200"
                              } opacity-50 rounded-full`}
                            ></span>
                            <span className="relative uppercase">
                              {items.parqueado}
                            </span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                          <Buttons type="ver" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <span className="text-xs xs:text-sm text-gray-900">
                    Mostrando 1 a 4 de 50 Entradas
                  </span>
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                      Anterior
                    </button>
                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Table;
