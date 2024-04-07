export default function ModalForm({ isOpen, onClose, selectedPlateData }) {
  return (
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
          <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
            <div className="w-full">
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
              <p>ID: {selectedPlateData.item[0]._id}</p>;
            </div>
          </div>
        </div>
      )}
    </>
  );
}
