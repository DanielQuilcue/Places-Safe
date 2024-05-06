import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createParking, getParking } from "../services/admin";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ParkingSvg from "../assets/Plate/parking.svg";
export default function ParkingCreate({ setOpen, open }) {
  const { register, handleSubmit, setValue } = useForm();

  const [dataFinal, setDataFinal] = useState([]);

  const [formData, setFormData] = useState({
    totalParqueadero: "",
    parqueaderoAsingadoPro: "",
    parqueaderoAsingadoVis: "",
    usoCarrosPropietarios: "",
    usoMotosPropietarios: "",
    carroDisponiblePropietarios: "",
    motosDisponiblesPropietarios: "",
    usoCarrosVisitantes: "",
    usoMotosVisitantes: "",
    carroDisponibleVisitantes: "",
    motosDisponiblesVisitantes: "",
  });
  useEffect(() => {
    const loadingData = async () => {
      const dataParking = await getParking();
      setDataFinal(dataParking);

      setValue("totalParqueadero", dataParking.totalParqueadero);
      setValue("parqueaderoAsingadoPro", dataParking.parqueaderoAsingadoPro);
    };
    loadingData();
  }, [setValue]);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    // createParking(data);
  });

  useEffect(() => {
    if (dataFinal.length > 0) {
      const data = dataFinal[0].parqueaderosDisponibles;
      setFormData({
        totalParqueadero: data.totalParqueadero,
        parqueaderoAsingadoPro: data.parqueaderoAsingadoPro,
        parqueaderoAsingadoVis: data.parqueaderoAsingadoVis,
        usoCarrosPropietarios: data.propietarios.usoCarros,
        usoMotosPropietarios: data.propietarios.usoMotos,
        carroDisponiblePropietarios: data.propietarios.carroDisponible,
        motosDisponiblesPropietarios: data.propietarios.motosDisponibles,
        usoCarrosVisitantes: data.visitantes.usoCarros,
        usoMotosVisitantes: data.visitantes.usoMotos,
        carroDisponibleVisitantes: data.visitantes.carroDisponible,
        motosDisponiblesVisitantes: data.visitantes.motosDisponibles,
      });
    }
  }, [dataFinal, dataFinal.length]);

  const handleOpen = () => setOpen(!open);
  // const total = data.mapa((item) => {
  //   return item.totalParqueadero;
  // });
  return (
    <>
      <div className="flex justify-center items-centerbg-white w-full">
        <ToastContainer />
        <div className="flex container justify-center">
          <div className=" p-2   rounded-2xl w-auto  ">
            <div className="flex justify-end ">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={handleOpen}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>{" "}
            </div>
            <div className="flex justify-center text-center py-3">
              <h1 className="font-bold uppercase text-5xl">
                registrar parqueadero
              </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className="relative">
                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                    <p className="mx-4 mb-0 text-center font-semibold text-black">
                      Propietarios
                    </p>
                  </div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Total Parqueaderos
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        src={ParkingSvg}
                      />
                    </div>
                    <input
                      {...register(
                        "parqueaderosDisponibles.parqueaderoAsingadoPro"
                      )}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 uppercase "
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                    <p className="mx-4 mb-0 text-center font-semibold text-black">
                      Visitantes
                    </p>
                  </div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Total parqueaderos
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        src={ParkingSvg}
                      />
                    </div>
                    <input
                      {...register(
                        "parqueaderosDisponibles.parqueaderoAsingadoVis"
                      )}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Capacidad carros
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        src={ParkingSvg}
                      />
                    </div>
                    <input
                      {...register(
                        "parqueaderosDisponibles.propietarios.carroDisponible"
                      )}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Capacidad carros
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        src={ParkingSvg}
                      />
                    </div>
                    <input
                      {...register(
                        "parqueaderosDisponibles.visitantes.carroDisponible"
                      )}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Capacidad motos
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        src={ParkingSvg}
                      />
                    </div>
                    <input
                      {...register(
                        "parqueaderosDisponibles.propietarios.motosDisponibles"
                      )}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Capacidad motos
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        src={ParkingSvg}
                      />
                    </div>
                    <input
                      {...register(
                        "parqueaderosDisponibles.visitantes.motosDisponible"
                      )}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                    />
                  </div>
                </div>
              </div>
              <div className="relative my-2  ">
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                  <p className="mx-4 mb-0 text-center font-semibold text-black">
                    Total parqueaderos
                  </p>
                </div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"></label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <img
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      src={ParkingSvg}
                    />
                  </div>
                  <input
                    {...register("parqueaderosDisponibles.totalParqueadero")}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                    defaultValue={formData.totalParqueadero}
                  />
                </div>
              </div>

              <div className="flex my-5 w-full justify-center ">
                <div className="flex w-1/2 justify-center gap-3">
                  <button
                    // onClick={() => {
                    //   deletePlate(selectedPlateData.item[0]._id);
                    // }}
                    className="uppercase text-sm font-bold tracking-wide bg-green-500 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline text-center"
                  >
                    Actualizar
                  </button>
                  <button
                    type="submit"
                    className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
