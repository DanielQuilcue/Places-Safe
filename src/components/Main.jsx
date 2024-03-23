import { useState } from "react";

import Bg from "../assets/bg.svg";
import Devices from "../assets/devices.svg";
import "../styles/main.css";
import data from "../data/data.json";

import Buttons from "./Buttons";
import Modal from "./Modal";

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section
      className="leading-normal tracking-normal text-gray-900"
      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
    >
      <div
        className="h-screen pb-14 bg-right bg-cover"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
              {/* Main Hero Message to sell your app */}
              {data.title}
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
              {data.span}
            </p>

            {/* <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
              Probar App:
            </p> */}
            <div className="flex w-full justify-center pb-24 lg:pb-0 fade-in ">
              <Buttons
                type="ver"
                title="Probar"
                className=" bounce-top-icons"
                onClickLogic={handleOpenModal}
              />
            </div>
          </div>

          <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
            <img
              className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
              src={Devices}
              alt="Devices"
            />
          </div>
        </div>
      </div>
      {modalOpen && <Modal isOpen={modalOpen} onClose={handleCloseModal} />}
    </section>
  );
};

export default Main;
