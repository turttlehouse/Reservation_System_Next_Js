import Image from "next/image";
import search from '../images/search.png'
import notification from '../images/notification.png'
import profile from '../images/profile.png'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center ">
    <div className="flex items-center gap-[80px]">
       <button className="p-4 rounded-[11px] bg-[blue] text-white">LOGO</button>
       
           <div className="w-[400px] h-[40px] flex items-center gap-4 bg-[#E3F2FD] px-2 rounded">
             <Image src={search} alt="" width={15} height={15}/>
             <input type="text" name="" placeholder="Search for Tables and Offers" className="w-full bg-[#E3F2FD] outline-none"/>
         </div>
           
     </div>

     <div className="flex items-center gap-5">
           <Image src={notification} alt="" width={25} height={25}/>
           <Image src={profile} alt="" width={40} height={40}/>
     </div>
    </div>
  )
}

export default Navbar