// import { useForm } from "react-hook-form";
// import { registerPlaca } from "../services/api";
// const Form = () => {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = handleSubmit(async (value) => {
//     const res = await registerPlaca(value);
//     console.log(res);
//   });
//   return (
//     <>
//       <div className="border-solid border-2 border-gray-400    p-3 rounded ">
//         <form className="max-w-md mx-auto " onSubmit={onSubmit}>
//           <div className="grid md:grid-cols-2 md:gap-6">
//             <div className="relative z-0 w-full mb-5 group">
//               <input
//                 {...register("placa", { required: true })}
//                 type="text"
//                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
//                 placeholder=" "
//                 required
//               />
//               <label
//                 form="floating_last_name"
//                 className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//               >
//                 Placa
//               </label>
//             </div>
//             <div className="relative z-0 w-full mb-5 group">
//               <input
//                 {...register("username", { required: true })}
//                 type="text"
//                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
//                 placeholder=" "
//                 required
//               />
//               <label
//                 form="floating_last_name"
//                 className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//               >
//                 Nombre
//               </label>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 md:gap-6">
//             <div className="relative z-0 w-full mb-5 group">
//               <input
//                 {...register("cedula", { required: true })}
//                 type="tel"
//                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
//                 placeholder=" "
//               />
//               <label
//                 form="floating_first_name"
//                 className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-b duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//               >
//                 Cedula
//               </label>
//             </div>
//             <div className="relative z-0 w-full mb-5 group">
//               <label form="underline_select" className="sr-only">
//                 Underline select
//               </label>
//               <select
//                 {...register("vehiculo", { required: true })}
//                 className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
//               >
//                 <option selected>Seleccione su vehiculo</option>
//                 <option value="moto">Moto</option>
//                 <option value="carro">Carro</option>
//               </select>
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 md:gap-6">
//             <div className="relative z-0 w-full mb-5 group">
//               <label form="underline_select" className="sr-only">
//                 Underline select
//               </label>
//               <select
//                 {...register("tipo", { required: true })}
//                 className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
//               >
//                 <option selected>Seleccione</option>
//                 <option value="propietario">Propietario</option>
//                 <option value="visitante">Visitante</option>
//               </select>
//             </div>

//             <div className="relative z-0 w-full mb-5 group">
//               <div className="relative z-0 w-full mb-5 group">
//                 <input
//                   {...register("ubicacion", { required: true })}
//                   type="text"
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   form="floating_last_name"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Hubicación
//                 </label>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-center mt-2">
//             <button
//               type="submit"
//               className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//             >
//               Registar
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Form;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { checkPlaca } from "../services/api";
import PropertyForm from "./PropertyForm";
import VisitorForm from "./VisitorForm";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [placaExistente, setPlacaExistente] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [tipoPlaca, setTipoPlaca] = useState(""); // Estado para almacenar el tipo de placa

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
      <form onSubmit={onSubmit}>
        <input
          {...register("placa")}
          type="text"
          placeholder="Ingrese la placa"
        />
        <button type="submit">Verificar Placa</button>
      </form>

      {placaExistente && tipoPlaca === "Propietario" && (
        <PropertyForm placaExistente={placaExistente} />
      )}

      {placaExistente && tipoPlaca === "Visitante" && (
        <VisitorForm placaExistente={placaExistente} />
      )}

      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export default Form;
