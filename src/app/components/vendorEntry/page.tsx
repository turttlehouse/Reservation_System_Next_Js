import React from 'react'

const page = () => {
  return (

    <>

        <div className='flex justify-center items-center p-10'>

            <div className='border border-blue-700 p-5 w-1/3 '>

                <h1 className='text-2xl font-bold text-blue-700'>Add Restaurant Vendor</h1>


                <form action="" className='flex flex-col gap-2 mt-5'>

                    <div>
                        <label htmlFor="vendorname">Vendor Name</label><br />
                        <input className='border rounded border-black w-full' type="text" name="vendorname" id="" />
                    </div>

                    <div>
                        <label htmlFor="emailaddress">Email Address</label><br />
                        <input className='border rounded border-black w-full' type="text" name="emailaddress" id="" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label><br />
                        <input className='border rounded border-black w-full' type="text" name="password" id="" />
                    </div>

                    <div>
                        <label htmlFor="restaurantname">Restaurant Name</label><br />
                        <input className='border rounded border-black w-full' type="text" name="restaurantname" id="" />
                    </div>

                    <div>
                        <label htmlFor="address">Address</label><br />
                        <input className='border rounded border-black w-full' type="text" name="address" id="" />
                    </div>

                    <div>
                        <label htmlFor="phonenumber">Phone Number</label><br />
                        <input className='border rounded border-black w-full' type="text" name="phonenumber" id="" />
                    </div>

                    

                </form>

                    {/* Button */}
                    <div className="flex flex-row-reverse gap-4 mt-4">

                        <button className='font-bold px-4 py-1 bg-blue-600 text-white border rounded'>Submit</button>
                        <button className='font-bold'>Cancel</button>
                            
                    </div>



                

            </div>

        </div>    
    
    
    </>

  )
}

export default page