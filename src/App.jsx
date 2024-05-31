import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PlateProdiver } from "./context/PlatesContext";

import Login from "./pages/Auth";

import FormMain from "./components/FormMain";
import Register from "./pages/Register";
import VisitorForm from "./pages/VisitorForm";
import PropertyForm from "./pages/PropertyForm";

import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "../ProtectedRoute";
import ErrorPage from "./pages/ErrorPage";
import Tracker from "./pages/Tracker";
import Payment from "./pages/Payment";
// import SuperAdmin from "./pages/SuperAdmin";
// import Admin from "./components/ProtectedRouter/Admin";
import Parking from "./pages/Parking";
import ParkedNumber from "./pages/ParkedNumber";
import ParkingPro from "./pages/ParkingPro";

// import { ProtectedRouteGuarda } from "./components/ProtectedRouter/Protector";
// import { useLocalStorage } from "react-use";
import { getRoleFromLocalStorage } from "./helper";

function App() {
  const rol = getRoleFromLocalStorage();
  console.log(rol);
  return (
    <AuthProvider>
      <PlateProdiver>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route element={<ProtectedRoute />}>
              {/* {Rol guarda} */}

              <Route path="/form" element={<FormMain />} />

              <Route path="/visitor" element={<ParkedNumber />} />
              <Route path="/propretary" element={<ParkingPro />} />

              <Route path="/register" element={<Register />} />
              <Route path="/propretary/:plateId" element={<PropertyForm />} />
              <Route path="/visitor/:plateId" element={<VisitorForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/parking" element={<Parking />} />
              <Route path="/tracker" element={<Tracker />} />
              <Route path="/asign" element={<ParkedNumber />} />

              <Route path="/payment" element={<Payment />} />
            </Route>
            {/* {Rol guarda end} */}

            {/* {Rol admin } */}

            {/* {Rol admin end} */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </PlateProdiver>
    </AuthProvider>
  );
}

export default App;
