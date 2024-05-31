import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import PlateSvg from "../assets/Plate/plate.svg";
import UserSvg from "../assets/Plate/user.svg";
import IphoneSvg from "../assets/Plate/iphone.svg";
import TimeSvg from "../assets/Plate/time.svg";

import { towerApartments } from "../helper/tower";
import { getBogotaDateTime, getCurrentTime, usePlates } from "../helper/index";

import { getMotos, getCarros } from "../services/parking";

export default function Register() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const { createPlate, createEntryExitRecord } = usePlates();

  const dataTime = getBogotaDateTime();
  const time = getCurrentTime();

  const [parked, setParked] = useState("");

  const [selectedTower, setSelectedTower] = useState("");
  const [selectedFloor, setSelectedFloor] = useState("");
  const [selectedApartment, setSelectedApartment] = useState("");

  const [motos, setMotos] = useState([]);
  const [carros, setCarros] = useState([]);
  const [parkedFinal, setParkedFinal] = useState("Seleccionar ");

  const [vehicleSele, setVehicleSele] = useState("");

  const handleVehicleChange = (e) => {
    setVehicleSele(e.target.value);
  };

  const handleSelectChangeFinal = (event) => {
    setParkedFinal(event.target.value); // Actualizar el estado 'vehicle' al seleccionar una opción
  };

  const onSubmit = handleSubmit(async (data) => {
    data.timeInput = dataTime;
    data.parkedNumber = parkedFinal;
    data.vehicle = vehicleSele;
    data.plate = data.plate.toUpperCase();

    try {
      const response = await createPlate(data);
      if (response.status === "success") {
        const entryData = {
          // _id: response._id,
          timeInput: dataTime,
          tower: selectedTower,
          parked: parked === "si" ? "si" : "no",
          type: parked === "si" ? "parked" : "exit",
          parkedNumber: parkedFinal,
          apartment: selectedApartment,
        };
        //console.log(entryData, "entry");

        await createEntryExitRecord(entryData);

        toast.success("Registro exitoso");

        setTimeout(() => {
          navigate("/form");
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      toast.error("Hubo un error al registrar");
    }
  });

  useEffect(() => {
    const getVehicle = async () => {
      try {
        const resMotos = await getMotos();
        setMotos(resMotos);

        const resCarros = await getCarros();
        setCarros(resCarros);
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
  console.log(carros);

  const [userFinal, setUserFinal] = useState({ username: "", rol: "" });

  useEffect(() => {
    // Accedemos al localStorage
    const storedUser = localStorage.getItem("userData"); // Asegúrate de que la clave sea correcta
    if (storedUser) {
      // Convertimos el JSON a un objeto
      const userObject = JSON.parse(storedUser);
      // Actualizamos el estado
      setUserFinal({ username: userObject.username, rol: userObject.rol });
    }
  }, []);

  return (
    <>
      <div className="flex justify-center lg:items-center w-screen h-screen bg-[#e4e6ea] sm:items-start md:items-center ms:h-max ">
        <ToastContainer />;
        <div className="container mx-auto my-4 px-4 lg:px-20 justify-center items-center lg:w-10/12 ms:w-full   ">
          <div className="flex justify-center text-center bg-blue-900 rounded-2xl py-1 ">
            <h1 className="font-bold uppercase text-3xl  my-4 text-white">
              Registro Nuevo
            </h1>
          </div>
          <div className="  p-8 my-4 md:px-12   mr-auto rounded-2xl shadow-2xl bg-white items-center ">
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div className="relative">
                  <label
                    className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase "
                    htmlFor="plate"
                  >
                    Placa *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        src={PlateSvg}
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      />
                    </div>
                    <input
                      type="text"
                      {...register("plate")}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 uppercase "
                      placeholder="Eje: Abc 123"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="names"
                    className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase"
                  >
                    Nombres y apellidos
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        src={UserSvg}
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      />
                    </div>
                    <input
                      type="text"
                      id="names"
                      {...register("names")}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  uppercase "
                      placeholder="Eje: James Rodríguez"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase">
                    numero celular
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        src={IphoneSvg}
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      />
                    </div>
                    <input
                      type="text"
                      {...register("iphone")}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                      placeholder="Eje: 3133823122"
                    />
                  </div>
                </div>
                {/* <div className="relative">
                  <label
                    htmlFor="parked"
                    className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase"
                  >
                    Tipo de vehiculo
                  </label>
                  <div>
                    <select
                      className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      {...register("vehicle")}
                      value={vehicleSele}
                      onChange={handleVehicleChange}
                    >
                      <option>Seleccionar...</option>
                      <option value="carro">Carro</option>
                      <option value="moto">Moto</option>
                    </select>
                  </div>
                </div> */}
                <div className="relative">
                  <label
                    htmlFor="typeEntry"
                    className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase"
                  >
                    Tipo Propietario / Visitante
                  </label>
                  <div>
                    <select
                      className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      {...register("typeEntry")}
                    >
                      <option>Seleccionar...</option>
                      {userFinal === "administrador" &&
                      userFinal === "propietario" ? (
                        <>
                          <option value="visitante">Visitante</option>
                        </>
                      ) : (
                        <>
                          <option value="propietario">Propietario</option>
                          <option value="visitante">Visitante</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <>
                  <div className="relative">
                    <label
                      htmlFor="typeEntry"
                      className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase"
                    >
                      Parqueadero entrada / Salida
                    </label>
                    <div>
                      <select
                        className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        {...register("parked")}
                        value={parked}
                        onChange={(e) => setParked(e.target.value)}
                      >
                        <option>Seleccionar...</option>
                        <option value="no">Entrada</option>
                        <option value="si">Salida</option>
                      </select>
                    </div>
                  </div>
                  {parked === "entry" ? (
                    <div className="relative">
                      <label
                        htmlFor="names"
                        className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase"
                      >
                        Hora de ingreso
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <img
                            src={TimeSvg}
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          />
                        </div>
                        <div className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  ">
                          {time}
                        </div>{" "}
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <label
                        htmlFor="names"
                        className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase"
                      >
                        Hora
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <img
                            src={TimeSvg}
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          />
                        </div>
                        <div className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  ">
                          {time}
                        </div>{" "}
                      </div>
                    </div>
                  )}

                  <div className="relative">
                    <label
                      htmlFor="tower"
                      className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase"
                    >
                      Torre
                    </label>
                    <div>
                      <select
                        className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        {...register("tower")}
                        value={selectedTower}
                        onChange={(e) => setSelectedTower(e.target.value)}
                      >
                        <option value="">Selecciona una torre</option>
                        {towerApartments.map((towerObj) => (
                          <option key={towerObj.tower} value={towerObj.tower}>
                            Torre {towerObj.tower}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase">
                      Apartamento
                    </label>
                    <div className="relative flex gap-2">
                      {selectedTower && (
                        <select
                          className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                          value={selectedFloor}
                          {...register("apartment")}
                          onChange={(e) => setSelectedFloor(e.target.value)}
                        >
                          <option value="">Selecciona un piso</option>
                          {towerApartments
                            .find(
                              (towerObj) => towerObj.tower === selectedTower
                            )
                            ?.floors.map((floorObj) => (
                              <option
                                key={floorObj.floor}
                                value={floorObj.floor}
                              >
                                Piso {floorObj.floor}
                              </option>
                            ))}
                        </select>
                      )}
                      {selectedTower && selectedFloor && (
                        <select
                          className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                          value={selectedApartment}
                          onChange={(e) => setSelectedApartment(e.target.value)}
                        >
                          <option value="">Selecciona un apartamento</option>
                          {towerApartments
                            .find(
                              (towerObj) => towerObj.tower === selectedTower
                            )
                            ?.floors.find(
                              (floorObj) =>
                                floorObj.floor === parseInt(selectedFloor, 10)
                            )
                            ?.apartments.map((apartment) => (
                              <option key={apartment} value={apartment}>
                                Apartamento {apartment}
                              </option>
                            ))}
                        </select>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="parked"
                      className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase"
                    >
                      Tipo de vehiculo
                    </label>
                    <div>
                      <select
                        className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        {...register("vehicle")}
                        value={vehicleSele}
                        onChange={handleVehicleChange}
                      >
                        <option>Seleccionar...</option>
                        <option value="carro">Carro</option>
                        <option value="moto">Moto</option>
                      </select>
                    </div>
                  </div>
                  <div className="relative">
                    <p className="block mb-2 text-sm  text-blue-900 dark:text-blue-900 font-bold uppercase">
                      Numero de parqueadero
                    </p>
                    <div>
                      <select
                        className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        onChange={handleSelectChangeFinal}
                      >
                        <option value="">Seleccionar...</option>
                        {console.log(vehicleSele)}
                        {vehicleSele === "moto" &&
                          motos.map((moto) => (
                            <option key={moto._id} value={moto.nameVisible}>
                              {moto.nameVisible}
                            </option>
                          ))}
                        {vehicleSele === "carro" &&
                          carros.map((carro) => (
                            <option key={carro._id} value={carro.nameVisible}>
                              {carro.nameVisible}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </>
              </div>

              <div className="flex my-4 w-full justify-center">
                <div className="flex w-1/2 justify-center gap-3">
                  <NavLink
                    to="/form"
                    className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline text-center"
                  >
                    Volver
                  </NavLink>
                  <button
                    type="submit"
                    className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                  >
                    Registar
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
