import Data from "../rates/components/Data";

export default function Rates(){
  return (
    <>
    <div className="flex justify-center">
      <div className="h-[40px] bg-[#1976d2] rounded-md flex items-center">
       <div className="flex gap-5 m-5">
        <h1 className="text-white">Table Type</h1>
        <h1 className="text-white ml-8">Deals</h1>
        <h1 className="text-white ml-12">Cancellation Policy</h1>
        <h1 className="text-white ml-3">Deal Price</h1>
        <h1 className="text-white ml-8">Rate</h1>
        <h1 className="text-white ml-8">Availability</h1>
        
      </div>
    </div>
  </div>
  <Data />
    
    </>
    
  )
}