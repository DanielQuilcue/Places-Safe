import CardParking from "./CardParking";
import { HashLoader } from "react-spinners";

import { getMotos, getCarros } from "../services/parking";
import { useEffect, useState } from "react";
import ModalParkingVis from "./ModalParkingVis";
export default function AssignParking() {
  const [isLoading, setIsLoading] = useState(false);
  const [motos, setMotos] = useState([]);
  const [carros, setCarros] = useState([]);
  // const [selectedVehicle, setSelectedVehicle] = useState(null);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    const getVehicle = async () => {
      try {
        setIsLoading(true);
        const resMotos = await getMotos();
        setMotos(resMotos);

        const resCarros = await getCarros();
        setCarros(resCarros);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getVehicle();
    const intervalId = setInterval(() => {
      getVehicle();
    }, 60000); // 60000 milisegundos = 1 minuto

    return () => clearInterval(intervalId);
  }, []);

  const togglePopover = () => {
    setOpen(!open);
    // setSelectedVehicle(vehicle);
  };
  if (isLoading) return <HashLoader color="#367ed6" />;
  console.log(motos);
  return (
    <>
      <CardParking />
      {open && (
        <ModalParkingVis
          open={open}
          setOpen={setOpen}
          // selectedVehicle={selectedVehicle}
        />
      )}
      <div className="flex h-auto  justify-center">
        <div className="w-full md:w-1/2 rounded-lg bg-white px-8 py-4 shadow-md m-4">
          <div className="px-1 py-4">
            <h3 className="font-bold text-2xl font-sans uppercase text-center ">
              Parqueadero de visitantes carros
            </h3>
          </div>
          <ul className="grid grid-cols-4 px-1">
            {carros.map((vehicle) => (
              <li className="flex items-center flex-col" key={vehicle.id}>
                <button
                  type="button"
                  onClick={() => togglePopover(vehicle)}
                  className={`text-white border ${
                    vehicle.estado === "desocupado"
                      ? "border-green-700 bg-green-700 hover:bg-green-800 focus:ring-green-300"
                      : "border-red-700 bg-red-700 hover:bg-red-800 focus:ring-red-300"
                  } font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
                >
                  # {vehicle.id}
                </button>
                <p className="font-semibold text-black mb-1  ">
                  {vehicle.plateId === null ? " Sin asignar" : vehicle.plateId}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 rounded-lg bg-white px-8 py-4 shadow-md m-4">
          <div className="px-1 py-4">
            <h3 className="font-bold text-2xl font-sans uppercase text-center ">
              Parqueadero de visitantes motos
            </h3>
          </div>
          <ul className="grid grid-cols-4 px-1">
            {motos.map((vehicle) => (
              <li className="flex items-center flex-col" key={vehicle.id}>
                <button
                  type="button"
                  className={`text-white border ${
                    vehicle.estado === "desocupado"
                      ? "border-green-700 bg-green-700 hover:bg-green-800 focus:ring-green-300"
                      : "border-red-700 bg-red-700 hover:bg-red-800 focus:ring-red-300"
                  } font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
                >
                  # {vehicle.id}
                </button>
                <p className="font-semibold text-black">
                  {vehicle.plateId === null ? " Sin asignar" : vehicle.plateId}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
