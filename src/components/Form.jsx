const Form = ({ imagen, placaText }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-black">
          <div className="grid grid-cols-1 gap-x-12  lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12 relative ">
              <img
                alt="imagen de placa"
                src={imagen}
                className="absolute inset-0 h-full max-w-full min-w- object-cover rounded-lg min-h-64 max-h-screen"
              />
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 relative z-10">
              {placaText}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
