import { useState } from "react";
import axios from "../services/axios.js";
import Swal from "sweetalert2";

export function ExportExcel({ openExcel, setOpenExcel }) {
  const handleOpen = () => setOpenExcel(!openExcel);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleExportButtonClick = () => {
    const dateS = new Date(startDate).toISOString();
    const dateE = new Date(endDate).toISOString();
    handleExportCSV(dateS, dateE);
  };

  const handleExportCSV = async (startDate, endDate) => {
    try {
      const response = await axios.post(
        "/export-excel",
        {
          startDate: startDate,
          endDate: endDate,
        },
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Placas-Registro.csv");
      document.body.appendChild(link);

      link.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);

      Swal.fire({
        icon: "success",
        title: "¡Descarga exitosa!",
        text: "El archivo CSV ha sido descargado correctamente.",
      });
      setOpenExcel(false);
    } catch (error) {
      console.error("Error al exportar datos:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las fechas ingresadas no son válidas.",
      });
    }
  };

  const isButtonDisabled = !startDate || !endDate;

  return (
    <>
      <div className="relative w-2/4  ">
        {openExcel && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="rounded-lg bg-white p-8 shadow-2xl z-60">
              <div className="flex justify-end">
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
              <div className="flex justify-center items-center   bg-[#e4e6ea} w-full ">
                {/* <ToastContainer /> */}
                <div className="flex container justify-center">
                  <div className=" p-2   rounded-2xl w-auto  ">
                    <div className="flex justify-center text-center py-2">
                      <h1 className="font-semibold  uppercase text-4xl ">
                        Exportar
                      </h1>
                    </div>
                    <div className="w-96 ">
                      <div className="border-l-4 border-blue-500 bg-blue-100  p-4    ">
                        <p className="font-semibold text-blue-800 uppercase ">
                          Importante!
                        </p>
                        <span className="text-blue-800">
                          Para exportar los datos correctamente, es necesario
                          ingresar la fecha de inicio y la fecha de
                          finalización.
                        </span>{" "}
                        {/* <a
                          className="text-blue-800 font-bold"
                          href="/ruta-al-archivo.xlsx"
                          download
                        >
                          Descargar plantilla
                        </a> */}
                      </div>
                      <div className="flex py-2 ">
                        <div>
                          <label>Fecha de inicio</label>
                          <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                          />
                        </div>
                        <div>
                          <label>Fecha final</label>

                          <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                          />
                        </div>{" "}
                      </div>
                    </div>

                    <div className="flex my-5 w-full justify-center  ">
                      <div className="flex w-full justify-center   gap-3">
                        <button
                          className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-md ${
                            isButtonDisabled
                              ? "cursor-not-allowed opacity-50"
                              : ""
                          }`}
                          onClick={handleExportButtonClick}
                          type="button"
                        >
                          Exportar
                        </button>
                      </div>
                    </div>
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
