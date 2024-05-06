import { SideMenu } from "../components/SideMenu";

export default function Payment() {
  return (
    <>
      <div className="bg-black min-h-screen max-h-screen flex items-center justify-center">
        <div className="bg-gray-400/100 flex-1 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 max-w-full sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl ">
          <SideMenu />
          <div className="flex flex-col items-center  justify-center  w-full px-10 pt-5 pb-20 lg:pt-20 lg:flex-row">
            <div className="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
              <div className="relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
                <h4 className="w-full text-4xl font-medium leading-snug text-center uppercase">
                  Valor del parqueadero
                </h4>
                <form className="relative w-full mt-6 space-y-8">
                  <div className="relative">
                    <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                      Hora
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                      placeholder="John"
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                      valor
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                      placeholder="Doe"
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                      Resumen
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                      placeholder="janedoe@email.com"
                    />
                  </div>
                  <div className="relative">
                    <button
                      className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <svg
                className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-gray-200 fill-current"
                viewBox="0 0 91 91"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="none" strokeWidth="1" fillRule="evenodd">
                  <g fillRule="nonzero">
                    <g>
                      <g>
                        <circle cx="3.261" cy="3.445" r="2.72"></circle>
                        <circle cx="15.296" cy="3.445" r="2.719"></circle>
                        <circle cx="27.333" cy="3.445" r="2.72"></circle>
                        <circle cx="39.369" cy="3.445" r="2.72"></circle>
                        <circle cx="51.405" cy="3.445" r="2.72"></circle>
                        <circle cx="63.441" cy="3.445" r="2.72"></circle>
                        <circle cx="75.479" cy="3.445" r="2.72"></circle>
                        <circle cx="87.514" cy="3.445" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 12)">
                        <circle cx="3.261" cy="3.525" r="2.72"></circle>
                        <circle cx="15.296" cy="3.525" r="2.719"></circle>
                        <circle cx="27.333" cy="3.525" r="2.72"></circle>
                        <circle cx="39.369" cy="3.525" r="2.72"></circle>
                        <circle cx="51.405" cy="3.525" r="2.72"></circle>
                        <circle cx="63.441" cy="3.525" r="2.72"></circle>
                        <circle cx="75.479" cy="3.525" r="2.72"></circle>
                        <circle cx="87.514" cy="3.525" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 24)">
                        <circle cx="3.261" cy="3.605" r="2.72"></circle>
                        <circle cx="15.296" cy="3.605" r="2.719"></circle>
                        <circle cx="27.333" cy="3.605" r="2.72"></circle>
                        <circle cx="39.369" cy="3.605" r="2.72"></circle>
                        <circle cx="51.405" cy="3.605" r="2.72"></circle>
                        <circle cx="63.441" cy="3.605" r="2.72"></circle>
                        <circle cx="75.479" cy="3.605" r="2.72"></circle>
                        <circle cx="87.514" cy="3.605" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 36)">
                        <circle cx="3.261" cy="3.686" r="2.72"></circle>
                        <circle cx="15.296" cy="3.686" r="2.719"></circle>
                        <circle cx="27.333" cy="3.686" r="2.72"></circle>
                        <circle cx="39.369" cy="3.686" r="2.72"></circle>
                        <circle cx="51.405" cy="3.686" r="2.72"></circle>
                        <circle cx="63.441" cy="3.686" r="2.72"></circle>
                        <circle cx="75.479" cy="3.686" r="2.72"></circle>
                        <circle cx="87.514" cy="3.686" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 49)">
                        <circle cx="3.261" cy="2.767" r="2.72"></circle>
                        <circle cx="15.296" cy="2.767" r="2.719"></circle>
                        <circle cx="27.333" cy="2.767" r="2.72"></circle>
                        <circle cx="39.369" cy="2.767" r="2.72"></circle>
                        <circle cx="51.405" cy="2.767" r="2.72"></circle>
                        <circle cx="63.441" cy="2.767" r="2.72"></circle>
                        <circle cx="75.479" cy="2.767" r="2.72"></circle>
                        <circle cx="87.514" cy="2.767" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 61)">
                        <circle cx="3.261" cy="2.846" r="2.72"></circle>
                        <circle cx="15.296" cy="2.846" r="2.719"></circle>
                        <circle cx="27.333" cy="2.846" r="2.72"></circle>
                        <circle cx="39.369" cy="2.846" r="2.72"></circle>
                        <circle cx="51.405" cy="2.846" r="2.72"></circle>
                        <circle cx="63.441" cy="2.846" r="2.72"></circle>
                        <circle cx="75.479" cy="2.846" r="2.72"></circle>
                        <circle cx="87.514" cy="2.846" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 73)">
                        <circle cx="3.261" cy="2.926" r="2.72"></circle>
                        <circle cx="15.296" cy="2.926" r="2.719"></circle>
                        <circle cx="27.333" cy="2.926" r="2.72"></circle>
                        <circle cx="39.369" cy="2.926" r="2.72"></circle>
                        <circle cx="51.405" cy="2.926" r="2.72"></circle>
                        <circle cx="63.441" cy="2.926" r="2.72"></circle>
                        <circle cx="75.479" cy="2.926" r="2.72"></circle>
                        <circle cx="87.514" cy="2.926" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 85)">
                        <circle cx="3.261" cy="3.006" r="2.72"></circle>
                        <circle cx="15.296" cy="3.006" r="2.719"></circle>
                        <circle cx="27.333" cy="3.006" r="2.72"></circle>
                        <circle cx="39.369" cy="3.006" r="2.72"></circle>
                        <circle cx="51.405" cy="3.006" r="2.72"></circle>
                        <circle cx="63.441" cy="3.006" r="2.72"></circle>
                        <circle cx="75.479" cy="3.006" r="2.72"></circle>
                        <circle cx="87.514" cy="3.006" r="2.719"></circle>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-blue-600 fill-current"
                viewBox="0 0 91 91"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="none" strokeWidth="1" fillRule="evenodd">
                  <g fillRule="nonzero">
                    <g>
                      <g>
                        <circle cx="3.261" cy="3.445" r="2.72"></circle>
                        <circle cx="15.296" cy="3.445" r="2.719"></circle>
                        <circle cx="27.333" cy="3.445" r="2.72"></circle>
                        <circle cx="39.369" cy="3.445" r="2.72"></circle>
                        <circle cx="51.405" cy="3.445" r="2.72"></circle>
                        <circle cx="63.441" cy="3.445" r="2.72"></circle>
                        <circle cx="75.479" cy="3.445" r="2.72"></circle>
                        <circle cx="87.514" cy="3.445" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 12)">
                        <circle cx="3.261" cy="3.525" r="2.72"></circle>
                        <circle cx="15.296" cy="3.525" r="2.719"></circle>
                        <circle cx="27.333" cy="3.525" r="2.72"></circle>
                        <circle cx="39.369" cy="3.525" r="2.72"></circle>
                        <circle cx="51.405" cy="3.525" r="2.72"></circle>
                        <circle cx="63.441" cy="3.525" r="2.72"></circle>
                        <circle cx="75.479" cy="3.525" r="2.72"></circle>
                        <circle cx="87.514" cy="3.525" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 24)">
                        <circle cx="3.261" cy="3.605" r="2.72"></circle>
                        <circle cx="15.296" cy="3.605" r="2.719"></circle>
                        <circle cx="27.333" cy="3.605" r="2.72"></circle>
                        <circle cx="39.369" cy="3.605" r="2.72"></circle>
                        <circle cx="51.405" cy="3.605" r="2.72"></circle>
                        <circle cx="63.441" cy="3.605" r="2.72"></circle>
                        <circle cx="75.479" cy="3.605" r="2.72"></circle>
                        <circle cx="87.514" cy="3.605" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 36)">
                        <circle cx="3.261" cy="3.686" r="2.72"></circle>
                        <circle cx="15.296" cy="3.686" r="2.719"></circle>
                        <circle cx="27.333" cy="3.686" r="2.72"></circle>
                        <circle cx="39.369" cy="3.686" r="2.72"></circle>
                        <circle cx="51.405" cy="3.686" r="2.72"></circle>
                        <circle cx="63.441" cy="3.686" r="2.72"></circle>
                        <circle cx="75.479" cy="3.686" r="2.72"></circle>
                        <circle cx="87.514" cy="3.686" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 49)">
                        <circle cx="3.261" cy="2.767" r="2.72"></circle>
                        <circle cx="15.296" cy="2.767" r="2.719"></circle>
                        <circle cx="27.333" cy="2.767" r="2.72"></circle>
                        <circle cx="39.369" cy="2.767" r="2.72"></circle>
                        <circle cx="51.405" cy="2.767" r="2.72"></circle>
                        <circle cx="63.441" cy="2.767" r="2.72"></circle>
                        <circle cx="75.479" cy="2.767" r="2.72"></circle>
                        <circle cx="87.514" cy="2.767" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 61)">
                        <circle cx="3.261" cy="2.846" r="2.72"></circle>
                        <circle cx="15.296" cy="2.846" r="2.719"></circle>
                        <circle cx="27.333" cy="2.846" r="2.72"></circle>
                        <circle cx="39.369" cy="2.846" r="2.72"></circle>
                        <circle cx="51.405" cy="2.846" r="2.72"></circle>
                        <circle cx="63.441" cy="2.846" r="2.72"></circle>
                        <circle cx="75.479" cy="2.846" r="2.72"></circle>
                        <circle cx="87.514" cy="2.846" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 73)">
                        <circle cx="3.261" cy="2.926" r="2.72"></circle>
                        <circle cx="15.296" cy="2.926" r="2.719"></circle>
                        <circle cx="27.333" cy="2.926" r="2.72"></circle>
                        <circle cx="39.369" cy="2.926" r="2.72"></circle>
                        <circle cx="51.405" cy="2.926" r="2.72"></circle>
                        <circle cx="63.441" cy="2.926" r="2.72"></circle>
                        <circle cx="75.479" cy="2.926" r="2.72"></circle>
                        <circle cx="87.514" cy="2.926" r="2.719"></circle>
                      </g>
                      <g transform="translate(0 85)">
                        <circle cx="3.261" cy="3.006" r="2.72"></circle>
                        <circle cx="15.296" cy="3.006" r="2.719"></circle>
                        <circle cx="27.333" cy="3.006" r="2.72"></circle>
                        <circle cx="39.369" cy="3.006" r="2.72"></circle>
                        <circle cx="51.405" cy="3.006" r="2.72"></circle>
                        <circle cx="63.441" cy="3.006" r="2.72"></circle>
                        <circle cx="75.479" cy="3.006" r="2.72"></circle>
                        <circle cx="87.514" cy="3.006" r="2.719"></circle>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
