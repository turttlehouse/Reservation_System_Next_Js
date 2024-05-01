import React from 'react'
import Image from "next/image";
import BlueCirlce from '../../../../public/images/BlueCircle.png'
import GreenCirlce from '../../../../public/images/GreenCircle.png'
import RedCirlce from '../../../../public/images/RedCircle.png'


const page = () => {
  return (
    <>
        <div className='flex justify-center items-center p-10'>

            <div className='border border-blue-700 p-5 w-1/2 '>

                <h1 className='text-2xl font-bold text-blue-700'>Create Table</h1>


                <form action="" className='flex flex-col gap-2'>

                {/* Table Name*/}
                    <div>
                        <label htmlFor="tablename">Table Name</label><br />
                        <input className='border rounded border-black w-full' type="text" name="tablename" id="" />
                    </div>

                    {/* Table Number,Capacity, Table Type,Location */}
                    <div>

                        <div className="flex gap-2 justify-evenly">

                            <div>
                                <label htmlFor="tablenumber">Table Number</label><br />
                                <input className='border rounded border-black w-[120px]' type="text" name="tablenumber" id="" />

                            </div>

                            <div>
                                <label htmlFor="capacity">Capacity</label><br />
                                <input className='border rounded border-black w-[120px]' type="text" name="capacity" id="" />
                            </div>


                            <div>
                                <label htmlFor="tabletype">Table Type</label>
                                <input className='border rounded border-black w-[120px]' type="text" name="tabletype" id="" />
                            </div>


                            <div>
                                <label htmlFor="location">Location</label>
                                <input className='border rounded border-black w-[120px]' type="text" name="location" id="" />
                            </div>


                        </div>

                    </div>

                    {/* Date,Available Time */}
                    <div>

                        <div className="flex gap-1">

                            <div>
                                <label htmlFor="date">Date</label><br />
                                <input className='border rounded border-black'  type="date" name="date" id="" />
                            </div>

                            <div>
                                
                                <label htmlFor="availabletime">Available Time</label><br />
                                
                                <div className="flex absolute gap-1 items-center justify-center mt-1">
                                        
                                    <input className='border rounded border-blue-600 h-[20px] w-[70px]' type="time" name="availabletime1" id="" />
                                    <input className='border rounded border-blue-600 h-[20px] w-[70px]' type="time" name="availabletime2" id="" />
                                    <input className='border rounded border-blue-600 h-[20px] w-[70px]' type="time" name="availabletime3" id="" />
                                    <input className='border rounded border-blue-600 h-[20px] w-[70px]' type="time" name="availabletime4" id="" />


                                    <button className='border relative top-2 px-1 border-blue-500 text-white bg-blue-600 rounded text-[10px]'><small>AddMore</small></button>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Description */}
                    <div>

                        <label htmlFor="description">Description</label><br />
                        <textarea style={{ height: '100px', width: '100%' }} placeholder='Table Description here' className='border rounded border-black' name="description" id=""></textarea>
                                                
                    </div>
                    
                    {/* image upload */}
                    <label className='cursor-pointer border rounded border-black p-1 w-[360px]'>

                       <div className="flex gap-2 items-center">
                            <span className='border border-black bg-gray-300 p-1 text-sm text-gray-700'>Choose Image</span>
                            <span className='text-[14px] text-gray-500'>E:\sangrila restaurant\image-2</span>
                        </div>     

                        <input className='hidden' type="file"  id="imageUpload" name="imageUpload" accept="image/*" />

                    </label>

                                    

                    <ul className='flex flex-row-reverse gap-2'>

                            <li className="text-red-800 font-semibold">Cancelled</li>
                            <Image src={RedCirlce} alt="" width={18} height={4}/>
                            <li className='text-green-600 font-semibold'>Reserved</li>
                            <Image src={GreenCirlce} alt="" width={18} height={4}/>
                            <li className='text-blue-600 font-semibold'>Available</li>
                            <Image src={BlueCirlce} alt="" width={18} height={4}/>

                    </ul>





                </form>
            
                {/* Button */}
                <div className="flex flex-row-reverse gap-4 mt-4">

                            <button className='font-bold bg-blue-600 text-white border rounded py-1 px-5'>Submit</button>
                            <button className='font-bold '>Cancel</button>

                </div>

                

            </div>

        </div>    
        
    </>
  )
}

export default page