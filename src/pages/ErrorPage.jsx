import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 h-screen">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Parece que has encontrado la puerta a la gran nada
                </h1>
                <p className="my-2 text-gray-800">
                  Lo sentimos. Visite nuestra página de inicio
                </p>
                <NavLink to="/">
                  <button className="sm:w-full lg:w-auto my-2 bg-blue-800  hover:bg-blue-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                    Regresar
                  </button>
                </NavLink>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
      ;
    </>
  );
}
