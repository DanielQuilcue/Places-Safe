// import { createContext, useState } from "react";
// import { createPlatesRequest, getPlatesRequest } from "../services/plate";
// export const PlateContext = createContext();

// export function PlateProdiver({ children }) {
//   const [plates, setPlates] = useState([]);

//   const getPlates = async () => {
//     try {
//       const res = await getPlatesRequest();
//       setPlates(res.data);
//       console.log(plates);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const createPlate = async (plate) => {
//     const res = await createPlatesRequest(plate);
//     console.log(res);
//   };
//   return (
//     <PlateContext.Provider value={{ plates, createPlate, getPlates }}>
//       {children}
//     </PlateContext.Provider>
//   );
// }

import { createContext, useState, useEffect } from "react";
import { createPlatesRequest, getPlatesRequest } from "../services/plate";
export const PlateContext = createContext();

export function PlateProdiver({ children }) {
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPlatesRequest();
        setPlates(res.data);
        console.log(res.data); // Verificar los datos obtenidos antes de actualizar el estado
      } catch (e) {
        console.log(e.menssage);
      }
    };

    fetchData();
  }, []);

  const getPlates = async () => {};

  const createPlate = async (plate) => {
    try {
      const res = await createPlatesRequest(plate);
      console.log(res);
      return { status: "success" }; // Ejemplo de respuesta exitosa
    } catch (error) {
      console.error(error);
      return { status: "error", message: "Hubo un problema al crear la placa" }; // Ejemplo de respuesta con error
    }
  };

  return (
    <PlateContext.Provider value={{ plates, createPlate, getPlates }}>
      {children}
    </PlateContext.Provider>
  );
}
