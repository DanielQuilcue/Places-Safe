import axios from "../services/axios.js";
export function ExportExcel({ openExcel, setOpenExcel }) {
  const handleOpen = () => setOpenExcel(!openExcel);

  const handleExportExcel = async () => {
    try {
      const response = await axios.get("/export-excel", {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Placas-Registro.xlsx");
      document.body.appendChild(link);

      link.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error al exportar datos:", error);
    }
  };

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
                        Exportación
                      </h1>
                    </div>
                    <div className="w-96 ">
                      <div className="border-l-4 border-blue-500 bg-blue-100  p-4    ">
                        <p className="font-semibold text-blue-800">
                          Importante!
                        </p>
                        <span className="text-blue-800">
                          Para poder importar datos correctamente, es necesario
                          que utilices el siguiente formato en Excel para evitar
                          conflictos con la base de datos
                        </span>{" "}
                        <a
                          className="text-blue-800 font-bold"
                          href="/ruta-al-archivo.xlsx"
                          download
                        >
                          Descargar plantilla
                        </a>
                      </div>
                    </div>

                    <div className="flex my-5 w-full justify-between ">
                      <div className="flex w-full justify-between  gap-3">
                        <button
                          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-md "
                          type="submit"
                        >
                          Importar Datos
                        </button>
                        <button
                          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-md  "
                          onClick={handleExportExcel}
                          type="button"
                        >
                          Export Datos
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
