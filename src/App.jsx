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

function App() {
  return (
    <AuthProvider>
      <PlateProdiver>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/form" element={<FormMain />} />

              <Route path="/register" element={<Register />} />
              <Route path="/propretary/:plateId" element={<PropertyForm />} />
              <Route path="/visitor/:plateId" element={<VisitorForm />} />

              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PlateProdiver>
    </AuthProvider>
  );
}

export default App;
{
  /* <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Router path="/form" element={<FormMain />} />
        </Routes>
      </BrowserRouter>{" "}
    </AuthProvider> */
}
