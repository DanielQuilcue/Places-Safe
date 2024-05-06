import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { usePlates } from "../helper/index.js";
import MoneySvg from "../assets/Plate/money.svg";
import TimeSvg from "../assets/Plate/time.svg";

export function PayModal({ openPay, setOpenPay }) {
  const [loading, setLoading] = useState(true);
  const [payData, setPayData] = useState([]);

  const { register, setValue, handleSubmit } = useForm();

  const { createPay, getPay } = usePlates();
  const handleOpen = () => setOpenPay(!openPay);

  useEffect(() => {
    const loadingPlate = async () => {
      try {
        const payRecord = await getPay();

        setPayData(payRecord);
        setValue("timeInHour", payRecord.timeInHour);
        setValue("totalToPay", payRecord.totalToPay);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pay data:", error);
        setLoading(false);
      }
    };
    loadingPlate();
  }, [getPay, setValue]);

  const timeInHour = payData.map((pay) => {
    return pay.timeInHour;
  });
  const totalToPay = payData.map((pay) => {
    return pay.totalToPay;
  });

  const onSubmit = async (data) => {
    createPay(data);
    console.log(data);
  };

  if (loading) {
    return <p>Cargando ...</p>;
  }

  return (
    <>
      <div className="relative w-2/4  ">
        {openPay && (
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
                  <div className=" p-4   rounded-2xl w-auto  ">
                    <div className="flex justify-center text-center py-2">
                      <h1 className="font-semibold  uppercase text-4xl ">
                        Pago visitantes
                      </h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 py-2 ">
                        <div className="relative ">
                          <label
                            htmlFor="plate"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                          >
                            Definir tiempo
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                              <img
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                src={TimeSvg}
                              />
                            </div>
                            <input
                              type="text"
                              id="timeInHour"
                              name="timeInHour"
                              {...register("timeInHour")}
                              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 uppercase "
                              defaultValue={timeInHour}
                            />
                          </div>
                        </div>
                        <div className="relative">
                          <label
                            htmlFor="names"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                          >
                            Definir valor
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                              <img
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                src={MoneySvg}
                              />
                            </div>
                            <input
                              type="text"
                              id="totalToPay"
                              name="totalToPay"
                              {...register("totalToPay")}
                              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                              defaultValue={totalToPay}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex my-5 w-full justify-center ">
                        <div className="flex w-full justify-center gap-6  ">
                          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-md ">
                            Actualizar
                          </button>
                          <button
                            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-md  "
                            // onClick={handleExportExcel}
                            type="submit"
                          >
                            Enviar
                          </button>
                        </div>
                      </div>
                    </form>
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
