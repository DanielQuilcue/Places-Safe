import { NavLink, useLocation } from "react-router-dom";
import { ParkingModal } from "./ParkingModal";
import { useState } from "react";
import { ExportExcel } from "./ExportExcel";
import { PayModal } from "./PayModal";
export default function SideNav({ isActive }) {
  const [open, setOpen] = useState(null);
  const [openExcel, setOpenExcel] = useState(null);
  const [openPay, setOpenPay] = useState(null);

  const location = useLocation();
  return (
    <>
      <div
        className={`fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform  displaySm ${
          isActive ? "-translate-x-full" : ""
        }`}
      >
        {open && <ParkingModal open={open} setOpen={setOpen} />}

        <NavLink
          to="/"
          className="flex items-center pb-4 border-b border-b-gray-800"
        >
          <h2 className="font-bold text-2xl">
            PLACA
            <span className="bg-blue-900  text-white px-2 rounded-md">
              SAFE
            </span>
          </h2>
        </NavLink>
        <ul className="mt-4">
          <span className="text-gray-400 font-bold">ADMIN</span>
          <li className="mb-1 group">
            <NavLink
              to="/form"
              href=""
              className={`flex font-semibold items-center py-2 px-4 text-gray-900 rounded-md ${
                location.pathname === "/form"
                  ? "group-[.active] bg-blue-900 text-white"
                  : "hover:bg-blue-900  hover:text-gray-100"
              }`}
            >
              <i className="ri-home-2-line mr-3 text-lg"></i>
              <span className="text-sm">Formulario</span>
            </NavLink>
          </li>
          <li className="mb-1 group">
            <NavLink
              to="/dashboard"
              className={`flex font-semibold items-center py-2 px-4 text-gray-900 rounded-md ${
                location.pathname === "/dashboard"
                  ? "group-[.active] bg-blue-900 text-white"
                  : "hover:bg-blue-900  hover:text-gray-100"
              }`}
            >
              <i className="ri-dashboard-fill mr-3 text-lg"></i>
              <span className="text-sm">Dashboard</span>
            </NavLink>
          </li>
          <li className="mb-1 group">
            <NavLink
              to="/parking"
              className={`flex font-semibold items-center py-2 px-4 text-gray-900 rounded-md ${
                location.pathname === "/parking"
                  ? "group-[.active] bg-blue-900 text-white"
                  : "hover:bg-blue-900  hover:text-gray-100"
              }`}
            >
              <i className="ri-grid-line mr-3 text-lg"></i>
              <span className="text-sm">Parqueaderos</span>
            </NavLink>
          </li>

          <span className="text-gray-400 font-bold uppercase">
            Parqueaderos
          </span>
          <li className="mb-1 group">
            <NavLink
              onClick={setOpen}
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-blue-900 hover:text-gray-100 rounded-md group-[.active]:bg-blue-900 group-[.active]:text-white group-[.selected]:bg-blue-900 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
            >
              <i className="ri-parking-box-line mr-3 text-lg"></i>
              <span className="text-sm">Cantidad </span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </NavLink>
            {/* <ul className="pl-7 mt-2 hidden group-[.selected]:block">
              <li className="mb-4">
                <a
                  href=""
                  className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                >
                  All
                </a>
              </li>
              <li className="mb-4">
                <a
                  href=""
                  className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                >
                  Categories
                </a>
              </li>
            </ul> */}
          </li>
          {openExcel && (
            <ExportExcel
              openExcel={openExcel}
              setOpenExcel={setOpenExcel}
              // selectedPlateData={selectedPlateData}
            />
          )}
          <li className="mb-1 group">
            <a
              onClick={setOpenExcel}
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-blue-900 hover:text-gray-100 rounded-md group-[.active]:bg-blue-900 group-[.active]:text-white group-[.selected]:bg-blue-900 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
            >
              <i className="bx bx-archive mr-3 text-lg"></i>
              {/* <i className="ri-money-dollar-circle-line"></i> */}
              <span className="text-sm">Exportar</span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </a>
          </li>
          {openPay && <PayModal openPay={openPay} setOpenPay={setOpenPay} />}
          <li className="mb-1 group">
            <a
              onClick={setOpenPay}
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-blue-900 hover:text-gray-100 rounded-md group-[.active]:bg-blue-900 group-[.active]:text-white group-[.selected]:bg-blue-900 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
            >
              <i className="bx bx-money  mr-3 text-lg"></i>
              <span className="text-sm">Definir Pago</span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </a>
          </li>
          <span className="text-gray-400 font-bold uppercase">Propietario</span>
          <li className="mb-1 group">
            <NavLink
              to="/propretary  "
              // onClick={setOpenExcel}
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-blue-900 hover:text-gray-100 rounded-md group-[.active]:bg-blue-900 group-[.active]:text-white group-[.selected]:bg-blue-900 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
            >
              <i className="bx bx-grid-horizontal   mr-3 text-lg"></i>
              <span className="text-sm">Parqueadero</span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </NavLink>
          </li>
          <span className="text-gray-400 font-bold uppercase">Visitantes</span>
          <li className="mb-1 group">
            <NavLink
              to="/visitor  "
              // onClick={setOpenExcel}
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-blue-900 hover:text-gray-100 rounded-md group-[.active]:bg-blue-900 group-[.active]:text-white group-[.selected]:bg-blue-900 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
            >
              <i className="bx bx-grid-horizontal   mr-3 text-lg"></i>
              <span className="text-sm">Parqueadero</span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </NavLink>
          </li>
          {/* <span className="text-gray-400 font-bold">PERSONAL</span>
        <li className="mb-1 group">
          <a
            href=""
            className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
          >
            <i className="bx bx-bell mr-3 text-lg"></i>
            <span className="text-sm">Notifications</span>
            <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-600 bg-red-200 rounded-full">
              5
            </span>
          </a>
        </li>
        <li className="mb-1 group">
          <a
            href=""
            className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
          >
            <i className="bx bx-envelope mr-3 text-lg"></i>
            <span className="text-sm">Messages</span>
            <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full">
              2 New
            </span>
          </a>
        </li> */}
        </ul>
      </div>
    </>
  );
}
