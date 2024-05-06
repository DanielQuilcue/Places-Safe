import { useState, useEffect } from "react";
import Parking from "../hooks/Parking";
import dayjs from "dayjs";

export default function RecordParking() {
  const { dataParking } = Parking();
  const [displayedRecords, setDisplayedRecords] = useState([]);

  useEffect(() => {
    if (dataParking && dataParking.length > 0) {
      const maxRecords = 4;
      const updatedRecords = dataParking.slice(0, maxRecords); // Obtener los primeros 4 registros o menos

      setDisplayedRecords(updatedRecords);
    }
  }, [dataParking]);

  // const dataTime = getBogotaDateTime();

  const formatBogotaTime = (time) => {
    return dayjs(time).tz("America/Bogota").format("YYYY-MM-DD HH:mm:ss");
  };

  console.log(dataParking);
  return (
    <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      <div className="flex justify-center mb-4 items-start">
        <div className="font-medium uppercase ">Actividad parqueadero</div>
      </div>
      <div className="overflow-hidden">
        <table className="w-full min-w-[540px]">
          {displayedRecords.map(
            ({ _id, additionalInfo, timeInput, timeExit }) => (
              <tbody key={_id}>
                <tr>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <div className="flex items-center">
                      <span className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                        {additionalInfo && additionalInfo.plate}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b border-b-gray-50 text-center">
                    <p>Fecha y hora de entrada</p>
                    <span className="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1">
                      {formatBogotaTime(timeInput)}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b border-b-gray-50 text-center">
                    <p>Fecha y hora de salienda</p>
                    <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-500 leading-none ml-1">
                      {formatBogotaTime(timeExit)}
                    </span>
                  </td>
                </tr>
              </tbody>
            )
          )}
        </table>
      </div>
    </div>
  );
}
