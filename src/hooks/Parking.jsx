import { useEffect, useState } from "react";
import { getRecord } from "../services/parking.js";
import { getPlateRequest } from "../services/plate.js";
export default function Parking() {
  const [dataParking, setDataParking] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener la lista de registros de placas
        const records = await getRecord();

        // Mapear cada registro para obtener los detalles de la placa
        const enrichedData = await Promise.all(
          records.map(async (record) => {
            try {
              // Obtener los detalles de la placa usando su ID
              const plateDetails = await getPlateRequest(record.plateId);

              // Combinar los datos del registro con los detalles de la placa
              return { ...record, additionalInfo: plateDetails.data };
            } catch (error) {
              console.error("Error al obtener detalles de la placa:", error);
              // Si ocurre un error al obtener detalles de la placa, regresa el registro sin información adicional
              return record;
            }
          })
        );

        // Actualizar el estado con los datos enriquecidos
        setDataParking(enrichedData);
      } catch (error) {
        console.error("Error al obtener los registros de placas:", error);
      }
    };

    fetchData();
  }, []);

  return { dataParking };
}
