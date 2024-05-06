import { useEffect, useState } from "react";
import CarsSvg from "../assets/Parking/cars.svg";
import MotoSvg from "../assets/Parking/moto.svg";
import UserSvg from "../assets/Plate/user.svg";
import { getHeader } from "../services/parking";
export default function CardParking() {
  const [header, setHeader] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const id = "662b06e90e236495f3eab71e";

    const get = async () => {
      try {
        // setIsLoading(true);
        const res = await getHeader(id);
        setHeader(res);
        // setHeader(false);
      } catch (e) {
        console.log(e);
      }
    };
    get();
    const intervalId = setInterval(() => {
      get();
    }, 60000); // 60000 milisegundos = 1 minuto

    return () => clearInterval(intervalId);
  }, []);
  console.log(header);

  // if (isLoading) return <p>Loading</p>;
  return (
    <>
      <div className=" flex items-center justify-center ">
        <div className="max-w-7xl w-full mx-auto py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
            <div className="w-full    ">
              <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-green-400">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <div className="icon w-14 p-3.5 bg-green-400 text-white rounded-full mr-3">
                      <img src={CarsSvg} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-2xl   font-bold ">
                        {header && header.carroDisponible}
                      </div>
                      <div className="text-sm text-black">Total Carros</div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col justify-center ml-2  ">
                      <div className="text-2xl   font-bold ">
                        {header && header.carroDisponible}
                      </div>
                      <div className="text-sm text-black">En uso</div>
                    </div>
                    <div className="icon w-14 p-3.5 bg-red-600 text-white rounded-full mr-3 ">
                      <img src={CarsSvg} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full    ">
              <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-blue-400">
                <div className="flex items-center justify-center">
                  <div className="icon w-14 p-3.5 bg-blue-400 text-white rounded-full mr-3">
                    <img src={UserSvg} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl   font-bold">
                      {" "}
                      {header &&
                        header.carroDisponible + header.motosDisponibles}
                    </div>
                    <div className="text-sm text-black">Total Parqueadero</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full    ">
              <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-yellow-400">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <div className="icon w-14 p-3.5 bg-yellow-400 text-white rounded-full mr-3">
                      <img src={MotoSvg} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-2xl   font-bold ">
                        {header && header.motosDisponibles}
                      </div>
                      <div className="text-sm text-black">Total Motos</div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col justify-center ml-2  ">
                      <div className="text-2xl   font-bold ">
                        {header && header.motosDisponibles}
                      </div>
                      <div className="text-sm text-black">En uso</div>
                    </div>
                    <div className="icon w-14 p-3.5 bg-red-600 text-white rounded-full mr-3 ">
                      <img src={MotoSvg} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="w-full lg:w-1/5">
              <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-red-400">
                <div className="flex items-center">
                  <div className="icon w-14 p-3.5 bg-red-400 text-white rounded-full mr-3">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-lg">12658</div>
                    <div className="text-sm text-gray-400">Orders</div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="w-full lg:w-1/5">
              <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-green-400">
                <div className="flex items-center">
                  <div className="icon w-14 p-3.5 bg-green-400 text-white rounded-full mr-3">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-lg">$948'560</div>
                    <div className="text-sm text-gray-400">Revenue</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
