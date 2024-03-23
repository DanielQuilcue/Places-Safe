import Form from "./Form";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center popap-overlay">
          <div
            className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8 relative"
            role="alert"
          >
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-800"
              onClick={onClose}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div className="grid content-center">
                <div className="text-center mb-10 ">
                  <h1 className="text-3xl font-semibold text-gray-900">
                    Registro
                  </h1>
                  <p className="mt-2 text-gray-500">Sus datos estan seguros</p>
                </div>
                <Form />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
