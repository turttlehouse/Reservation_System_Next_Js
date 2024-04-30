import React from 'react'

const page = () => {
  return (
    <>
    
        <div className='flex justify-center items-center p-10'>

            <div className='border border-blue-700 p-5 w-1/3 '>

                <h1 className='text-2xl font-bold text-blue-700'>Add Rate</h1>


                <form action="" className='flex flex-col gap-2 mt-5'>

                {/* Table Name*/}
                    <div>
                        <label htmlFor="tablename">Table Name</label><br />
                        <input className='border rounded border-black w-full' type="text" name="tablename" id="" />
                    </div>

                    {/* Rate per hour, deal price */}
                    <div>

                        <div className="flex gap-2 justify-evenly">

                            <div>
                                <label htmlFor="rateperhour">Rate Per Hour</label><br />
                                <input className='border rounded border-black w-full' type="text" name="rateperhour" id="" />

                            </div>

                            <div>
                                <label htmlFor="dealprice">Deal Price</label><br />
                                <input className='border rounded border-black w-full' type="text" name="dealprice" id="" />
                            </div>

                        </div>

                    </div>
                    

                    {/* Coupun and Discount */}
                    <div>


                        <div className="flex gap-2 justify-evenly">

                            <div>
                                <label htmlFor="coupan">Coupan<small>(optional)</small></label>
                                <input className='border rounded border-black w-full' type="text" name="coupan" id="" />
                            </div>

                            <div>
                                <label htmlFor="discount">Discount<small>(optional)</small></label>
                                <input className='border rounded border-black w-full' type="text" name="discount" id="" />
                            </div>
                        </div>    


                    </div>


                    <label htmlFor="availableperson">Available Person</label>
                    <input className='border rounded border-black w-1/2' type="text" name="availableperson" id="" />



                </form>

                    {/* Button */}
                    <div className="flex flex-row-reverse gap-4">

                        <button className='font-bold px-4 py-1 bg-blue-600 text-white border rounded'>Submit</button>
                        <button className='font-bold'>Cancel</button>
                            
                    </div>



                

            </div>

        </div>    

    
    </>
  )
}

export default page