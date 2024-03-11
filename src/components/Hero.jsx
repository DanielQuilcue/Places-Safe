import { useEffect, useState } from "react";
import Tesseract from "tesseract.js";
import DataImg from "../assets/data.webp";
import data from "../data/data.json";
import Buttons from "./Buttons";
import Modal from "./Modal";
const Hero = () => {
  const [imagen, setImagen] = useState([]);
  const [modal, setModal] = useState(true);
  const [placaText, setPlacaText] = useState("");

  // Función para reconocer la placa
  useEffect(() => {
    // Función para reconocer la placa
    const recognizePlaca = async () => {
      try {
        const result = await Tesseract.recognize(imagen, "eng", {
          // logger: (info) => {
          //   //console.log(info);
          // },
        });

        const placaText = result.data.text;
        setPlacaText(placaText);
      } catch (error) {
        console.error("Error en el reconocimiento de texto:", error);
      }
    };

    // Llamar a la función cuando la imagen cambie
    if (imagen) {
      recognizePlaca();
    }
  }, [imagen]);

  // Función para manejar la carga de la imagen
  const manejarCargaImagen = (event) => {
    const archivoImagen = event.target.files[0];

    if (archivoImagen) {
      const lector = new FileReader();
      lector.onloadend = () => {
        setImagen(lector.result);
        setModal(true);
      };

      lector.readAsDataURL(archivoImagen);
    }
  };
  return (
    <>
      <section className=" bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                <div className="px-4 flex-auto"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-16">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                {data.title}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                {data.span}
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                {data.spna2}
              </p>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-2 shadow-lg rounded-lg">
                <img
                  alt="..."
                  src={DataImg}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  {/* <h4 className="text-xl font-bold text-white">
                    Top Notch Services
                  </h4> */}
                  <p className="text-md font-light mt-2 text-white">
                    {data.click}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <footer className="relative h-56 mt-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  <Buttons
                    type="input"
                    onClickLogic={() =>
                      document.getElementById("inputImagen").click()
                    }
                  />
                  {/* Input de imagen (oculto) */}
                  <input
                    id="inputImagen"
                    type="file"
                    onChange={manejarCargaImagen}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* {modal && <Modal imagen={imagen} placaText={placaText} />} */}
        {modal && <Modal />}
      </section>
    </>
  );
};

export default Hero;
