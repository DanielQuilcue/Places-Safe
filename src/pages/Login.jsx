import { useState } from "react";
import data from "../data/data.json";
import LoginForm from "../components/form/LoginForm";
import RegisterForm from "../components/form/RegisterForm";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const toggleForm = () => {
    setShowLogin((prevState) => !prevState);
  };

  return (
    <>
      <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden"></div>
      <div className="relative   min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl ">
        <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
          <div className="self-start hidden lg:flex flex-col text-gray-300">
            <h1 className="my-3 font-semibold text-4xl">Placas Safe</h1>
            <p className="pr-3 text-sm opacity-75">{data.spna2}</p>
          </div>
        </div>
        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-white mx-auto rounded-3xl w-96">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">
                {showLogin ? "Iniciar sección" : "Regístrarse"}
              </h3>
              <p className="text-gray-400">
                {showLogin
                  ? "¿No tienes una cuenta? "
                  : "¿Ya tienes una cuenta? "}
                <a
                  className="text-sm text-purple-700 hover:text-purple-700"
                  onClick={toggleForm}
                >
                  {showLogin ? "Regístrarse" : "Iniciar sección"}
                </a>
              </p>
            </div>
            {showLogin ? <LoginForm /> : <RegisterForm />}
            <div className="mt-7 text-center text-gray-400 text-xs">
              <span>
                Copyright © 2024
                <a
                  href="#"
                  rel=""
                  target="_blank"
                  title="Codepen aji"
                  className="text-purple-500 hover:text-purple-600 "
                >
                  AJI
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="absolute bottom-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Login;
