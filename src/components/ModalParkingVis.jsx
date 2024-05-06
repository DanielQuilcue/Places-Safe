import TimeSvg from "../assets/Plate/time.svg";
export default function ModalParkingVis({ open, setOpen }) {
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div className="relative w-2/4  ">
        {open && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="rounded-lg bg-white p-8 shadow-2xl z-60">
              <div className="flex justify-end">
                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-md "
                  onClick={handleOpen}
                >
                  Cerrar
                </button>{" "}
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8">
                  <div className="flex justify-center  items-center mb-4">
                    <h3 className="text-xl font-bold leading-none text-gray-900  uppercase ">
                      Vehiculo
                    </h3>
                  </div>
                  <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-700">
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="w-8 h-8 rounded-full"
                              src={TimeSvg}
                              alt="Neil image"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold  text-gray-900 truncate ">
                              {/* Hora y fecha de ingreso: */}
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                            {/* {selectedVehicle &&
                              selectedVehicle.map((item) => {
                                return <p key={item.id}>{item.id}</p>;
                              })} */}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
