import Image from "next/image";
import Navbar from "../components/Navbar/page";
import Sidebar from "../components/sidebar/page";
import dots from '../../../public/images/three-dots.png'

/*Nishant UI codes here */
export default function  DashboardPage() {
    const array=[1,2,3,4]

    return(
        <div className="overflow-hidden text-[14px]">
            <Navbar/>

            <div className=" flex justify-between pb-4 ml-[400px] pr-4">
                <p>Monday March 18, 2024</p>
                <button  className="bg-[blue] text-white w-[150px] h-[40px] rounded font-bold">Create Booking</button>
            </div>

            <div className="flex overflow-hidden ">
                <Sidebar/>
                <div className="w-full bg-[#E3F2FD] px-6 flex flex-col gap-5">
                    {/* overview*/}
                    <div className="bg-white mt-4 px-4 py-2 rounded">
                        <h1 className="text-xl font-bold mb-4">Overview</h1>
                        <div className="flex items-center gap-10">
                            <div className="flex items-end gap-5">
                                <p className="text-[#8B8B8B]">Total <br /> <b className="text-black">Check in</b></p>
                                <p className="text-[#1976D2] text-xl font-bold">30</p>
                            </div>
                            <div className="flex items-end gap-5">
                                <p className="text-[#8B8B8B]">Total <br /> <b className="text-black">Check-out</b></p>
                                <p className="text-[#1976D2] text-xl font-bold">30</p>
                            </div>
                            <div className="flex items-end gap-5">
                                <p className="text-[#8B8B8B]">Total <br /> <b className="text-black">Available Table</b></p>
                                <p className="text-[#1976D2] text-xl font-bold">30</p>
                            </div>
                            <div className="flex items-end gap-5">
                                <p className="text-[#8B8B8B]">Total <br /> <b className="text-black">Occupied Table</b></p>
                                <p className="text-[#1976D2] text-xl font-bold">30</p>
                            </div>
                        </div>
                    </div>

                    {/* tables */}
                    <div className="bg-white px-4 py-2 pb-5 rounded">
                        <h1 className="text-xl font-bold mb-4">Tables</h1>
                        <div className="flex items-center gap-5">
                            {
                                array.map(()=>(
                                    <div className="w-[230px] border-2 border-[#42A5F5] rounded-lg p-2">
                                <div className="flex justify-between">
                                    <p className=" font-bold">2 Tables</p>
                                    <Image src={dots} alt="" width={6} height={6}/>
                                </div>
                                <p className="text-lg font-semibold">Normal Seated Sofa</p>
                                <p className="text-[#7B7272]">Description / Capicity</p>
                                <p className="text-[#1976D2] font-bold">$200 <span className="text-black ">/hr</span></p>
                            </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* table status */}
                    <div className="w-[600px] bg-white px-4 py-2 rounded">
                        <h1 className="text-xl font-bold mb-4">Table Status</h1>
                        <div className=" flex items-center justify-between ">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center  font-bold">
                                    <p className="w-[200px]">Occupied tables</p>
                                    <p>36</p>
                                </div>
                                <div className="flex items-center  text-[#8B8B8B]">
                                    <p className="w-[200px]">Clean</p>
                                    <p>36</p>
                                </div>
                                <div className="flex items-center  text-[#8B8B8B]">
                                    <p className="w-[200px]">Dirty</p>
                                    <p>36</p>
                                </div>
                                <div className="flex items-center  text-[#8B8B8B]">
                                    <p className="w-[200px]">Inspected</p>
                                    <p>36</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center  font-bold">
                                    <p className="w-[200px]">Available tables</p>
                                    <p>36</p>
                                </div>
                                <div className="flex items-center  text-[#8B8B8B]">
                                    <p className="w-[200px]">Clean</p>
                                    <p>36</p>
                                </div>
                                <div className="flex items-center  text-[#8B8B8B]">
                                    <p className="w-[200px]">Dirty</p>
                                    <p>36</p>
                                </div>
                                <div className="flex items-center  text-[#8B8B8B]">
                                    <p className="w-[200px]">Inspected</p>
                                    <p>36</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* today booking and Customers Feedback*/}
                    <div className="flex justify-between">
                    {/* today booking */}
                        <div className="bg-white px-4 py-2 rounded ">
                            <div className="flex justify-between font-bold">
                                <h1 className="text-xl mb-4">Today Bookings</h1>
                                <p>See all</p>
                            </div>
                            <table >
                            <thead >
                                <tr className="">
                                        <th className="p-2">Reservation ID</th>
                                        <th className="p-2">Customer Name</th>
                                        <th className="p-2">Table No.</th>
                                        <th className="p-2">No.of Guest</th>
                                        <th className="p-2">Status</th>
                                    </tr>
                            </thead>
                            {
                                array.map(()=>(
                                    <tbody>
                                <tr className="border-b-2 text-[#585858] pb-4">
                                        <td>#5644</td>
                                        <td>Ghanshyam Gautam</td>
                                        <td className="text-center">59</td>
                                        <td className="text-center">5</td>
                                        <td className="bg-[#06AD67] text-white rounded px-1">pending</td>
                                    </tr>
                            </tbody>
                                ))
                            }
                            </table>
                        </div>

                        {/* Customers Feedback */}
                        <div className=" bg-white px-4 py-2 rounded">
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold text-xl mb-4">Customers Feedback</h1>
                                <Image src={dots} alt="" width={5} height={5}/>
                            </div>
                          <div className="flex flex-col gap-5">
                          {
                            array.map(()=>(
                                <div className="flex gap-10 border-b border-[#8B8B8B]">
                                <div>
                                    <h1 className="font-bold">Ghanshyam Adhikari</h1>
                                    <p className="text-[#8B8B8B]">Peaceful environment with good and delicious food </p>
                                </div>
                                <p className="text-[#585858] font-bold">A256</p>
                           </div>
                            ))
                           }
                          </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    ) 
  }