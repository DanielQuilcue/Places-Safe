import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { PlateContext } from "../context/PlatesContext"

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