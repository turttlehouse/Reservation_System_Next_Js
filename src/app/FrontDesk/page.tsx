/* Rohan UI codes here  */
import Image from "next/image";
import search from '../../../public/images/search.png'
import notification from '../../../public/images/notification.png'
import Navbar from "../../../public/components/Navbar";
import Sidebar from "../../../public/components/Sidebar";

export default function Home() {
  return (
    <main className="p-4 overflow-y-hidden text-[14px]">
      <Navbar/>
      <div className="flex items-center gap-[70px] ml-[240px] pb-4">
        <ul className="flex items-center gap-4 ">
          <li>Frontdesk</li>
          <li className="bg-[pink] rounded px-1">Due in</li>
          <li className="bg-blue-400 rounded px-1">Checked in</li>
          <li className="bg-green-200 rounded px-1">Due out</li>
          <li className="bg-yellow-200 rounded px-1">Checked in</li>
        </ul>

        <div className="flex items-center gap-5">
          <div className="w-[300px] h-[30px] flex items-center gap-4  px-2 rounded border">
              <Image src={search} alt="" width={15} height={15}/>
              <input type="text" name="" placeholder="Search by Table number" className="w-full outline-none"/>
          </div>
          <button  className="bg-[blue] text-white w-[150px] h-[40px] rounded font-bold">Create Booking</button>
        </div>
      </div>

      <div className="flex items-center overflow-hidden ">
        <Sidebar/>
        <div className="w-full h-screen overflow-y-hidden bg-[#E3F2FD]"></div>
      </div>
    </main>
  );
}

