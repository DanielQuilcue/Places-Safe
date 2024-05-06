import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { PlateContext } from "../context/PlatesContext"

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe ser usado dentro de AuthProvider");
  return context;
};


export const usePlates = () => {
  const context = useContext(PlateContext);
  if (!context) {
    throw new Error("UsePlates must be use withn a PlaceProvider");
  }
  return context;
};


// hora y fecha en bogota
dayjs.extend(utc);
dayjs.extend(timezone);

export const getBogotaDateTime = () => {
  const bogotaTime = dayjs().tz('America/Bogota').format('YYYY-MM-DD HH:mm');
  return bogotaTime;
}

export const getCurrentTime = () => {
  const currentTime = dayjs().format('HH:mm:ss');
  return currentTime;
}


export const formatterMoney = new Intl.NumberFormat("es-Co", {
  style: "currency",
  currency: "COP"
})


export const getRoleFromLocalStorage = () => {
  const userDataString = localStorage.getItem("userData");
  if (userDataString) {
    const userData = JSON.parse(userDataString);
    return userData.rol;
  }
  return null; // O algún valor por defecto si no hay información de usuario en localStorage
};
