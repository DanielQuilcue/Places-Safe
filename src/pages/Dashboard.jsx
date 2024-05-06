import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import "../styles/main.css";
import { useState } from "react";
const Dashboard = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="text-gray-800 font-inter">
        {/* <!--sidenav --> */}

        <SideNav isActive={isActive} />
        {/* <!-- end sidenav --> */}

        <Navbar toggleSidebar={toggleSidebar} isActive={isActive} />
      </div>
    </>
  );
};

export default Dashboard;
