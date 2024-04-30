import Data from "../../../public/components/Data";

export default function Booking() {
  return (
    <>
    <div className="flex justify-center">
      <div className="h-[40px] bg-[#1976d2] rounded-md flex items-center">
        <div className="flex gap-5 m-5">
          <h1 className="text-white">Reservation ID</h1>
          <h1 className="text-white">Guest Name</h1>
          <h1 className="text-white">Table Number</h1>
          <h1 className="text-white">Date and Time</h1>
          <h1 className="text-white">No. of Guests</h1>
          <h1 className="text-white">Total Amount</h1>
          <h1 className="text-white">Amount Paid</h1>
          <h1 className="text-white">Status</h1>
        </div>
      </div>
    </div>
    <Data/>

    
    
    </>
    
  );
}
