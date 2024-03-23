import { useContext, useState } from "react";
import { createContext } from "react";
import { registerSet } from "../services/api";
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("UseAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signup = async (value) => {
    try {
      const res = await registerSet(value);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider value={{ signup, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
