import { useState } from "react";
import { useForm } from "react-hook-form";
import data from "../data/data.json";

// Estado para almacenar el tipo de placa

const FormMain = () => {
  const { register, handleSubmit } = useForm();
  const [placaExistente, setPlacaExistente] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [tipoPlaca, setTipoPlaca] = useState("");

  const onSubmit = handleSubmit(async (value) => {
    const placaSinEspacios = value.placa.replace(/\s/g, "");
    const placaData = await checkPlaca(placaSinEspacios);

    if (placaData) {
      setPlacaExistente(true);
      setTipoPlaca(placaData.tipo);
      setErrorMessage("");
    } else {
      setPlacaExistente(false);
      setErrorMessage("La placa no existe en la base de datos");
    }
  });
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-white">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex justify-center text-center">
              <h1 className="font-bold uppercase text-5xl">
                Regristro <br /> Placas
              </h1>
            </div>
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div className="relative">
                  <label
                    htmlFor="email-address-icon"
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
                      {...register("placa")}
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                      placeholder="Abc 123"
                    />
                  </div>
                </div>
              </div>

              <div className="flex my-4 w-full justify-center">
                <div className="flex w-1/2 justify-center">
                  <button
                    type="submit"
                    className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
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

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <a
                  href="https://www.facebook.com/ENLIGHTENEERING/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  <i className="fab fa-facebook-f text-blue-900" />
                </a>
                <a
                  href="https://www.linkedin.com/company/enlighteneering-inc-"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  <i className="fab fa-linkedin-in text-blue-900" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormMain;
