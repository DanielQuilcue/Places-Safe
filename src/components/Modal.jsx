import Form from "./Form";

const Modal = () => {
  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
    <div className="fixed inset-0 flex items-center justify-center popap-overlay">
      <div
        className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8"
        role="alert"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="grid content-center ">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
