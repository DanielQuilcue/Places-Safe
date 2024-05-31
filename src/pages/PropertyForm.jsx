import { useState, useEffect } from "react";

import { usePlates, getBogotaDateTime } from "../helper/index";
import { useLocation, NavLink, useNavigate } from "react-router-dom";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import PlateSvg from "../assets/Plate/plate.svg";
import CardSvg from "../assets/Plate/cars.svg";
import UserSvg from "../assets/Plate/user.svg";
import TimeSvg from "../assets/Plate/time.svg";

import { getRecordId } from "../services/parking";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

function PropertyForm() {
  const location = useLocation();
  const { plateObject } = location.state || {};
  const { _id, plate, names, timeInput, vehicle, parked, typeEntry } =
    plateObject || {};
  const [formattedPlate, setFormattedPlate] = useState("");

  console.log(plateObject);
  const [showTime, setshowTime] = useState(false);
  const [dataRecords, setdataRecords] = useState([]);

  const { createEntryExitRecord } = usePlates();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { type } = await getRecordId(_id);
        setdataRecords(type);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [_id]);

  useEffect(() => {
    const option = () => {
      if (parked === "entry") {
        setshowTime(false);
      } else if (parked === "exit") {
        setshowTime(true);
      }
    };
    option();
  }, [dataRecords, parked]);
  console.log(dataRecords);
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      if (dataRecords === "exit") {
        // Ingreso
        const entryData = {
          _id: _id,
          type: "parked",
          parked: "si",
          timeInput: bogotaDateTime,
          vehicle: vehicle,
        };
        console.log(entryData, "entry");

        await createEntryExitRecord(entryData);
      } else if (dataRecords === "parked") {
        // Salida
        const exitData = {
          _id: _id,
          type: "exit",
          parked: "no",
          timeExit: bogotaTime,
          vehicle: vehicle,
          typeEntry: typeEntry,
        };
        console.log(exitData, "exit");

        await createEntryExitRecord(exitData);
      }

      Swal.fire({
        icon: "success",
        title: "Registro enviado exitosamente",
        timer: 5000, // Duración en milisegundos (5 segundos)
        timerProgressBar: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/form");
        }
        navigate("/form");
      });
    } catch (error) {
      console.error("Error creating entry/exit record:", error);
      Swal.fire({
        icon: "error",
        title: "Error al enviar el registro",
        timer: 5000, // Duración en milisegundos (5 segundos)
        timerProgressBar: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
      });
    }
  };

  dayjs.extend(utc);
  dayjs.extend(timezone);

  const bogotaTime = dayjs
    .utc(timeInput)
    .tz("America/Bogota")
    .format("YYYY-MM-DD HH:mm:ss");

  const bogotaDateTime = getBogotaDateTime();

  useEffect(() => {
    const plateForm = plate;
    const letters = plateForm.slice(0, 3);
    const numbers = plateForm.slice(3);

    setFormattedPlate(`${letters}-${numbers}`);
  }, [plate]);

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-[#e4e6ea] ">
        <div className="container mx-auto my-4 px-4 lg:px-20 justify-center items-center lg:w-10/12 ms:w-full">
          <div className="flex justify-center text-center bg-blue-900 rounded-2xl py-1 ">
            <h1 className="font-bold uppercase text-3xl  my-4 text-white">
              Propetario
            </h1>
          </div>
          <div className="  p-8 my-4 md:px-12   mr-auto rounded-2xl shadow-2xl bg-white items-center ">
            {/* <div className="flex justify-center text-center">
              <h1 className="font-bold uppercase text-5xl">Propietario</h1>
            </div> */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <div className="relative">
                <label className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase ">
                  Placa
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <img
                      className="w-4 h-4 text-gray-500 dark:text-black "
                      src={PlateSvg}
                      alt={plate}
                    />
                  </div>
                  <div className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5">
                    {formattedPlate}
                  </div>
                </div>
              </div>
              <div className="relative">
                <label className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase">
                  Nombres y apellidos
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <img
                      className="w-4 h-4 text-gray-500 dark:text-black "
                      src={UserSvg}
                      alt={names}
                    />
                  </div>

                  <div className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  uppercase ">
                    {names}
                  </div>
                </div>
              </div>
              {showTime ? (
                <div className="relative">
                  <label className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase">
                    Hora y fecha de salida
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        className="w-4 h-4 text-gray-500 dark:text-black "
                        src={TimeSvg}
                        alt={bogotaTime}
                      />
                    </div>
                    <div className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 ">
                      {bogotaTime}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <label className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase">
                    Hora y fecha de ingreso
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        className="w-4 h-4 text-gray-500 dark:text-black "
                        src={TimeSvg}
                        alt="time"
                      />
                    </div>

                    <div className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 ">
                      {bogotaDateTime}
                    </div>
                  </div>
                </div>
              )}

              <div className="relative">
                <label className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase">
                  Automóvil
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <img
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      src={CardSvg}
                      alt="Automóvil"
                    />
                  </div>

                  <div className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 uppercase  ">
                    {vehicle}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex my-4 w-full justify-center">
              <div className="flex w-1/2 justify-center gap-3">
                <NavLink
                  to="/form"
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline text-center"
                >
                  Regresar
                </NavLink>
                <button
                  onClick={onSubmit}
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyForm;
