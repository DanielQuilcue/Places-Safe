import Form from "./Form";

const Modal = ({ imagen }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-6 max-w-xl rounded-lg">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <img
            alt=""
            src={imagen}
            className="h-full w-full rounded-xl object-cover"
          />

          <div className="flex flex-col justify-between">
            <div>
              <Form />
            </div>

            <div className="mt-6 sm:text-right">
              <a
                href="#"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
