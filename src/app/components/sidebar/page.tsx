import Image from "next/image";
import home from '../../../../public/images/home.png'
import front from '../../../../public/images/front.png'
import bookings from '../../../../public/images/bookings.png'
import tables from '../../../../public/images/tables.png'
import deals from '../../../../public/images/deals.png'
import rates from '../../../../public/images/rates.png'
import vendor from '../../../../public/images/vendor.png'
import logout from '../../../../public/images/logout.png'

const Sidebar = () => {
  return (
      <div className="w-[200px] h-[100vh] py-10 px-4">
        <ul className="flex flex-col gap-5 ">
          <li className="flex items-center gap-2 cursor-pointer">
            <Image src={home} alt="dashboard" width={20} height={20}/>
            <span>Dashboard</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <Image src={front} alt="dashboard" width={20} height={20}/>
            <span>Front Desk</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <Image src={bookings} alt="dashboard" width={20} height={20}/>
            <span>Bookings</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <Image src={tables} alt="dashboard" width={20} height={20}/>
            <span>Tables</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <Image src={deals} alt="dashboard" width={20} height={20}/>
            <span>Deals</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <Image src={rates} alt="dashboard" width={20} height={20}/>
            <span>Rates</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <Image src={vendor} alt="dashboard" width={20} height={20}/>
            <span>Vendor</span>
          </li>
          
        </ul>
        <div className="flex items-center gap-2 mt-[50px] cursor-pointer">
          <Image src={logout} alt="" width={20} height={20}/>
          <span>Logout</span>
        </div>
      </div>

  )
}

export default Sidebar