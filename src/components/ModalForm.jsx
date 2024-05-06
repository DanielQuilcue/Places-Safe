import UdateForm from "./UpdateForm";
export function ModalForm({ open, setOpen, selectedPlateData }) {
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div className="relative w-2/4  ">
        {open && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="rounded-lg bg-white p-8 shadow-2xl z-60">
              <div className="flex justify-end">
                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-md "
                  onClick={handleOpen}
                >
                  Cerrar
                </button>{" "}
              </div>
              <UdateForm selectedPlateData={selectedPlateData} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
