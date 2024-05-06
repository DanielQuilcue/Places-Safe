import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useLocation, NavLink, useNavigate } from "react-router-dom";

import { formatterMoney, getBogotaDateTime, usePlates } from "../helper/index";

import PlateSvg from "../assets/Plate/plate.svg";
import CardSvg from "../assets/Plate/cars.svg";
import UserSvg from "../assets/Plate/user.svg";
import TimeSvg from "../assets/Plate/time.svg";
import ParkingSvg from "../assets/Plate/parking.svg";
import MoneySvg from "../assets/Plate/money.svg";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { getCarros, getMotos, getRecordId } from "../services/parking";
import SummaryCheck from "../components/SummaryCheck";

function PropertyForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const { plateObject } = location.state || {};
  const {
    _id,
    plate,
    parked,
    names,
    // timeExit,
    vehicle,
    timeInput,
    parkedNumber,
    typeEntry,
  } = plateObject || {};
  console.log(plateObject);
  const [formattedPlate, setFormattedPlate] = useState("");

  const [showTime, setshowTime] = useState(false);
  const [dataRecords, setdataRecords] = useState([]);
  const [payData, setPayData] = useState({});

  // set Valor
  const [horaIngreso, setHoraIngreso] = useState(0);
  const [horaSalida, setHoraSalida] = useState(0);
  const [TiempoConjunto, setTiempoConjunto] = useState("");
  const [ValorPagar, setValorPagar] = useState(0);
  const [open, setOpen] = useState(false);

  const [motos, setMotos] = useState([]);
  const [carros, setCarros] = useState([]);
  const [vehicleFinal, setVehicleFinal] = useState("Seleccionar "); // Estado para la opción seleccionada
  // console.log(vehicleFinal);
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const { createEntryExitRecord, getPay } = usePlates();

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
      if (dataRecords === "exit" && parked === "no") {
        setshowTime(false);
      } else if (dataRecords === "parked" && parked === "si") {
        setshowTime(true);
      }
    };
    option();
  }, [dataRecords, parked]);
  console.log(dataRecords, parked);

  useEffect(() => {
    const loadingPlate = async () => {
      try {
        const [payRecord] = await getPay(); // Accede al primer objeto del array
        if (payRecord && payRecord.timeInHour && payRecord.totalToPay) {
          const { timeInHour, totalToPay } = payRecord;
          setPayData({ timeInHour, totalToPay });
        } else {
          console.error("Datos recibidos no válidos:", payRecord);
        }
      } catch (error) {
        console.error("Error fetching pay data:", error);
      }
    };
    loadingPlate();
  }, [getPay]);

  const onSubmit = async () => {
    try {
      if (dataRecords === "exit") {
        // Ingreso
        const entryData = {
          _id: _id,
          type: "parked",
          timeInput: bogotaDateTime,
          parked: "si",
          parkedNumber: vehicleFinal,
          vehicle: vehicle,
        };
        console.log(entryData, "entry");
        await createEntryExitRecord(entryData);
      } else if (dataRecords === "parked") {
        // Salida
        const exitData = {
          _id: _id,
          type: "exit",
          timeExit: bogotaTime,
          parkedNumber: "",
          parked: "no",
          pay: ValorPagar === 1000 ? "0" : ValorPagar,
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

  useEffect(() => {
    const plateForm = plate;
    const letters = plateForm.slice(0, 3);
    const numbers = plateForm.slice(3);

    setFormattedPlate(`${letters}-${numbers}`);
  }, [plate]);
  const bogotaDateTime = getBogotaDateTime();

  const bogotaTime = dayjs
    .utc(timeInput)
    .tz("America/Bogota")
    .format("YYYY-MM-DD HH:mm:ss");

  // Calcular hora

  useEffect(() => {
    let timeDifferenceMs = new Date(bogotaDateTime) - new Date(bogotaTime);
    const hours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60)
    );

    let totalToPay = 0;
    let durationMessage = "";

    if (hours >= payData.timeInHour) {
      totalToPay =
        (hours - payData.timeInHour) * payData.totalToPay +
        (minutes > 0 ? 1000 : 0);
      durationMessage = `${hours} horas y ${minutes} minutos`;
    } else {
      durationMessage = "Menos de 3 horas";
    }

    setHoraIngreso(bogotaTime);
    //console.log(`Hora de ingreso: ${bogotaTime}`);
    setHoraSalida(bogotaDateTime);
    //console.log(`Hora de salida: ${bogotaDateTime}`);
    setTiempoConjunto(durationMessage);
    //console.log(`Duración en el conjunto: ${durationMessage}`);
    setValorPagar(totalToPay);
    //console.log(`Monto a pagar: ${totalToPay} COP`);
  }, [bogotaDateTime, bogotaTime, payData.timeInHour, payData.totalToPay]);
  // useEffect(() => {
  //   // const bogotaTime = new Date("2024-04-24 23:35:00");
  //   // const bogotaDateTime = new Date("2024-04-25 14:44:00");

  //   let timeDifferenceMs = new Date(bogotaDateTime) - new Date(bogotaTime);
  //   const hours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
  //   const minutes = Math.floor(
  //     (timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60)
  //   );

  //   let totalToPay = 0;
  //   let durationMessage = "";

  //   if (hours >= 3) {
  //     totalToPay = (hours - 3) * 1000 + (minutes > 0 ? 1000 : 0);
  //     durationMessage = `${hours} horas y ${minutes} minutos`;
  //   } else {
  //     durationMessage = "Menos de 3 horas";
  //   }

  //   console.log(`Hora de ingreso: ${bogotaTime}`);
  //   console.log(`Hora de salida: ${bogotaDateTime}`);
  //   console.log(`Duración en el conjunto: ${durationMessage}`);
  //   console.log(`Monto a pagar: ${totalToPay} COP`);
  // }, []);

  useEffect(() => {
    const getVehicle = async () => {
      try {
        if (vehicle === "moto") {
          const resMotos = await getMotos();
          setMotos(resMotos);
          setCarros([]);
        } else if (vehicle === "carro") {
          const resCarros = await getCarros();
          setCarros(resCarros);
          setMotos([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getVehicle();
  }, [vehicle]);
  const handleSelectChange = (event) => {
    setVehicleFinal(event.target.value); // Actualizar el estado 'vehicle' al seleccionar una opción
  };
  return (
    <>
      {open && (
        <SummaryCheck
          horaIngreso={horaIngreso}
          horaSalida={horaSalida}
          TiempoConjunto={TiempoConjunto}
          ValorPagar={ValorPagar}
          open={open}
          setOpen={setOpen}
        />
      )}
      <div className="flex justify-center items-center w-screen h-screen bg-[#e4e6ea] ">
        <div className="container mx-auto my-4 px-4 lg:px-20 justify-center items-center lg:w-10/12 ms:w-full">
          <div className="flex justify-center text-center bg-blue-900 rounded-2xl py-1 ">
            <h1 className="font-bold uppercase text-3xl  my-4 text-white">
              Visitante
            </h1>
          </div>
          <div className="  p-8 my-4 md:px-12   mr-auto rounded-2xl shadow-2xl bg-white items-center ">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <div className="relative">
                <label className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase ">
                  Placa
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <img
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      src={PlateSvg}
                      alt="plate"
                    />
                  </div>
                  <div className="bg-gray-100 border border-gray-300 text-black text-base  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  ">
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
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      src={UserSvg}
                      alt="user"
                    />
                  </div>
                  <div className="bg-gray-100 border border-gray-300 text-black text-base  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 uppercase  ">
                    {names}
                  </div>
                </div>
              </div>
              <div className="relative">
                <label className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase ">
                  Vehículo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <img
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      src={CardSvg}
                      alt="user"
                    />
                  </div>
                  <div className="bg-gray-100 border border-gray-300 text-black text-base  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 uppercase  ">
                    {vehicle}
                  </div>
                </div>
              </div>
              {showTime ? (
                <div className="relative">
                  <p className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase">
                    Hora y fecha de salida
                  </p>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        className="w-4 h-4 text-gray-500 dark:text-black "
                        src={TimeSvg}
                        alt={bogotaTime}
                      />
                    </div>
                    <div className="bg-gray-100 border border-gray-300 text-black text-base  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 uppercase  ">
                      {bogotaTime}
                    </div>
                  </div>
                </div>
              ) : (
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
                        className="w-4 h-4 text-gray-500 dark:text-black "
                        src={TimeSvg}
                        alt="time"
                      />
                    </div>

                    <div className="bg-gray-100 border border-gray-300 text-black text-base  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 uppercase  ">
                      {bogotaDateTime}
                    </div>
                  </div>
                </div>
              )}
              {showTime ? (
                <div className="relative">
                  <p className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase ">
                    Parqueadero usado
                  </p>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        src={ParkingSvg}
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        alt="Parqueadero"
                      />
                    </div>
                    <p className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  ">
                      {parkedNumber}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <p className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase">
                    Asignar parqueadero
                  </p>
                  <div>
                    <select
                      className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      onChange={handleSelectChange}
                    >
                      <option value="">Seleccionar...</option>

                      {vehicle === "moto" &&
                        motos.map((moto) => (
                          <option key={moto.id} value={moto.id}>
                            {moto.nombre}
                          </option>
                        ))}
                      {vehicle === "carro" &&
                        carros.map((carro) => (
                          <option key={carro.id} value={carro.id}>
                            Número de parqueadero # {carro.id}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              )}
              {showTime ? (
                <>
                  <div className="flex flex-col items-center w-full">
                    <p className="block mb-2 text-sm text-blue-900 dark:text-blue-900 font-bold uppercase">
                      Valor a pagar
                    </p>

                    <div className="w-full">
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <img
                            className="w-4 h-4 text-gray-500 dark:text-black"
                            src={MoneySvg}
                            alt="money"
                          />
                        </div>

                        <p className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5">
                          {formatterMoney.format(ValorPagar)}
                        </p>
                      </div>
                    </div>

                    <div className="flex mt-4">
                      <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={setOpen}
                      >
                        Resumen
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            <div className="flex my-4 w-full justify-center">
              <div className="flex w-1/2 justify-center gap-4">
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
