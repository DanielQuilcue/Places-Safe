const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-black bottom-0 left-0 fixed w-full max-w-screen-x">
      <div className="w-11/12 l p-4 md:flex md:items-center md:justify-between sm:text-center">
        <span className="text-sm text-white  sm:text-center dark:text-white">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Placas Safe™
          </a>
          . All Rights Reserved.
        </span>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Politica de privacidad
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licencia
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contactanos
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
