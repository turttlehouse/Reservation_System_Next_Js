import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Data from "./components/data";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function tables() {
  return (
    <>
      <div className="flex ml-[460px]">
        <div className="h-[40px] bg-[#1976d2] rounded-md flex items-center">
          <div className="flex gap-5 m-5">
            <p className="text-white text-[18px]">Table No</p>
            <p className="text-white text-[18px]">Table Name</p>
            <p className="text-white text-[18px]">Table Floor</p>
            <p className="text-white text-[18px] pl-[5px]">Facility</p>
            <p className="text-white text-[18px] pl-[20px]">Photo</p>
            <p className="text-white text-[18px]">Capacity</p>
            <p className="text-white text-[18px]">Status</p>
          </div>
        </div>
      </div>
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
    </>
  );
}
