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
import Swal from "sweetalert2";

import {
  createPlatesRequest,
  getPlatesRequest,
  deletePlatesRequest,
  recordEntryExit,
  getEntryExitRecord,
  updatePlatesRequest,
  createTimePage,
  getTimePage,
} from "../services/plate";
export const PlateContext = createContext();

export function PlateProdiver({ children }) {
  const [plates, setPlates] = useState([]);
  const [entryExit, setEntryExit] = useState([]);
  const [getEntryExit, setGetEntryExit] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPlatesRequest();
        setPlates(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e.menssage);
      }
    };

    fetchData();
  }, []);

  // creando record for entry and exit
  const createEntryExitRecord = async (data) => {
    console.log(data);
    try {
      const res = await recordEntryExit(data);
      setEntryExit(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getRecord = async () => {
    try {
      const res = await getEntryExitRecord();
      setGetEntryExit(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getPlates = async () => {};

  const createPlate = async (plate) => {
    try {
      const res = await createPlatesRequest(plate);
      console.log(res);
      return { status: "success" };
    } catch (error) {
      console.error(error);
      return { status: "error", message: "Hubo un problema al crear la placa" };
    }
  };

  const updatePlate = async (id, plateData) => {
    try {
      const res = await updatePlatesRequest(id, plateData);
      console.log(res.data);

      // Mostrar SweetAlert de confirmación
      const result = await Swal.fire({
        title: "Confirmar actualización",
        text: "¿Deseas confirmar la actualización?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, actualizar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        window.location.reload();
      }

      return res.data;
    } catch (error) {
      console.error("Error al actualizar la placa:", error);
      throw error;
    }
  };

  const deletePlate = async (id) => {
    try {
      const confirmDelete = await Swal.fire({
        title: "¿Estás seguro de que deseas eliminar esta placa?",
        text: "Esta acción no se puede deshacer",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (confirmDelete.isConfirmed) {
        const res = await deletePlatesRequest(id);
        if (res.status === 204) {
          setPlates(plates.filter((plate) => plate._id !== id));
          Swal.fire(
            "Eliminado",
            "La placa ha sido eliminada correctamente",
            "success"
          ).then(() => {
            window.location.reload(); // Recarga la página después de eliminar la placa
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // create for pago time

  const createPay = async (data) => {
    try {
      const res = await createTimePage(data);
      console.log(res);
      return { status: "success" };
    } catch (e) {
      console.log(e.message);
    }
  };

  const getPay = async () => {
    try {
      const res = await getTimePage();
      console.log(res);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PlateContext.Provider
      value={{
        plates,
        createPlate,
        getPlates,
        deletePlate,
        createEntryExitRecord,
        entryExit,
        getRecord,
        getEntryExit,
        updatePlate,
        createPay,
        getPay,
      }}
    >
      {children}
    </PlateContext.Provider>
  );
}
