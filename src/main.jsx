// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import "./index.css";
// import App from "./App.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Tracker from "./pages/Tracker.jsx";
// import FormMain from "./pages/FormMain.jsx";
// import { AuthProvider } from "./context/AuthContext.jsx";

// // export const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <App />,
// //   },
// //   {
// //     path: "/form",
// //     element: <FormMain />,
// //   },
// //   {
// //     path: "/dashboard",
// //     element: <Dashboard />,
// //   },
// //   {
// //     path: "/dashboard/tracker",
// //     element: <Tracker />,
// //   },
// // ]);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
