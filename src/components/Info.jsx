import { Link } from "react-router-dom";

export default function Info() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-blue-50 border border-blue-400 rounded text-blue-800 text-sm p-4 flex items-start">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="w-full ">
          <p>
            <span className="font-bold">Info: </span>
            Ninguna placa ha sido registrada, por lo tanto, no serán visibles
            aquí. Por favor, diríjase al formulario para registrar una placa.
          </p>
          <div className="flex justify-center  my-1 ">
            <Link
              to="/"
              className="border-blue-400 bg-white hover:bg-gray-50 px-4 py-2 mt-4 border rounded font-bold"
            >
              Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
