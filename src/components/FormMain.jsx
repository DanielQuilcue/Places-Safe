import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { usePlates } from "../helper";
import NavbarMain from "./NavbarMain";
import data from "../data/data.json";
const FormMain = () => {
  const [plateValue, setPlateValue] = useState("");

  const { getPlates, plates } = usePlates();
  useEffect(() => {
    getPlates();
  }, [getPlates]);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const formattedPlateValue = plateValue.replace(/\s/g, "").toUpperCase();

    const plateRegex = /^[A-Z]{3}\d{3}$/; // Formato esperado: tres letras seguidas de tres números
    if (!plateRegex.test(formattedPlateValue)) {
      toast.error("Ingrese una placa válida, ABC 123");
      return;
    }

    const foundPlate = plates.find(
      (plate) =>
        plate.plate.replace(/\s/g, "").toUpperCase() === formattedPlateValue
    );
    console.log(foundPlate);

    if (foundPlate) {
      if (foundPlate.typeEntry === "propietario") {
        navigate(`/propretary/${foundPlate._id}`, {
          state: { plateObject: foundPlate },
        });
      } else if (foundPlate.typeEntry === "visitante") {
        navigate(`/visitor/${foundPlate._id}`, {
          state: { plateObject: foundPlate },
        });
      } else {
        navigate("/register");
      }
    } else {
      toast.info("Placa no encontrada, por favor regístrese");
      navigate("/register");
    }
  };

  return (
    <>
      <NavbarMain />
      <div className="flex justify-center items-center w-screen min-h-screen max-h-3.5 bg-[#e4e6ea]  body ">
        <ToastContainer />;
        <div className="container mx-auto my-4 px-4 lg:px-20 ">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl  bg-white  ">
            <div className="flex justify-center text-center">
              <h1 className="font-bold uppercase text-5xl">Buscar Placa</h1>
            </div>
            <form onSubmit={handleSearch}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div className="relative">
                  <label className="block mb-2 text-sm font-bold    text-blue-900 uppercase ">
                    Placa <span className="text-blue-900 text-lg  ">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M22 12C22 15.7713 22 17.6569 20.8284 18.8285C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8285C2 17.6569 2 15.7713 2 12C2 8.22881 2 6.34319 3.17157 5.17162C4.23467 4.10853 5.8857 4.01009 9 4.00098M15 4.00098C18.1143 4.01009 19.7653 4.10853 20.8284 5.17162C21.4816 5.8248 21.7706 6.69994 21.8985 8.00006"
                            stroke="#1C274C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>{" "}
                          <path
                            d="M12 5L12 3"
                            stroke="#1C274C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>{" "}
                          <path
                            d="M8 10.5H16"
                            stroke="#1C274C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>{" "}
                          <path
                            d="M8 14H13.5"
                            stroke="#1C274C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="plateInput"
                      value={plateValue}
                      onChange={(e) => setPlateValue(e.target.value)}
                      autoCapitalize="true"
                      // {...register("placa")}
                      maxLength={7}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 uppercase "
                      placeholder="Abc 123"
                    />
                  </div>
                </div>
              </div>

              <div className="flex my-4 w-full justify-center">
                <div className="flex w-1/2 justify-center gap-3">
                  <NavLink
                    to="/visitor"
                    className="uppercase text-sm font-bold tracking-wide bg-green-400 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline text-center"
                  >
                    Parqueaderos
                  </NavLink>
                  <button
                    type="button"
                    onClick={handleSearch}
                    className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl justify-center displaynone">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">Placas Safe</h1>
              <p className="text-gray-400">{data.click}</p>
              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Contáctanos</h2>
                  <p className="text-gray-400">Tel: 3228369024</p>
                  <p className="text-gray-400">Tel: 3228369024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormMain;
