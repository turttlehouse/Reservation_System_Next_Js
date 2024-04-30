import Image from "next/image";
import home from '../images/home.png'
import front from '../images/front.png'
import bookings from '../images/bookings.png'
import tables from '../images/tables.png'
import deals from '../images/deals.png'
import rates from '../images/rates.png'
import vendor from '../images/vendor.png'
import logout from '../images/logout.png'

const Sidebar = () => {
  return (
      <div className="w-[300px] h-screen ">
        <ul className="flex flex-col gap-5">
          <li className="flex items-center gap-2">
            <Image src={home} alt="dashboard" width={20} height={20}/>
            <span>Dashboard</span>
          </li>
          <li className="flex items-center gap-2">
            <Image src={front} alt="dashboard" width={20} height={20}/>
            <span>Front Desk</span>
          </li>
          <li className="flex items-center gap-2">
            <Image src={bookings} alt="dashboard" width={20} height={20}/>
            <span>Bookings</span>
          </li>
          <li className="flex items-center gap-2">
            <Image src={tables} alt="dashboard" width={20} height={20}/>
            <span>Tables</span>
          </li>
          <li className="flex items-center gap-2">
            <Image src={deals} alt="dashboard" width={20} height={20}/>
            <span>Deals</span>
          </li>
          <li className="flex items-center gap-2">
            <Image src={rates} alt="dashboard" width={20} height={20}/>
            <span>Rates</span>
          </li>
          <li className="flex items-center gap-2">
            <Image src={vendor} alt="dashboard" width={20} height={20}/>
            <span>Vendor</span>
          </li>
          
        </ul>
        <div className="flex items-center gap-2 mt-[50px]">
          <Image src={logout} alt="" width={20} height={20}/>
          <span>Logout</span>
        </div>
      </div>

  )
}

export default Sidebar