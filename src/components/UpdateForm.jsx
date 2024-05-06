import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { usePlates } from "../helper/index";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import PlateSvg from "../assets/Plate/plate.svg";
import UserSvg from "../assets/Plate/user.svg";
import TimeSvg from "../assets/Plate/time.svg";
import TowerSvg from "../assets/Plate/tower.svg";
import ParkedSvg from "../assets/Plate/parking.svg";

export default function UdateForm({ selectedPlateData }) {
  const [idPlate, setIdPlate] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setIdPlate(selectedPlateData.item[0]._id);
  }, [selectedPlateData.item]);

  const { register, handleSubmit, setValue } = useForm();
  const { deletePlate, updatePlate, fetchData } = usePlates();

  dayjs.extend(utc);
  dayjs.extend(timezone);
  const bogotaTime = dayjs
    .utc(selectedPlateData.item[0].timeInput)
    .tz("America/Bogota")
    .format("YYYY-MM-DD HH:mm");

  const bogotaTimeExit = dayjs
    .utc(selectedPlateData.item[0].timeExit)
    .tz("America/Bogota")
    .format("YYYY-MM-DD HH:mm");

  const onSubmit = async (data) => {
    if (loading) {
      try {
        await updatePlate(idPlate, { ...data });
      } catch (error) {
        console.error("Error al actualizar:", error);
      }
    } else {
      console.warn("Espera a que se carguen los datos antes de enviarlos.");
    }
  };

  useEffect(() => {
    const loadingPlate = async () => {
      if (idPlate) {
        const plateUpdate = await fetchData(idPlate);
        setValue("plate", plateUpdate.plate);
        setValue("names", plateUpdate.names);
        setValue("vehicle", plateUpdate.vehicle);
        setValue("typeEntry", plateUpdate.typeEntry);
        setValue("tower", plateUpdate.tower);
        setValue("apartment", plateUpdate.apartment);
        setValue("parkedNumber", plateUpdate.parkedNumber);

        setValue("timeInput", plateUpdate.timeInput);
        setValue("timeExit", plateUpdate.timeExit);

        setLoading(false);
      }
    };
    loadingPlate();
  }, [fetchData, idPlate, setValue]);

  const handleDelete = () => {
    deletePlate(selectedPlateData.item[0]._id);
  };
  return (
    <>
      <div className="flex justify-center items-center   bg-[#e4e6ea}w-full      ">
        <ToastContainer />
        <div className="flex container justify-center">
          <div className=" p-2   rounded-2xl w-auto  ">
            <div className="flex justify-center text-center py-3">
              <h1 className="font-bold uppercase text-5xl">Información</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className="relative">
                  <label className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase">
                    Placa
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        src={PlateSvg}
                      />
                    </div>
                    <input
                      type="text"
                      id="plate"
                      name="plate"
                      {...register("plate")}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 uppercase "
                      // defaultValue={formattedPlate}
                      defaultValue={selectedPlateData.item[0].plate}
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="names"
                    className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase "
                  >
                    Nombres y apellidos
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        src={UserSvg}
                      />
                    </div>
                    <input
                      type="text"
                      id="names"
                      {...register("names")}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  uppercase "
                      defaultValue={selectedPlateData.item[0].names}
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="parked"
                    className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase "
                  >
                    Tipo de vehiculo
                  </label>
                  <div>
                    <select
                      className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      {...register("vehicle")}
                      defaultValue={selectedPlateData.item[0].vehicle}
                    >
                      {selectedPlateData.item[0].vehicle === "carro" ? (
                        <>
                          <option value="carro">Carro</option>
                          <option value="moto">Moto</option>
                        </>
                      ) : (
                        <>
                          <option value="moto">Moto</option>
                          <option value="carro">Carro</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="typeEntry"
                    className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase "
                  >
                    Tipo de ingreso
                  </label>
                  <div>
                    <select
                      className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      {...register("typeEntry")}
                      defaultValue={selectedPlateData.item[0].typeEntry}
                    >
                      {selectedPlateData.item[0].typeEntry === "propietario" ? (
                        <>
                          <option value="propietario">Propietario</option>
                          <option value="visitante">Visitante</option>
                        </>
                      ) : (
                        <>
                          <option value="visitante">Visitante</option>
                          <option value="propietario">Propietario</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
                {selectedPlateData.item[0].timeInput &&
                selectedPlateData.item[0].timeExit ? (
                  <>
                    {/* Renderizar ambos si están definidos */}
                    <div className="relative">
                      <label
                        htmlFor="names"
                        className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase"
                      >
                        Hora y fecha de ingreso
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <img
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            src={TimeSvg}
                          />
                        </div>

                        <div className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 ">
                          {bogotaTime}
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="natimeExit"
                        className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase"
                      >
                        Hora y fecha de salida
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <img
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            src={TimeSvg}
                          />
                        </div>

                        <div className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 ">
                          {bogotaTimeExit}
                        </div>
                      </div>
                    </div>
                  </>
                ) : selectedPlateData.item[0].timeInput ? (
                  // Si solo timeInput está definido
                  <div className="relative">
                    <label
                      htmlFor="timeInput"
                      className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase"
                    >
                      Hora y fecha de ingreso
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <img
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          src={TimeSvg}
                        />
                      </div>

                      <div className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 ">
                        {bogotaTime}
                      </div>
                    </div>
                  </div>
                ) : selectedPlateData.item[0].timeExit ? (
                  // Si solo timeExit está definido
                  <div className="relative">
                    <label
                      htmlFor="timeExit"
                      className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase"
                    >
                      Hora y fecha de ingreso
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <img
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          src={TimeSvg}
                        />
                      </div>

                      <div className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 ">
                        {bogotaTimeExit}
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="relative">
                  <label
                    htmlFor="tower"
                    className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase"
                  >
                    Torre
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        src={TowerSvg}
                      />
                    </div>
                    <input
                      type="text"
                      id="tower"
                      {...register("tower")}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                      defaultValue={selectedPlateData.item[0].tower}
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="names"
                    className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase"
                  >
                    Apartamento
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        src={TowerSvg}
                      />
                    </div>
                    <input
                      type="text"
                      id="apartment"
                      {...register("apartment")}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                      defaultValue={selectedPlateData.item[0].apartment}
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="parkedNumber"
                    className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase"
                  >
                    Parqueadero
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        src={ParkedSvg}
                      />
                    </div>
                    <input
                      type="text"
                      id="parkedNumber"
                      {...register("parkedNumber")}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                      defaultValue={selectedPlateData.item[0].parkedNumber}
                    />
                  </div>
                </div>
              </div>
              <div className="flex my-5 w-full justify-center">
                <div className="flex w-1/2 justify-center gap-3">
                  <button
                    className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-md  "
                    onClick={handleDelete}
                    type="button"
                  >
                    Eliminar
                  </button>
                  <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-md "
                    type="submit"
                  >
                    Actualizar
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
