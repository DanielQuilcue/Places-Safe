import { useEffect, useState } from "react";
import { getParking } from "../services/admin.js";
// import { useAuth } from "../helper";
import Donu from "./Donu.jsx";

export default function ParkedItem() {
  const [parqueadero, setParqueadero] = useState(null);
  // const { user } = useAuth();
  useEffect(() => {
    const obtenerParqueadero = async () => {
      try {
        const response = await getParking();
        const formattedData = response.map(
          ({ _id, createdAt, updatedAt, parqueaderosDisponibles }) => ({
            _id,
            createdAt: new Date(createdAt).toLocaleString(), // Formatea la fecha de creación
            updatedAt: new Date(updatedAt).toLocaleString(), // Formatea la fecha de actualización
            totalParqueadero: parqueaderosDisponibles.totalParqueadero,
            parqueaderoAsingadoPro:
              parqueaderosDisponibles.parqueaderoAsingadoPro,
            parqueaderoAsingadoVis:
              parqueaderosDisponibles.parqueaderoAsingadoVis,
            propietarios: parqueaderosDisponibles.propietarios,
            visitantes: parqueaderosDisponibles.visitantes,
          })
        );
        setParqueadero(formattedData);
      } catch (error) {
        console.error("Error al obtener el parqueadero:", error);
      }
    };

    obtenerParqueadero();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
        <h2 className="text-base  font-medium text-black uppercase text-center my-1">
          Total parqueaderos
        </h2>
        <div className="flex justify-between my-2  ">
          {parqueadero &&
            parqueadero.map((parking) => {
              const totalDisponible =
                parking.parqueaderoAsingadoPro - parking.parqueaderoAsingadoVis;
              const totalParqueadero = parking.totalParqueadero;
              const percentage = totalParqueadero
                ? ((totalDisponible / totalParqueadero) * 100).toFixed(2)
                : 0;

              return (
                <>
                  <div className="flex justify-between my-2 " key={parking._id}>
                    <div className="flex items-center mb-1">
                      <p className="text-5xl font-semibold">
                        {totalDisponible}
                        <span className="text-2xl">/{totalParqueadero}</span>
                      </p>
                    </div>
                  </div>
                  <Donu percentage={percentage} />
                </>
              );
            })}
        </div>
      </div>
      <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
        <h2 className="text-base  font-medium text-black uppercase text-center my-1">
          parqueadero visitantes
        </h2>
        <div className="flex justify-between my-2">
          {parqueadero &&
            parqueadero.map((parking) => {
              const totalVehiculos =
                parking.visitantes.usoMotos + parking.visitantes.usoCarros;
              const totalDisponible = parking.parqueaderoAsingadoVis;
              const percentage = totalDisponible
                ? ((totalVehiculos / totalDisponible) * 100).toFixed(2)
                : 0;

              return (
                <>
                  <div key={parking._id}>
                    <div className="flex items-center mb-1">
                      <p className="text-5xl font-semibold">
                        {totalVehiculos}
                        <span className="text-2xl">/{totalDisponible}</span>
                      </p>
                    </div>
                  </div>
                  <Donu percentage={percentage} />
                </>
              );
            })}
        </div>
      </div>
      <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
        <h2 className="text-base  font-medium text-black uppercase text-center my-1">
          parqueadero propietarios
        </h2>
        <div className="flex justify-between my-2">
          {parqueadero &&
            parqueadero.map((parking) => {
              const totalVehiculos =
                parking.propietarios.usoMotos + parking.propietarios.usoCarros;
              const totalDisponible = parking.parqueaderoAsingadoPro;
              const percentage = totalDisponible
                ? ((totalVehiculos / totalDisponible) * 100).toFixed(2)
                : 0;

              return (
                <>
                  <div key={parking._id}>
                    <div className="flex items-center mb-1">
                      <p className="text-5xl font-semibold">
                        {totalVehiculos}
                        <span className="text-2xl">/{totalDisponible}</span>
                      </p>
                    </div>
                  </div>
                  <Donu percentage={percentage} />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}
