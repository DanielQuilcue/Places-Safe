import { useEffect, useState } from "react";
import { usePlates } from "../helper/index";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import Info from "./Info";
import { ModalForm } from "./ModalForm";

const Table = ({ searchTerm }) => {
  const { getPlates, plates } = usePlates();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPlateId, setSelectedPlateId] = useState([]);

  const [open, setOpen] = useState(false);

  const handleViewDetails = (item) => {
    setSelectedPlateId([item]);
    setOpen(true);
  };
  const selectedPlateData = {
    item: selectedPlateId,
  };
  const pageSize = 7;

  useEffect(() => {
    getPlates();
  }, [getPlates]);

  if (plates.length === 0) return <Info />;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, plates.length - 1);

  const visiblePlates = plates.slice(startIndex, endIndex + 1).reverse();

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  if (plates.length === 0) return <Info />;

  return (
    <>
      <div className="antialiased font-sans  w-full h-full rounded-lg flex-shrink-0 flex-grow ">
        <div className=" mx-auto px-4 sm:px-8  ">
          <div className="py-2">
            <div className="my-2 flex sm:flex-row flex-col gap-1 justify-between">
              {/* <div className="flex flex-row mb-1 sm:mb-0">
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
              </div> */}

              {/* <div className="block ">
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
                  // value={searchTerm}
                  // onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div> */}
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                {open && (
                  <ModalForm
                    open={open}
                    setOpen={setOpen}
                    selectedPlateData={selectedPlateData}
                  />
                )}
                <table className="min-w-full leading-normal bg-white">
                  <TableHeader />
                  <tbody>
                    {visiblePlates
                      .filter((item) =>
                        searchTerm
                          ? item.names
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          : true
                      )
                      .map((items) => (
                        <TableRow
                          key={items._id}
                          items={items}
                          handleViewDetails={() => handleViewDetails(items)}
                        />
                      ))}
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                  {/* <span className="text-xs xs:text-sm text-gray-900">
                    Mostrando 1 a 4 de 50 Entradas
                  </span> */}
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button
                      className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                    >
                      Anterior
                    </button>
                    <button
                      className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                      onClick={handleNextPage}
                      disabled={endIndex === plates.length - 1}
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
