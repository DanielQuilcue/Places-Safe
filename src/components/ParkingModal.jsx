import ParkingCreate from "./ParkingCreate";
export function ParkingModal({ open, setOpen }) {
  return (
    <>
      <div className="relative w-2/4  ">
        {open && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="rounded-lg bg-white p-8 shadow-2xl z-60">
              <ParkingCreate setOpen={setOpen} open={open} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
