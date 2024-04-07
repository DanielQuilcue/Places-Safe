import { useForm } from "react-hook-form";
import data from "../data/data.json";
import { usePlates } from "../helper/index";
import { useLocation, NavLink } from "react-router-dom";

function PropertyForm() {
  const { register, handleSubmit } = useForm();
  const { createPlate } = usePlates();
  const onSubmit = handleSubmit((data) => {
    createPlate(data);
  });
  const location = useLocation();
  const { plateObject } = location.state || {};
  const {
    plate,
    // parked,
    names,
    // timeExit,
    // timeInput,
    // typeEntry,
    tower,
    apartment,
  } = plateObject || {};
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-white">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex justify-center text-center">
              <h1 className="font-bold uppercase text-5xl">
                Propietario
                <br />
              </h1>
            </div>
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div className="relative">
                  <label
                    htmlFor="plate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Placa *
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
                      id="email-address-icon"
                      // {...register("plate")}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                      placeholder={plate}
                      disabled
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="names"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Nombres *
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
                          <circle
                            cx="12"
                            cy="6"
                            r="4"
                            stroke="#1C274C"
                            strokeWidth="1.5"
                          ></circle>{" "}
                          <path
                            d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                            stroke="#1C274C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="names"
                      // {...register("names")}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                      placeholder={names}
                      disabled
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="names"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Hora de ingreso
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="timeExit"
                      {...register("timeExit")}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                      placeholder="Hora de ingreso"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="timeInput"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Hora de salida
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="timeInput"
                      {...register("timeInput")}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                      placeholder="Hora de salida"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="parked"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    ¿Se encuentra parqueado?
                  </label>
                  <div>
                    <select
                      className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      {...register("parked")}
                    >
                      <option>Seleccione</option>
                      <option value="no">Si</option>
                      <option value="si">No</option>
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="names"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Torre
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        fill="#000000"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 470.11 470.109"
                        xmlSpace="preserve"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <path d="M101.51,0v470.109h102.684v-105h61.72v105h102.685V0H101.51z M216.318,315.512h-61.721v-61.721h61.721V315.512z M216.318,216.319h-61.721v-61.721h61.721V216.319z M216.318,117.124h-61.721V55.403h61.721V117.124z M315.511,315.512H253.79 v-61.721h61.722V315.512z M315.511,216.319H253.79v-61.721h61.722V216.319z M315.511,117.124H253.79V55.403h61.722V117.124z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="tower"
                      {...register("tower")}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                      placeholder={tower}
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="names"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Apartamento
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        fill="#000000"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 470.11 470.109"
                        xmlSpace="preserve"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <path d="M101.51,0v470.109h102.684v-105h61.72v105h102.685V0H101.51z M216.318,315.512h-61.721v-61.721h61.721V315.512z M216.318,216.319h-61.721v-61.721h61.721V216.319z M216.318,117.124h-61.721V55.403h61.721V117.124z M315.511,315.512H253.79 v-61.721h61.722V315.512z M315.511,216.319H253.79v-61.721h61.722V216.319z M315.511,117.124H253.79V55.403h61.722V117.124z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="apartment"
                      {...register("apartment")}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                      placeholder={apartment}
                    />
                  </div>
                </div>
              </div>

              <div className="flex my-4 w-full justify-center">
                <div className="flex w-1/2 justify-center gap-3">
                  <button
                    type="submit"
                    className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                  >
                    Enviar
                  </button>
                  <NavLink
                    to="/form"
                    className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline text-center"
                  >
                    Regresar
                  </NavLink>
                </div>
              </div>
            </form>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl displaynone">
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
}

export default PropertyForm;
